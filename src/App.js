import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  const [count, setCount] = useState(0);

  // upボタンのクリックでカウントを増加させる関数
  function handleClickUpButton (){
    setCount( count + 1 );
  };

  // downボタンのクリックでカウントをダウンさせる関数
  function handleClickDownButton (){
    if (count > 0) {
      setCount( count - 1 );
    }
  };

  return (
    <div style={{width: '300px', margin: '0 auto', paddingTop: '100px'}}>
      <h1 style={{textAlign: 'center', padding: '10px 0'}}>{count}</h1>
      <div style={{margin: '0 auto'}} className='row'>
        <Button className='col-6' variant="secondary" onClick={handleClickUpButton}>up</Button>
        <Button className='col-6' variant="secondary" onClick={handleClickDownButton}>down</Button>
      </div>
    </div>
  );
}

export default App;