import React from 'react';
import './App.css';
import {AppRouter} from './router/router'
import IAppBar from './components/appbar/appbar'

const App = () => {
  return (
    <div className="App">
    <AppRouter>
        <IAppBar/>
    </AppRouter>
    </div>
  );
}

export default App;
