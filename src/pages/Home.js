import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    const [users,setUser] = useState([]);
useEffect(()=>{
    fetch('http://localhost:4000/user')
    .then(res =>res.json())
   .then(data => {
       console.log(data);
       setUser(data)
   })
},[]);
const handleUserDelete = id =>{
    const proceed = window.confirm('Are you sure you want to delete?');
    if(proceed){
        console.log('deleting user with id', id);
        const url = `http://localhost:4000/user/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
                console.log('deleted');
                const remaining = users.filter(user => user._id !== id);
                setUser(remaining);
              
            
        })
    }
}
    return (
        <div>
<h1>            this is Home.{users.length}
</h1>

        {
            users.map(user =><li key={user._id}>{user.name}:: {user.email} 
            <Link to={`/update/${user._id}`}>Update</Link>
            <button className='bg-danger' onClick={() =>handleUserDelete(user._id)}>Delete</button> </li>)
        }



        </div>
    );
};

export default Home;