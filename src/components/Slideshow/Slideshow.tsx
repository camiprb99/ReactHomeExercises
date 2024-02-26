import React, { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUsers } from '../slices/selectors';
import UserCard from '../UserCard/UserCard';

const Slideshow: FC = () => {
    const users = useSelector(getUsers);
    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isPlaying) {
            interval = setInterval(() => {
                setIndex(prevIndex => (prevIndex + 1) % users.length);
            }, 2000);
        }

        return () => clearInterval(interval);
    }, [isPlaying, users]);

    const handleStart = () => {
        setIsPlaying(true);
    };

    const handleStop = () => {
        setIsPlaying(false);
    };

    return (
        <div>
            <UserCard user={users[index]} />
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
};

export default Slideshow;
