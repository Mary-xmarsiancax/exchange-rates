import React from 'react';
import './App.css';
import Content from "./components/content/content";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

function App() {
  return (
    <div className={"app-wr"}>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
