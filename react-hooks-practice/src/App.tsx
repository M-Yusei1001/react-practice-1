import { useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import './App.css';
import UserInfoContext from './main';
import SomeChild from './SomeChild'

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
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  //useMemoは、メモリに情報（値）を保存することができる。
  //プログラムから上から順に実行される。
  //DOMが書き換えられたときも上から順に実行されるが、その書き換えに関係ない処理も実行される。
  //間に重い処理が挟まっていると、その処理に関係ないDOM操作をした時も読み込みに時間がかかってしまう。
  //関係あるDOM操作のときだけ処理を実行するように指定することができる。
  //パフォーマンス改善のとき用いられる。
  const square = useMemo(() => {
    let i = 0;
    while (i<200000000){
      i++;
    }
    return count02 * count02;
  }, [count02]);

  //useCallBackは、useMemoの関数版。メモリに関数を保存することができる。
  const [counter, setCounter] = useState(0);

  const showCount = useCallback(() => {
    alert('これは重い処理です。');
  }, [counter]);

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

      <hr/>
      <h1>useMemo</h1>
      <p>カウント１：{count01}</p>
      <p>カウント２：{count02}</p>
      <p>結果：{square}</p>
      <button onClick={() => setCount01(count01 + 1)}>+</button>
      <button onClick={() => setCount02(count02 + 1)}>+</button>

      <hr/>
      <h1>useCallBack</h1>
      <SomeChild showCount = { showCount }/>
      <button onClick={() => setCounter(counter + 1)}>+</button>

    </div>
  );
}

export default App;