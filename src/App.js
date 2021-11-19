import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './index.css';

import {Header} from './components/Header.jsx'
import {Footer} from './components/Footer.jsx'
import {Home} from './pages/Home.jsx'
import {NotFound} from './pages/NotFound.jsx'
import {Category} from  './pages/Category.jsx'
import {Recipe} from './pages/Recipe.jsx'

function App(){
  return <>
   <Header />
    <main className='container content'>
      <Router basename='/recipesApp'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/recipe/:id' component={Recipe}/>
          <Route path='/category/:name' component={Category}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </main>
    <Footer /> 
 </>
}

export {App}