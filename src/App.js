import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './components/nav';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="app-container">
      <BasicExample />
      <MainContent />
    </div>    
  );
}

export default App;
