import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import FormContainer from "./components/FormContainer/FormContainer";

function App() {
  const [users, setUsers] = useState([]);

  const handleUser = (user) => {
    console.log(users);
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <Banner />
      <FormContainer addUser={(user) => handleUser(user)} />
    </div>
  );
}

export default App;
