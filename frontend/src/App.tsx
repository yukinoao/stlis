import React from "react";
import { useEffect } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import axios from "./axiox";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/health_check");
        console.log(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained">Hello World</Button>
      </header>
    </div>
  );
}

export default App;
