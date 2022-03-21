import Modal from 'react-modal';
import './App.css';
import React, { useState } from 'react'

Modal.setAppElement('#root')
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div className="App">
      <button onClick={() => setModalIsOpen(true)}
      style={
        {
          width: '180px',
          marginTop: '15rem',
        }
      }>Cliquez ici pour ouvrir</button>

      {/* here we can close the modal by pressing the overlay*/}
      <Modal isOpen={modalIsOpen} 
       onRequestClose={() => setModalIsOpen(false)}
       style={
         {
           overlay: {
             backgroundColor: '#c5c5c5'
           },
           content: {
             background:'white'},
         }
       }>
        <h2>Ceci est une Modal avec React</h2>
        <p>Génial !!!</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Cliquez ici pour fermer</button>
        </div>
      </Modal>

    </div>
  );
}

export default App;
