import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Tour from './Tour'
import Datingadvise from './Datingadvise'
import Singlenearme from './Singlenearme'
import Login from './Login'
import Nav from './Nav'



const App =()=>{
  return(

    <div>
     
      <Router>

        
       <Nav/>
       
        <Routes>
          <Route path='/' element ={<Tour/>}/>
          <Route path='/datingadvise' element={<Datingadvise/>}/>
          <Route path='/singlenearme' element ={<Singlenearme/>}/>
          <Route path='/login' element ={<Login/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App