import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestApi = ()=> {
  const [count, setCount] = useState(0);

 
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    axios.get('http://localhost:3000/create-session').then(t=>console.log(t)).catch(e=>console.log(e))
    axios.get('http://localhost:3000/exists-session').then(t=>console.log(t)).catch(e=>console.log(e))
    document.title = `You clicked ${count} times`;
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default TestApi;