import React, { useState, useEffect } from 'react';
import {Text} from "react-native";

export default function Counter() {
  const [counter, setCounter] = useState(5);
  const [interval, setInt] = useState(null);

  useEffect(() => {
    if (counter === 0) clearInterval(interval);
  }, [counter]);
  useEffect(() => {
    setInt(setInterval(() => {
      setCounter(counter => counter - 1);
    }, 1000));

  }, []);

  return <Text>{counter}</Text>;
};
