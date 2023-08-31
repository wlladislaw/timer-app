import { Dispatch } from 'redux';

export const addMessage = (message: string) => ({
  type: 'ADD_MESSAGE',
  payload: message,
});

export const toggleTimer = (): any => (dispatch: Dispatch, getState: any) => {
  const { timerId } = getState();
  if (timerId === null) {
    let timerId = setInterval(() => {
      dispatch(addMessage('Тестовое сообщение'));
    }, 1500);
    dispatch({ type: 'START_TIMER', payload: timerId });
  } else {
    clearInterval(timerId);
    dispatch({ type: 'STOP_TIMER', payload: null });
  }
};

export const clearMessages = () => ({
  type: 'CLEAR_MESSAGES',
});
