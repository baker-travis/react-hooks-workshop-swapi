import React from 'react';
import {
  TextField,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Card
} from '@material-ui/core';
import { FavoriteBorderOutlined, Favorite } from '@material-ui/icons';
import styled from 'styled-components';
import usePersonSearch from '../hooks/swapi/usePersonSearch';
import useControlledInput from '../hooks/useControlledInput';
import useFavorites from '../hooks/useFavorites';

const CARD_WIDTH = 350;

const StyledTextField = styled(TextField)`
  width: 200px;
`;

const StyledList = styled(List)`
  max-width: ${CARD_WIDTH}px;
`;

const StyledCard = styled(Card)`
  max-width: ${CARD_WIDTH}px;
`;

export default function SearchPeople() {
  const [value, setValue] = useControlledInput();
  const people = usePersonSearch(value);
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div>
      <StyledTextField
        id="swapi-search"
        type="search"
        label="Search Star Wars People"
        value={value}
        onChange={setValue}
        margin="normal"
      />
      {!!people.length && (
        <StyledCard>
          <StyledList style={{ textAlign: 'left' }}>
            {people.map(person => (
              <ListItem
                key={person.id}
                dense
                button
                onClick={() => toggleFavorite(person.id)}
              >
                <ListItemText primary={person.name} />
                <ListItemIcon>
                  <Checkbox
                    checked={favorites && favorites.indexOf(person.id) !== -1}
                    icon={<FavoriteBorderOutlined />}
                    checkedIcon={<Favorite />}
                    onClick={() => toggleFavorite(person.id)}
                  />
                </ListItemIcon>
              </ListItem>
            ))}
          </StyledList>
        </StyledCard>
      )}
    </div>
  );
}
