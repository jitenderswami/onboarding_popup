import './App.css';
import { AppProvider } from './Context';
import Modal from './modal/Modal';

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
