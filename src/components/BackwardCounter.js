import useCounter from '../hooks/use-counter';
import Card from './Card';

const BackwardCounter = () => {
  // we pass in false to make the counter go the opposite way 
  const counter = useCounter(false);
  
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
