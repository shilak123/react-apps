 const Reducer = (state = [],action) =>{
  switch(action.type) {
    case 'ADD_USER':
    return state.concat([action.data]);
    case 'DELETE_USER':
    return state.filter((post) => post.id !== action.id);
default: return state;
}

  }
  export default Reducer;
