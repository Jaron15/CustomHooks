import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {
//bc we returned counter in useCounter the updated number will be returned
// here we are storing that number in a variable called counter
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
