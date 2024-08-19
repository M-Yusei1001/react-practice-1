import { useContext, useEffect, useReducer, useRef, useState } from 'react';
import './App.css';
import UserInfoContext from './main';

const reducer = (state, action) => {
  switch(action.type){
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

function App(){
  const [count, setCount] = useState(0); 

  //useContextは、異なるtsxファイル間で情報を共有できる。
  //ログイン情報の共有などに使用される。
  const userInfo = useContext(UserInfoContext);

  //useRefは、ref属性がついたHTMLタグの値を読み取ることができる（inputタグなど）
  //例えば、inputタグで使えば、inputタグのすべての情報を取得できる。
  //入力した文字を取得したいなら、定数refにタグの情報が反映されているので、
  //そのcurrent.value属性を参照すればよい。
  const ref = useRef();

  //useReducerは、Reduxについて理解してからでないと判らない。
  const [state, dispatch] = useReducer(reducer, 0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("reloaded");
  }, [count]);

  const handleRef = () => {
    console.log(ref.current.value);
    console.log(ref);
  };

  return(
    <div className='App'>
      <h1>useState, useEffect</h1>
      <button onClick={ handleClick }>+</button>
      <p>{ count }</p>

      <hr/>
      <h1>useContext</h1>
      <p>{ userInfo.name }</p>
      <p>{ userInfo.type }</p>

      <hr/>
      <h1>useRef</h1>
      <input type='text' ref={ref}/>
      <button onClick={handleRef}>UseRef</button>

      <hr/>
      <h1>useReducer</h1>
      <p>カウント：{state}</p>
      <button onClick={() => dispatch({type: "increment"})}>+</button>
      <button onClick={() => dispatch({type: "decrement"})}>-</button>


    </div>
  );
}

export default App;