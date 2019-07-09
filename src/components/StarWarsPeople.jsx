import React from 'react';
import SearchPeople from './SearchPeople';
import PeopleFavorites from './PeopleFavorites';
import FavoritesProvider from '../providers/Favorites';

export default function Swapi() {
  return (
    <FavoritesProvider storageKey="favoritesKey">
      <h2>Search</h2>
      <SearchPeople />
      <h2>Favorites</h2>
      <PeopleFavorites />
    </FavoritesProvider>
  );
}
