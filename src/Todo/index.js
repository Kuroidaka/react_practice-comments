import { useReducer, useRef} from 'react'
import { setJob, addJob, deleteJob} from './action'
import reducer, { initState} from './reducer'
// import Content from './button.js';


function App() {
    const [state, dispatch] = useReducer(reducer, initState);
    const {job, jobs} = state;
    const inputRef = useRef();

    const handleClick = () => {
      dispatch(addJob(job));
      dispatch(setJob(''))
      inputRef.current.focus();
    }

    return (
      <>
        <input
          ref={inputRef}
          value={job}
          onChange = {e => {
              dispatch(setJob(e.target.value))
          }}
        />

          <button 
            onClick={handleClick}
          >add</button>

        {jobs.map((job, index) => 
         
            <li
              key={index}
            >
              {job}
              <button
                onClick={() => dispatch(deleteJob(index))}
              >X</button>

            </li>

          
        )}
      </>

    )
}

export default App;
