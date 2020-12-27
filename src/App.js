import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div className="loading"></div>;
  }

  
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;