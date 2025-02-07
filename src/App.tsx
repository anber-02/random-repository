import { useEffect } from "react";
import { getLanguages } from "./api/api";
import "./App.css";
import Repository from "./components/Respository";

function App() {
  useEffect(function () {
    getLanguages().then((data) => {
      console.log(data);
    });
  }, []);
  return <Repository />;
}

export default App;
