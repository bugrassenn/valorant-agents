import { Route, Routes } from "react-router-dom";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
// COMPONENTS
import Agents from "./components/Agents";
import Details from "./components/Details";

function App() {
  const [agents, setAgents] = useState([]);
  useEffect(() => {
    getAgents();
  }, []);

  const getAgents = () => {
    let baseURL = "https://valorant-api.com/v1/agents?isPlayableCharacter=true";
    axios.get(baseURL).then((response) => {
      setAgents(response.data.data);
    });
  };

  const agentsFilter = (displayName) => {
    var filteredAgents = [];
    if (displayName === "") {
      getAgents();
    }
    for (var i in agents) {
      if (agents[i].displayName.toLowerCase().includes(displayName)) {
        filteredAgents.push(agents[i]);
      }
    }

    setAgents(filteredAgents);
  };

  return (
    <>
      <Header agentsFilter={agentsFilter} />
      <Routes>
        <Route path="/" element={<Agents agents={agents} />} />
        <Route path="/detail/:id" element={<Details agents={agents} />} />
      </Routes>
    </>
  );
}

export default App;
