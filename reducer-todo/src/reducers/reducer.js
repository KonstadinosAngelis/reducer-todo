export const initialState = [
  {
  item: 'Learn about reducers',
  completed: false,
  id: Date.now()
  }
]

export const reducerThing = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO' :
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(item => item.id === action.payload ? {...item, completed: !item.completed } : item)
      case 'REMOVE_CHECKED':
        return state.filter(item => item.completed === false)
    default: 
    return state;
  }
}