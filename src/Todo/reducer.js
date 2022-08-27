
import {SET_JOB, ADD_JOB, DELETE_JOB} from './constant'

export const initState = {
    job : '',
    jobs : []
  }
  
const reducer = (state, action) => {
    let newState;
    // console.log('prev-state', state)
    switch(action.type){
      case SET_JOB:
        newState = {
          ...state,
          job: action.payLoad
        }
        break
      case ADD_JOB:
        newState = {
          ...state,
          jobs: [...state.jobs,action.payLoad]
        }
        break
      case DELETE_JOB:
        const newJobs = [...state.jobs];
        newJobs.splice(action.payLoad, 1)
        console.log(newJobs);
        newState = {
          ...state,
          jobs: newJobs
        }
        break
      default:
        throw new Error('Invalid Value')
    }
    // console.log(action, newState)
    return newState
}

export default reducer
  