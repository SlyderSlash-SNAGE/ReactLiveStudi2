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
import reginaimg from './img/regina.jpeg'
import { useEffect } from 'react'
import api from './config/axios'
import Recoil from 'recoil'
// index.css
// App.css
// Shop.css



const fakeDate = [
  {name : 'marguarita', price : 25},
  {name : 'Regina', price: 32, img: reginaimg},
  {name : 'marguarita sans prix'},
  {name : '4 saisons', price: 58},
  {name : 'La spécial Luigi', price: 150},
  {name : 'Calzone (surgelé Lidl)', price: 3000}
]
let point = 0
//API Serveur => APP React Client
//API Serveur => Servir APP React => Client
const addSomePoint = () => {
  point = point + 1
  console.log(point)
}
function App() {
  /*useEffect(()=> {
    api.get('/pizzas')
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.error(error)
    })
  }, [])*/

  return (
    <Recoil.RecoilRoot>
    <Router>
        <div className="App">
              <Routes>
                <Route path='/Delivery' element={<FormDelivery />} />
                <Route path='/List' element={<ListArticles articles={fakeDate}/>} />
                <Route path='/Test' element={<TestComponent functionClick={addSomePoint} points={point} />}/>
                <Route path='/Pomme' element={<h1>Quel idée des pommes sur une pizza ?!</h1>}/>
              </Routes> 
        </div>
    </Router>
    </Recoil.RecoilRoot>
  );
}

export default App;
