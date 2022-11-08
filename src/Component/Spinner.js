import React from 'react'
import loading from './gif/loading.gif'
const Spinner =()=> {
    return (
        <div className='text-center'>
            <img className = "my-3" style = {{width: "30px"}} src = {loading} alt = "loading"/>
        </div>
    )
}

export default Spinner;