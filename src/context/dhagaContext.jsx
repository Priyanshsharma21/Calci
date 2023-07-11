import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import dhagaReducer from '../reducer/reducer';

const DhagaContext = createContext();

export const DhagaProvider = ({ children }) => {
  const initialState = {
    dhagas: [], // Initial state for dhagas
  };

  const [state, dispatch] = useReducer(dhagaReducer, initialState)


  return (
    <DhagaContext.Provider value={{ state, dispatch }}>
      {children}
    </DhagaContext.Provider>
  );
};

export const useDhagaContext = () => useContext(DhagaContext);
