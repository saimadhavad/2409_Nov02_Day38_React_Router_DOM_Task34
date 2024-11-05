import React from 'react'
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <div className='signInDiv'>
       <form>
            <h1>Signin</h1>
             <div>
                <label>Email</label>
                <input type='text'></input>
            </div>
            <div>
                <label>Password</label>
                <input type='Number'></input>
            </div>
            <div className='linkButton'>
                {/* <button type='button'>Signin</button>  */}
                <Link className='button' to="/dashboard">Signin</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                <Link className='button' to="/signup">signup</Link>
                
            </div>
        </form>
        
    </div>
  )
}

export default Signin
