import React, { useCallback } from 'react';
import useLocalStorage from 'react-use/lib/useLocalStorage';

export const FavoritesContext = React.createContext();

export default function FavoritesProvider({ children, storageKey }) {
  const [favorites, toggleFavorite] = useFavoritesStorage(storageKey, []);
  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

function useFavoritesStorage(favoritesKey) {
  if (!favoritesKey) throw new Error('useFavorites MUST have a unique key.');

  const [favorites, setFavorites] = useLocalStorage(favoritesKey, []);
  const toggleFavorite = useCallback(
    id => {
      if (favorites.find(favorite => favorite === id)) {
        setFavorites(favorites.filter(favorite => favorite !== id));
      } else {
        setFavorites([...favorites, id]);
      }
    },
    [favorites, setFavorites]
  );

  return [favorites, toggleFavorite];
}
