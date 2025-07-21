import { useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage"

type User = {
  uname: string;
  password: string;
}

function App() {
  const [user, setUser] = useLocalStorage<User>({uname: 'johndoe', password: 'john123!'}, 'user');

  useEffect(() => {
    setUser({uname: 'daniel', password: 'jane123!'})
  }, []);

  return (
    <div>
      <h1>App Component</h1>
      Username: {(user as User).uname}
    </div>
  );
}

export default App