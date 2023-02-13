import logo from './logo.svg'
import './App.css'
import {
  ListArticles, 
  TestComponent, 
  FormDelivery
} from './Components'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
// index.css
// App.css
// Shop.css
const fakeDate = [
  {name : 'marguarita', price : 25},
  {name : '4 saisons', price: 32},
  {name : 'marguarita sans prix'},
  {name : '4 saisons', price: 58}
]
let point = 0

const addSomePoint = () => {
  point = point + 1
  console.log(point)
}
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and Bonjour save to reload.
            <Routes>
              <Route path='/Delivery' element={<FormDelivery />} />
              <Route path='/List' element={<ListArticles articles={fakeDate}/>} />
              <Route path='/Test' element={<TestComponent functionClick={addSomePoint} points={point} />}/>
              <Route path='/Pomme' element={<h1>Quel idée des pommes sur une pizza ?!</h1>}/>
            </Routes> 
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
    </Router>
  );
}

export default App;
