import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Copyright from './components/Copyright';
import DateTime from './components/DateTime';



function App() {

  return (
    <div className="App">
      <Header />
      <Main />

      <DateTime />

      <Copyright />
    </div>
  );
}

export default App;