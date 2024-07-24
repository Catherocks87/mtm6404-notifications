import React, { useState } from 'react';
import './App.css'
import notificationsData from './notifications';
import Container from './Container';



function Notification({ notification, onRemove }) {
  return (
    <div className="notification">
      <p><strong>{notification.name}</strong></p>
      <p>{notification.message}</p>
      <button onClick={() => onRemove(notification.id)}>Clear</button>
    </div>
  );
}

function App() {
  const [notifications, setNotifications] = useState(notificationsData);

  const removeNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };
  

  return (
    <Container>
      <h1>Notifications</h1>
      <p>Total Notifications: {notifications.length}</p>
      <button onClick={clearAllNotifications}>Clear All</button>
      <div className="notifications-list">
        {notifications.map(notification => (
          <Notification key={notification.id} notification={notification} onRemove={removeNotification} />
        ))}
      </div>
    </Container>
  );
}

export default App
