import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const { id, name, username, email, phone, website } = props.friend;
    const history = useHistory();
    const url = `/friend/${id}`;
    const handelFirBtn = () => {
        history.push(url);

    }

    return (
        <div className='frined'>
            <h2>I'm: {name} {id}</h2>
            <h4>UserName: {username}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <Link to={url}>Visit Me</Link>
            <br /><br />
            <button onClick={handelFirBtn}>Visit Me2</button>
        </div>
    );
};

export default Friend;