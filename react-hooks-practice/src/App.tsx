import { useContext, useEffect, useState } from 'react';
import './App.css';
import UserInfoContext from './main';

function App(){
  const [count, setCount] = useState(0); 
  const userInfo = useContext(UserInfoContext);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("reloaded");
  }, [count]);

  return(
    <div className='App'>
      <h1>useState, useEffect</h1>
      <button onClick={ handleClick }>+</button>
      <p>{ count }</p>

      <hr/>
      <h1>useContext</h1>
      <p>{ userInfo.name }</p>
      <p>{ userInfo.type }</p>

    </div>
  );
}

export default App;