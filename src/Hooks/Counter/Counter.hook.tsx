import { useState } from 'react';

export const useCounter = () => {
  const [counter, setCounter] = useState<number>(0);

  const addOne = () => {
    setCounter((prevState) => prevState + 1);
  };

  return {
    counter,
    addOne,
  };
};
