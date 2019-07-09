import React, { useCallback } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox
} from '@material-ui/core';
import { Favorite } from '@material-ui/icons';
import styled from 'styled-components';
import useFavorites from '../hooks/useFavorites';
import usePerson from '../hooks/swapi/usePerson';

const StyledPaper = styled(Paper)`
  overflow-x: auto;
`;

export default function PeopleFavorites() {
  const { favorites, toggleFavorite } = useFavorites();
  if (!favorites || !favorites.length) return null;

  return (
    <StyledPaper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" />
            <TableCell>Name</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Height</TableCell>
            <TableCell align="right">Weight</TableCell>
            <TableCell align="right">Birth Year</TableCell>
            <TableCell align="right">Skin Color</TableCell>
            <TableCell align="right">Hair Color</TableCell>
            <TableCell align="right">Eye Color</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {favorites.filter(Boolean).map(favorite => (
            <PeopleRow
              key={favorite}
              id={favorite}
              onUnfavorite={toggleFavorite}
            />
          ))}
        </TableBody>
      </Table>
    </StyledPaper>
  );
}

function PeopleRow({ id, onUnfavorite }) {
  const person = usePerson(id);
  const handleOnUnfavorite = useCallback(() => {
    onUnfavorite(id);
  }, [id, onUnfavorite]);

  if (!person) return null;

  const {
    name,
    gender,
    skin_color,
    mass,
    height,
    hair_color,
    eye_color,
    birth_year
  } = person;

  const inches = Math.round(height / 2.54);

  return (
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox
          checked={true}
          checkedIcon={<Favorite />}
          onClick={handleOnUnfavorite}
        />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell align="right">{gender}</TableCell>
      <TableCell align="right">
        {!isNaN(height) && `${Math.floor(inches / 12)}'${inches % 12}"`}
      </TableCell>
      <TableCell align="right">
        {!isNaN(mass) && `${Math.round(mass * 2.205)}lbs`}
      </TableCell>
      <TableCell align="right">{birth_year}</TableCell>
      <TableCell align="right">{skin_color}</TableCell>
      <TableCell align="right">{hair_color}</TableCell>
      <TableCell align="right">{eye_color}</TableCell>
    </TableRow>
  );
}
