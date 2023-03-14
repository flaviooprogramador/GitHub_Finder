import {Outlet} from "react-router-dom"

import classes from "./App.module.css"

function App() {

  return (
    <div className="App">
      <h1>GitHub Finder</h1>
      <Outlet />
      
    </div>
  );
}

export default App;
