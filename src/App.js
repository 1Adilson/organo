import "./App.css";
import { useState } from "react";
import Banner from "./components/Banner/Banner";
import FormContainer from "./components/FormContainer/FormContainer";
import Team from "./components/Team/Team";

function App() {
  const [users, setUsers] = useState([]);

  const handleUser = (user) => {
    console.log(users);
    setUsers([...users, user]);
  };

  const teams = [
    {
      name: "Programação",
      primaryColor: "#57C278",
      secundaryColor: "#D9F7E9",
      id: 1,
    },
    {
      name: "Front-end",
      primaryColor: "#82CFFA",
      secundaryColor: "#E8F8FF",
      id: 2,
    },
    {
      name: "Data Science",
      primaryColor: "#A6D157",
      secundaryColor: "#F0F8E2",
      id: 3,
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secundaryColor: "#FDE7E8",
      id: 4,
    },
    {
      name: "UX e Design",
      primaryColor: "#D86EBF",
      secundaryColor: "#FAE5F5",
      id: 5,
    },
    {
      name: "Mobile",
      primaryColor: "#FEBA05",
      secundaryColor: "#FFF5D9",
      id: 6,
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secundaryColor: "#FFEEDF",
      id: 7,
    },
  ];

  const teamsNames = teams.map((item) => item.name);
  return (
    <div className="App">
      <Banner />
      <FormContainer addUser={(user) => handleUser(user)} teams={teamsNames} />
      {teams.map((item) => {
        return (
          <Team
            name={item.name}
            primaryColor={item.primaryColor}
            secundaryColor={item.secundaryColor}
            key={item.id}
          ></Team>
        );
      })}
    </div>
  );
}

export default App;
