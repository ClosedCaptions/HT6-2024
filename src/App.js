// import logo from './logo.svg';
import TitleComp from './titleComp';
import './App.css';
import Search from './searchBar'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleComp /> 
      </header>
      <header className = "bar"> 
        <Search></Search>
      </header>
    </div>
  );
}

export default App;
