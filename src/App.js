import React, { useContext } from 'react'
import Board from './components/board/Board';
import Modal from './components/modal/Modal';
import { GameContext } from './context/GameContext';
import Start from './components/start/Start';
function App() {
  const {screen} = useContext(GameContext)
  return (
    <div className="app">
      <div className="container">
        {screen === 'start' &&  <Start /> }
        {screen === 'game' &&  <Board /> }
      </div>
      <Modal/>
    </div>
  );
}

export default App
