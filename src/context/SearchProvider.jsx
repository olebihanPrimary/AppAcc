import React, { createContext, useState } from 'react';
import { SearchContext } from './SearchContext';

// Crear el contexto

// Crear el proveedor del contexto
export const SearchProvider = ({ children }) => {

  const [stringBuscar, setStringBuscar] = useState('');

  return (
    <SearchContext.Provider value={{ stringBuscar, setStringBuscar }}>
      {children}
    </SearchContext.Provider>
  );
};