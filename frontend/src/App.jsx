import './App.css';
import DessertsList from "./DessertsList";
// App.jsx
import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { desserts } from './data/desserts';



function ErrorFallback({error, resetErrorBoundary}) {
  useEffect(() => {
    // Log error to your error tracking service
    console.error('Error:', error);
  }, [error]);

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}


function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="App">
        <h2>List of low calorie desserts:</h2>
        <DessertsList data={desserts} />
      </div>
    </ErrorBoundary>
  );
}

export default App
