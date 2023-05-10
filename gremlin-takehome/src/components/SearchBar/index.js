import { useMemo } from 'react';
import { SEARCH_API_URL } from '../../constants/ApiRoutes';

export const SearchBar = ({ onSearchComplete, onError }) => {

  // because this is a serach bar, we want to make sure that
  // we memoize the function that we pass to the onSubmit
  // to reduce the number of times that the end point is hit
  const handleSearch = useMemo(() => {
    return async (event) => {
      // since we are just using a simple form here, we need
      // to prevent default form submission behavior
      event.preventDefault();

      // get the value of the input field
      const query = event.target[0].value;

      if(!query || query.length === 0) {
        // if there is no query, we don't want to make a request
        // so we can just return out of the function
        // we will also clear the search results if any
        onSearchComplete([]);
        return;
      }

      try {
        // try and fetch the data from the api
        const response = await fetch(`${SEARCH_API_URL}${query}`);

        if(response.status !== 200) {
          // if the response is not 200, throw an error
          // this will be caught in the catch block
          throw new Error('Something went wrong');
        }

        // process the response into json
        const data = await response.json();
        // call the onSearchComplete with the processed data
        // so it can be displayed
        onSearchComplete(data);
      } catch (error) {
        // normally this would go into some kind of logging
        // function, but this simple app a console.log is fine
        console.log(error);
        // if there is an error, call the onError function
        // so that it can be displayed
        onError(error);
      }
    }
  }, [onSearchComplete, onError]);

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search" />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}