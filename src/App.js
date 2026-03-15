import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState(null);
  const API_URL = "https://test-website-backend-djdmdfgxcfbugfeq.eastasia-01.azurewebsites.net/";

  useEffect(() => {

    const fetchData = async () => {
      try {
        console.log(process.env.REACT_APP_BACKEND_URL);
        const response = await fetch(API_URL);
        const result = await response.json();
        console.log(result);
        setData(result.msg);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data ? data : "Loading..."}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
