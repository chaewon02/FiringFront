import React, { Component } from 'react';
import './App.scss';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Locations from './pages/locaions';
import Main from './main';
// 부트스트랩 안의 요소들은 사용되는데 css가 적용 안되서 추가했더니 된다
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <BrowserRouter>
      <div id='container'>
          <div>
            <Routes>
              <Route exact path="/" element={<Main/>}/>
              <Route path="/p/*" element={<Locations/>} />
            </Routes>
        </div>
      </div>
            
    </BrowserRouter>
  );
}

export default App;
