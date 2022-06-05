import React, {useState} from "react";
import {HashRouter} from 'react-router-dom';
import {Route, Navigate, Routes} from 'react-router';
import style from './index.scss'
import Bottom from "../pages/Bottom";
import {Test} from "../pages/Test";
import SearchBarExample from "../home/search";

class Routers extends React.Component {
  render() {
    return (
      <div className='app'>
        <HashRouter basename=''>
          <div className='body'>
            <Routes>
              ...
              <Route exact path="/" element={<Navigate to="/home"/>}/>
              <Route path="/home" element={<SearchBarExample/>}/>
              <Route path="/shequ" element={<Test/>}/>
              <Route path="/shop" element={<Test/>}/>
              <Route path="/me" element={<Test/>}/>
              {/* <Route path="/index" Component={} /> */}
            </Routes>
          </div>
          <div className="bottom">
            <Bottom/>
          </div>
        </HashRouter>
      </div>

    )
  }
}

export default Routers;