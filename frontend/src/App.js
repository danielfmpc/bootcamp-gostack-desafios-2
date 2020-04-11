import React, {useState, useEffect} from "react";
import './services/api.js'
import "./styles.css";
import api from "./services/api.js";

function App() {
  const [repository, setRepository] = useState([]);
  useEffect(()=> {
    api.get('').then(response => {
      setRepository(response.data)
    });
  },[]);
  async function handleAddRepository() {
    // TODO
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        <li>
          Repositório 1

          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
