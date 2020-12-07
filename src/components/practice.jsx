import React, {useState, useEffect} from 'react';

const Practice = () => {
    const [user, setUser] = useState('')
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchFunc = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${searchQuery}`)
            const resJson = await response.json();
            setUser(resJson[0])
        }

        fetchFunc();
    }, [searchQuery]);

    return (
        <div>
            <input
                type="search"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
            />
            <div>
                { user ? (
                    <div>
                        <h3>{user.name}</h3>
                        <h3>{user.username}</h3>
                        <h3>{user.email}</h3>
                    </div>
                ) : (
                    <p>No post found</p>
                )}
            </div>
        </div>
    )
};

export default Practice;