import './App.css';
import DessertsList from "./DessertsList";
import RegistrationForm from './RegistrationForm';
// App.jsx
import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { desserts } from './data/desserts';

function ErrorFallback({error, resetErrorBoundary}) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="App">
        <h2>Little Lemon Registration and Desserts</h2>
        <div className="MainContainer">
          <div className="DessertsList">
            <h3>Low Calorie Desserts</h3>
            <DessertsList data={desserts} />
          </div>
          <div className="RegistrationForm">
            <h3>Sign Up Form</h3>
            <RegistrationForm />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;