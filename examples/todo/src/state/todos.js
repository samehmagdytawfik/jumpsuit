import { State } from 'jumpsuit'

let nextTodoID = 0

export default State({
  // This config object is not required, but helpful for debugging
  name: 'todos'
},{
  initial: {
    all: [],
    visibility: 'all'
  },
  add (state, text) {
    const all = [
      ...state.all,
      {id: nextTodoID++, text}
    ]
    return {all}
  },
  toggle (state, id) {
    return {
      all: state.all.map(d => {
        if(d.id == id){
          d.completed = !d.completed
        }
        return d
      })
    }
  },
  setVisibility(state, filter){
    return {
      visibility: filter
    }
  }
})
