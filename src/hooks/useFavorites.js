import { useContext } from 'react';
import { FavoritesContext } from '../providers/Favorites';

export default function useFavorites() {
  return useContext(FavoritesContext);
}
