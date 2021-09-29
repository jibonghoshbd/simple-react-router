import React from 'react';
import './Friend.css'

const Friend = (props) => {
    const { name, username, email, phone, website } = props.friend;
    return (
        <div className='frined'>
            <h2>Name: {name} </h2>
            <h4>UserName: {username}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default Friend;