import React, { useReducer, useContext } from 'react';
import reducer from './reducer';
import { DISPLAY_ALERT } from "./actions";

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

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
  }

  return <AppContext.Provider value={{ ...state, displayAlert }} >
    {children}
  </AppContext.Provider>
}

//To call a hook inside a function, we start that functiona name by "use", so useAppContext
const useAppContext = () => {
  return useContext(AppContext);
}


export { AppProvider, initialState, useAppContext };