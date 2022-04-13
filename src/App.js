import React from 'react';
import { useState } from 'react'
import './App.css';

function App() {
  let [inventory,setCounter] = useState({
    books: 0,
    pens:0,
    notebooks:0
  })
  let Total = (inventory.books+inventory.pens+inventory.notebooks)
  let countHandler =(value,category)=>{
    if(category === "books"){
      if(inventory.books === 0 && value === -1){
        setCounter({
          books: inventory.books+0,
          pens: inventory.pens,
          notebooks:inventory.notebooks
        })
        return ;
      }
      setCounter({
        books: inventory.books+value,
        pens: inventory.pens,
        notebooks:inventory.notebooks
      })
    }else if(category === "pens"){
      if(inventory.pens ===0 && value === -1){
        setCounter({
          books: inventory.books,
          pens:inventory.pens + 0,
          notebooks: inventory.notebooks
        })
        return
      }
      setCounter({
          books: inventory.books,
          pens:inventory.pens + value,
          notebooks: inventory.notebooks
      })
    }else if(category === "notebooks"){
      if(inventory.notebooks === 0 && value === -1){
        setCounter({
          books: inventory.books,
          pens: inventory.pens,
          notebooks: inventory.notebooks + 0,

        })
        return;
      }setCounter({
        books: inventory.books,
        pens:inventory.pens,
        notebooks: inventory.notebooks+ value
      })
    }
  }
  return (
    <div className="App">
  
      <div>
      <h1>books= {inventory.books}</h1>
      <button onClick={()=>{countHandler(1 ,"books")}}>+</button>
      <button onClick={()=>{countHandler( -1 ,"books")}}>-</button>
      <h1>pens = {inventory.pens}</h1>
      <button onClick={()=>{countHandler(1 ,"pens")}}>+</button>
      <button onClick={()=>{countHandler(-1 ,"pens")}}>-</button>
      <h1>notebooks={inventory.notebooks}</h1>
      <button onClick={()=>{countHandler(1 ,"notebooks")}}>+</button>
      <button onClick={()=>{countHandler(-1 ,"notebooks")}}>-</button>
      <h1>Total = {Total}</h1>
      </div>
      
    </div>
  );
}

export default App;
