import logo from './logo.svg';
import './App.css';
import ListArticles from './Components/ListArticles'
// index.css
// App.css
// Shop.css
const fakeDate = [
  {name : 'marguarita', price : 25},
  {name : '4 saisons', price: 32},
  {name : 'marguarita sans prix'},
  {name : '4 saisons', price: 58}
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and Bonjour save to reload.
          <ListArticles articles={fakeDate}/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
