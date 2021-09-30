import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])
    const { name, email, phone } = friend;
    return (
        <div>
            <h3>Friend Deatils of: {friendId}</h3>
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
            <h4>Phone: {phone}</h4>
            <p>Street: {friend.address?.street}</p>
            <p>Street: {friend.address?.city}</p>
            <p>Street: {friend.address?.zipcode}</p>

        </div>
    );
};

export default FriendDetail;