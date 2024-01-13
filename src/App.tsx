import React, { createContext, useMemo } from 'react';
import ServiceWrapper  from './utility/components/serviceWrapper.component';
import Main from './components/main.component';


function App() {
  
  return (
    <ServiceWrapper>
      [
        <Main />
      ]
    </ServiceWrapper>
  );
}

export default App;
