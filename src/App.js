// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Copyright from './components/Copyright';
import DateTime from './components/DateTime';
import Math from './components/Math';
import Practice from './components/Practice';




function App() {

  return (
    <div className="App">
      <Header />
      <Main />

      <DateTime />
      <Math />

      <Practice />

      <Copyright />
    </div>
  );
}

export default App;