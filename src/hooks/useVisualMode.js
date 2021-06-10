import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    !replace && setHistory(prev => [...prev, newMode]);

    setMode(newMode);
  };

  const back = () => {
    history.length - 1 &&
      setHistory(prev => {
        const back = [...prev];

        back.pop();
        setMode(back[back.length - 1]);
        return back;
      });
  };

  return { mode, transition, back };
}
