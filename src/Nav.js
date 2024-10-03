import React from 'react'
import{Link} from 'react-router-dom'
import './Nav.scss'

const Nav=() =>{


  return (
    
    <div className='nav'>
        
        <ul className='mainnav'>
            
            <Link to='/'><li>Tour</li></Link>
            <Link to='/datingadvise'><li>Dating Advice</li></Link>
            <Link to='.singlenearme'><li>Single Near Me</li></Link>
            <Link to='/login'><li className='login'>Login</li></Link>

        </ul>
    </div>
  )
}

export default Nav