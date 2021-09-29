import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {
    const [friends, setfriends] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setfriends(data))
    }, [])
    return (
        <div>
            <h2>I have friends: {friends.length}</h2>
            <div className="friens-container">
                {
                    friends.map(friend => <Friend
                        friend={friend}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;