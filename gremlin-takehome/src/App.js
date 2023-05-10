import { useState } from 'react';
import { SearchResultItem } from './components/SearchResults';
import { SearchBar } from './components/SearchBar';
import { ErrorMessage } from './components/Error';
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <SearchBar 
        onSearchComplete={setSearchResults}
        onError={setError}
      />
      {
        !error && searchResults.map((result, idx) => {
          return <SearchResultItem key={idx} data={result}/>
        })
      }
      {
        error && <ErrorMessage error={error}/>
      }
    </div>
  );
}

export default App;
