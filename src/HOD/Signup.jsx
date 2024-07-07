import React from 'react'

 function Signup() {
    

    return (
        <div className='sign-in'>
            <h1>Addmission Form</h1>
            <div className='sign-page'>
               <input type="text" placeholder='Enter a First name' required/>
               <input type="text" placeholder='Enter a Last name'/>
               <br />
               <input type="text" placeholder='Enter a Addmission number' required/>
               <input type="date" placeholder='Enter a Addmission date' required />
               <br />
                <input type="text" placeholder='Enter a Father name' />
                <input type="text" placeholder='Enter a Mother name' />
                <br />
                <input type="date" placeholder='Enter a Age' required/>
                <input type="number" placeholder='Enter a phone number' required/>
                <br />
                <input type="email" placeholder='Enter a Email' required />
                <input type="textarea" placeholder='Enter a address' required />
            </div>
            <button>Add Data</button>
        </div>
    )
}
export default Signup