import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id} = useParams();
    const [user,setUser] = useState({});
     
    useEffect(()=>{
        const url = `http://localhost:4000/user/${id}`;
        fetch(url)
        .then(res =>res.json())
        .then(data => {
            setUser(data);
            console.log(data);
        });

    },[]);
       // send data to the server
       const handleUpdateUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const user = {name, email};

        // send data to the server
        const url = `http://localhost:4000/user/${id}`;
     
        fetch(url, {
            method: 'PUT', // PUT ===== jodi thake taile update na thakle add korbe
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('users added successfully!!!');
            event.target.reset();
        })
    }


    
    return (
        <div>
   

<form onSubmit={handleUpdateUser}>
                <input type="text" name="name" placeholder='Name' required />
                <br />
                <input type="email" name="email" placeholder='Email' required />
                <br />
                <input type="submit" value="update User" />
            </form>
  </div>
    );
};

export default UpdateUser;