import './App.css';
import { AppProvider } from './Context.js';
import Modal from './modal/Modal.js';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Modal></Modal>
      </div>
    </AppProvider>
  );
}

export default App;
