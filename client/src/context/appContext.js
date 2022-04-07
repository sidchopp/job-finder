import React, { useReducer, useContext } from 'react';
import reducer from './reducer';

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
}

const AppContext = React.createContext();

// To wrap our whole application inside this function
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AppContext.Provider value={{ ...state }} >
    {children}
  </AppContext.Provider>
}

//To call a hook inside a function, we start that functiona name by "use", so useAppContext
const useAppContext = () => {
  return useContext(AppContext);
}


export { AppProvider, initialState, useAppContext };