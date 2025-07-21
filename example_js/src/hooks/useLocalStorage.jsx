import { useState } from "react"


function useLocalStorage(initialValue, key) {
  const [value] = useState(readFromLocalStorage);

  function readFromLocalStorage(){
    const name = localStorage.getItem(key);
    return name ? name : initialValue;
  }
  function saveToLocalStorage() {
    localStorage.setItem(key, initialValue);
  }
  return [value, saveToLocalStorage];
}

export default useLocalStorage
