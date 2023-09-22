import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    //data load for router
     const loadedUsers = useLoaderData()
    //data load for router
    const [users,setUsers] = useState(loadedUsers);
   

    //Db Data Delete Working Start
    const handlerDelete = _id => {
    console.log('delete',_id);
    fetch(`http://localhost:5000/users/${_id}`,{
        method:'DELETE'
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if(data.deletedCount>0){
            alert('deleted successfully');
            const remaining = users.filter(user => user._id !== _id);
            setUsers(remaining)
        }
    })
}
    //Db Data Delete Working End


    return (
        <div>
            <p>{users.length}</p>
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name}{user.email}
                    <Link to={`/update/${user._id}`}><button>Update</button></Link>
                    <button onClick={()=>handlerDelete(user._id)}>X</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;
