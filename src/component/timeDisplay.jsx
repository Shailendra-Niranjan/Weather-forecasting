import React, { useState, useEffect } from 'react';

const TimeDisplay = ({ offset }) => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      now.setMinutes(now.getMinutes() + offset); // Apply the custom offset
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      const formattedTime = now.toLocaleTimeString('en-US', options);
      setCurrentTime(formattedTime);
      console.log(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [offset]);

  return (
    <div>
      <h2>Custom Timezone (Offset {offset / 60} hours):</h2>
      <div className="time-display">{currentTime}</div>
    </div>
  );
};

export default TimeDisplay;
