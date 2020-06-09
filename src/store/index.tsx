import React, {
  useReducer,
  useContext,
  createContext,
  FunctionComponent
} from 'react';
import { reducer } from './reducer';
import { StoreContextValue, BoardState } from './types';

const INITIAL_STATE: BoardState = {
  todo: [],
  inProgress: [],
  done: []
};

const CONTEXT_INITIAL_STATE: StoreContextValue = [INITIAL_STATE, () => {}];

export const StoreContext = createContext(CONTEXT_INITIAL_STATE);

export const useStore: () => StoreContextValue = () => {
  const [state, dispatch] = useContext(StoreContext);

  return [state, dispatch];
};

export const StoreProvider: FunctionComponent<{}> = ({ children }) => {
  // TODO: use init fun for storing tasks into local storage
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};
