import React, { useCallback } from 'react';
import Header from './component/header/index'

function App() {

  const fn = useCallback((val) => {
    console.log(val);
  }, [])

  return (
    <div className="App" title="label">
      hello jest
      <Header name="qinqihan" onchange={fn} />
    </div>
  );
}

export default App;
