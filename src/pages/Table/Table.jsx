import { useEffect, useState } from "react"
import { getStandings } from "../../api/footballApi"
import {
  TableWrapper,
  TableTitle,
  TableContainer,
  TableGrid,
  HeaderRow,
  HeaderCell,
  Row,
  Cell,
  TeamCell,
  Logo
} from "./Table.styled"

const Table = () => {
  const [table, setTable] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getStandings()
      .then((data) => setTable(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <TableWrapper>Loading...</TableWrapper>

  return (
    <TableWrapper>
      <TableContainer>
        <TableTitle>Premier League Table</TableTitle>

        <TableGrid>
          {/* Header */}
          <HeaderRow>
            <HeaderCell>Pos</HeaderCell>
            <HeaderCell justifyStart>Team</HeaderCell>
            <HeaderCell>Pl</HeaderCell>
            <HeaderCell>W</HeaderCell>
            <HeaderCell>D</HeaderCell>
            <HeaderCell>L</HeaderCell>
            <HeaderCell>GF</HeaderCell>
            <HeaderCell>GA</HeaderCell>
            <HeaderCell>GD</HeaderCell>
            <HeaderCell>Pts</HeaderCell>
          </HeaderRow>

          {/* Rows */}
          {table.map((team) => (
            <Row key={team.team.id} position={team.position}>
              <Cell>{team.position}</Cell>
              <Cell justifyStart>
                <Logo src={team.team.crest} />
                <TeamCell>{team.team.name}</TeamCell>
              </Cell>
              <Cell>{team.playedGames}</Cell>
              <Cell>{team.won}</Cell>
              <Cell>{team.draw}</Cell>
              <Cell>{team.lost}</Cell>
              <Cell>{team.goalsFor}</Cell>
              <Cell>{team.goalsAgainst}</Cell>
              <Cell>{team.goalDifference}</Cell>
              <Cell>{team.points}</Cell>
            </Row>
          ))}
        </TableGrid>
      </TableContainer>
    </TableWrapper>
  )
}

export default Table
