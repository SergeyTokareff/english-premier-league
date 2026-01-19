import { useEffect, useState } from "react";
import { getMatches } from "../../api/footballApi";
import {
  MatchesWrapper,
  MatchesContainer,
  MatchesTitle,
  MatchdayNav,
  NavButton,
  MatchdayLabel,
  DateGroup,
  DateHeader,
  MatchList,
  MatchCard,
  Team,
  Score,
} from "./Matches.styled";

const Matches = () => {
  const [groupedByMatchday, setGroupedByMatchday] = useState([]);
  const [currentMatchdayIndex, setCurrentMatchdayIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMatches()
      .then((matches) => {
        // 1. Групуємо матчі по туру
        const grouped = matches.reduce((acc, match) => {
          const md = match.matchday ?? 0;
          if (!acc[md]) acc[md] = [];
          acc[md].push(match);
          return acc;
        }, {});

        // 2. Перетворюємо у масив турів і сортуємо по зростанню
        const sortedMatchdays = Object.keys(grouped)
          .map((md) => Number(md))
          .sort((a, b) => a - b)
          .map((md) => ({
            matchday: md,
            matches: grouped[md],
          }));

        // 3. Усередині кожного туру — групуємо по даті
        const withDates = sortedMatchdays.map(({ matchday, matches }) => {
          const byDate = matches.reduce((acc, m) => {
            const dateKey = new Date(m.utcDate).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            });
            if (!acc[dateKey]) acc[dateKey] = [];
            acc[dateKey].push(m);
            return acc;
          }, {});

          // Перетворюємо у відсортований масив дат
          const sortedDates = Object.keys(byDate)
            .sort(
              (a, b) =>
                new Date(a.split(" ").join(" ")) -
                new Date(b.split(" ").join(" ")),
            )
            .map((date) => ({
              date,
              matches: byDate[date],
            }));

          return { matchday, dates: sortedDates };
        });

        setGroupedByMatchday(withDates);

        const today = new Date()
      let bestIndex = 0
      let smallestDiff = Infinity

      sortedMatchdays.forEach(({ matches }, idx) => {
        const firstDate = new Date(matches[0].utcDate)
        const diff = Math.abs(firstDate - today)
        if (diff < smallestDiff) {
          smallestDiff = diff
          bestIndex = idx
        }
      })

      setCurrentMatchdayIndex(bestIndex)
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <MatchesWrapper>Loading matches...</MatchesWrapper>;
  if (!groupedByMatchday.length)
    return <MatchesWrapper>No matches found...</MatchesWrapper>;

  const { matchday, dates } = groupedByMatchday[currentMatchdayIndex];

  return (
    <MatchesWrapper>
      <MatchesContainer>
        <MatchesTitle>Premier League Matches</MatchesTitle>

        <MatchdayNav>
          <NavButton
            onClick={() => setCurrentMatchdayIndex((i) => Math.max(i - 1, 0))}
            disabled={currentMatchdayIndex === 0}
          >
            ← Prev
          </NavButton>

          <MatchdayLabel>Matchday {matchday}</MatchdayLabel>

          <NavButton
            onClick={() =>
              setCurrentMatchdayIndex((i) =>
                Math.min(i + 1, groupedByMatchday.length - 1),
              )
            }
            disabled={currentMatchdayIndex === groupedByMatchday.length - 1}
          >
            Next →
          </NavButton>
        </MatchdayNav>

        {/* матчі по датах */}
        {dates.map(({ date, matches }) => (
          <DateGroup key={date}>
            <DateHeader>{date}</DateHeader>

            <MatchList>
              {matches.map((m) => (
                <MatchCard key={m.id}>
                  <Team side="left">{m.homeTeam.name}</Team>

                  <Score>
                    {typeof m.score?.fullTime?.home === "number" &&
                    typeof m.score?.fullTime?.away === "number"
                      ? `${m.score.fullTime.home} : ${m.score.fullTime.away}`
                      : "– : –"}
                  </Score>

                  <Team side="right">{m.awayTeam.name}</Team>
                </MatchCard>
              ))}
            </MatchList>
          </DateGroup>
        ))}
      </MatchesContainer>
    </MatchesWrapper>
  );
};

export default Matches;
