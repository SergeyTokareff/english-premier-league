// НЕ axios з football-data.org напряму

export const getStandings = async () => {
  const res = await fetch(
    `/api/apiHandler?path=competitions/PL/standings`
  );
  if (!res.ok) throw new Error("Failed to fetch standings");
  const data = await res.json();
  return data.standings[0].table;
};

export const getMatches = async () => {
  const res = await fetch(
    `/api/apiHandler?path=competitions/PL/matches`
  );
  if (!res.ok) throw new Error("Failed to fetch matches");
  const data = await res.json();
  return data.matches;
};
