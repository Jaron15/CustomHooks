import {useState, useEffect} from 'react';

// custom hook name must start with 'use'
const useCounter = (forwards = true ) => {
    const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
        } else { 
        setCounter((prevCounter) => prevCounter - 1);
        }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);
// we return the counter state to be referenced when the useCounter hook is called 
  return counter;
};

export default useCounter;