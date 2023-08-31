export interface State {
  messages: string[];
  timerId: number | null;
}

const initialState: State = {
  messages: [],
  timerId: null,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'START_TIMER':
      return { ...state, timerId: action.payload };
    case 'STOP_TIMER':
      return { ...state, timerId: null };
    case 'ADD_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] };
    case 'CLEAR_MESSAGES':
      return { ...state, messages: [] };
    default:
      return state;
  }
};

export default reducer;
