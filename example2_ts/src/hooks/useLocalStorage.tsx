import { useState } from "react";


function useLocalStorage<T>(
  initialValue: T,
  key: string
): [T, (value: T) => void] {
  const [item, setItem] = useState<T>(readFromLS);

  function readFromLS(): T {
    const lsItem = localStorage.getItem(key);
    return lsItem ? JSON.parse(lsItem) : initialValue;
  }

  function saveToLS(newValue: T): void {
    setItem(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  }

  return [item, saveToLS];
}

export default useLocalStorage;