import React, { useEffect, useState } from 'react';

function TimeAgo({ timestamp }) {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    // Function to calculate time ago
    const calculateTimeAgo = () => {
      const currentTime = new Date();
      const postTime = new Date(timestamp);
      const timeDifference = currentTime - postTime;
      
      if (timeDifference < 60000) {
        setTimeAgo('Just now');
      } else if (timeDifference < 3600000) {
        const minutes = Math.floor(timeDifference / 60000);
        setTimeAgo(`${minutes} minute${minutes !== 1 ? 's' : ''} ago`);
      } else if (timeDifference < 86400000) {
        const hours = Math.floor(timeDifference / 3600000);
        setTimeAgo(`${hours} hour${hours !== 1 ? 's' : ''} ago`);
      } else {
        const days = Math.floor(timeDifference / 86400000);
        setTimeAgo(`${days} day${days !== 1 ? 's' : ''} ago`);
      }
    };

    // Calculate time ago when the component mounts
    calculateTimeAgo();

    // Update the time ago every minute (60,000 milliseconds)
    const intervalId = setInterval(calculateTimeAgo, 60000);

    return () => clearInterval(intervalId);
  }, [timestamp]);

  return <i className='text-sm'>{timeAgo}</i>;
}

export default TimeAgo;
