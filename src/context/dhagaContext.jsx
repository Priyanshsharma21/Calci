import { createContext, useContext, useEffect, useReducer } from 'react';
import dhagaReducer from '../reducer/reducer';

const DhagaContext = createContext();

export const DhagaProvider = ({ children }) => {
  const initialState = {
    dhagas: JSON.parse(localStorage.getItem('dhagas')) || [],
  };

  const [state, dispatch] = useReducer(dhagaReducer, initialState)

  useEffect(() => {
    localStorage.setItem('dhagas', JSON.stringify(state.dhagas));
  }, [state.dhagas]);


  return (
    <DhagaContext.Provider value={{ state, dispatch }}>
      {children}
    </DhagaContext.Provider>
  );
};

export const useDhagaContext = () => useContext(DhagaContext);
