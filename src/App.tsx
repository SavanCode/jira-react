import React from "react";
import "./App.css";
import { ProjectListScreen } from "screens/project-list";
import { LoginScreen } from "screens/login/inde";

function App() {
  return (
    <div className="App">
      <ProjectListScreen />
      <LoginScreen />
    </div>
  );
}

export default App;
