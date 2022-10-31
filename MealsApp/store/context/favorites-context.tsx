import * as React from "react";

interface FavoritesContextInterface {
  ids: Array<string>;
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

interface FavoritesContextProviderProps {
  children: React.ReactNode;
}

export const FavoritesContext =
  React.createContext<FavoritesContextInterface | null>(null);

export const FavoritesContextProvider: React.FC<
  FavoritesContextProviderProps
> = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = React.useState<Array<string>>([]);

  const addFavorite = (id: string) => {
    setFavoriteIds((currentState) => [...currentState, id]);
  };
  const removeFavorite = (id: string) => {
    setFavoriteIds((currentState) =>
      currentState.filter((currentIds) => currentIds !== id)
    );
  };

  const value: FavoritesContextInterface = {
    ids: favoriteIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
