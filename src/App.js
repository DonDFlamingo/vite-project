import "./App.css";
import { useState } from "react";
import UserContext from "./UserContext";
import UserProfile from "./components/UserProfile";

function App() {
  const [user, setUser] = useState(false);
  

  return (
    <UserContext.Provider value={{ isOnline: user, setIsOnline: setUser }}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;