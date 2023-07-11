// dhagaReducer.js

const dhagaReducer = (state, action) => {
    switch (action.type) {
      case 'CREATE_DHAGA':
        // Logic to create a new dhaga
        return {
          ...state,
          // Update the state with the new dhaga
        };
  
      case 'UPDATE_DHAGA':
        // Logic to update an existing dhaga
        return {
          ...state,
          // Update the state with the updated dhaga
        };
  
      case 'DELETE_DHAGA':
        // Logic to delete a dhaga
        return {
          ...state,
          // Update the state by removing the deleted dhaga
        };
  
      default:
        return state;
    }
  };
  
  export default dhagaReducer;
  