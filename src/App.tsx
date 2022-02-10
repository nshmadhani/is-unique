import React, { useEffect, useState } from "react";

import "./App.scss";
import Home from "./components/Home";
import { Fluence } from "@fluencelabs/fluence";
import { krasnodar } from "@fluencelabs/fluence-network-environment";


const relayNode = krasnodar[0];
function App() {

  const [isConnected, setIsConnected] = useState(false);
  useEffect( () => {
    async function connect() {
      await Fluence.start({ connectTo: krasnodar[0] });
      setIsConnected(true)
    }
    connect()
  }, []);



  return (
    <div className="App">
      { isConnected ? <Home></Home> : "Not Connected"}
    </div>
  );
}

export default App;
