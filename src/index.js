import React from 'react';
import ReactDOM from 'react-dom'
import Header from './Header';
import Alrit from './Alrit'
import Main from './Main';
import  './index.css'
import './App.css'
import './Post.css'
import {createRoot } from 'react-dom/client'
const rootElement =document.getElementById("root");
const root =createRoot(rootElement);
root.render(
<React.StrictMode>    
        <Header/>
      <Alrit/>
      <Main/>     
</React.StrictMode>
)
