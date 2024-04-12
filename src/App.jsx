import './App.css';
import Header from "./components/Header";
import Photos from "./components/Photos";
import { useState } from 'react';

function App() {

  const [input, setInput] = useState("");

  return (
    <>
      <Header inputValue={setInput} />
      <Photos searchedPhoto={input} />
    </>
  )
}

export default App