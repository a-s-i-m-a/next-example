import React, {useState} from 'react';

const Users = () => {
    const [users, setUsers] = useState([
        {id:1, name: 'test'},
        {id:2, name: 'test2'}
    ])
    return (
        <div>
            users
            <ul>
                {
                    users.map((user)=>(
                        <li>{user.name}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Users;