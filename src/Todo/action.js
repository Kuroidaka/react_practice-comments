
import {SET_JOB, ADD_JOB, DELETE_JOB} from './constant'
export const setJob = payLoad => {
    return {
        type: SET_JOB,
        payLoad
    }
  
  }
  

export const addJob = payLoad => {
    return {
      type: ADD_JOB,
      payLoad
    }
  }
  

export const deleteJob = payLoad => {
    return {
      type: DELETE_JOB,
      payLoad
    }
  }
  