// dhagaReducer.js

const dhagaReducer = (state, action) => {
    switch (action.type) {
      case 'CREATE_DHAGA':
        const createdDhaga = action.payload;
        const createdDhagas = [...state.dhagas, createdDhaga];
        localStorage.setItem('dhagas', JSON.stringify(createdDhagas));
        return {
        ...state,
        dhagas: createdDhagas,
        };
  


      case 'UPDATE_DHAGA':
       const updatedDhaga = action.payload;
        const updatedDhagas = state.dhagas.map((dhaga) =>
            dhaga.id === updatedDhaga.id ? updatedDhaga : dhaga
        );
        localStorage.setItem('dhagas', JSON.stringify(updatedDhagas));
        return {
         ...state,
         dhagas: updatedDhagas,
        };
  
      case 'DELETE_DHAGA':
        const deletedDhagaId = action.payload;
        const filteredDhagas = state.dhagas.filter(
          (dhaga) => dhaga.id !== deletedDhagaId
        );
        localStorage.setItem('dhagas', JSON.stringify(filteredDhagas));
        return {
          ...state,
          dhagas: filteredDhagas,
        };
        
      default:
        return state;
    }
  };
  
  export default dhagaReducer;
  