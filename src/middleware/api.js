const api = ({ getState, dispatch }) => next => action => {
    next(action);
  };
  
  export default api;