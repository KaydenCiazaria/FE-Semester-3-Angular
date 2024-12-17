import React, { useState, useEffect } from "react";
import NotificationCard from '../../components/NotificationCard/NotificationCard';
import "./Notification.css";
import axios from 'axios';

const NotificationRenter = () => {
    const villas = [
        {
          type: 'reserved-villas',
          date: '5 December - 10 December 2024',
          title: 'Beauvida Villa',
          price: 'Rp. 200.000/Night',
          address: 'Jl. Prasopaca Raya no.20, Kebayoran Baru, Jakarta Selatan'
        },
    ]
  return (
    <div className="notification-background">
      <div className="content-box">
        {villas && villas.length > 0 ? (
          villas.map((currentVilla, index) => (
            <NotificationCard key={index} villa={{currentVilla}}/>
          ))
        ) : (
          <div>No villas found</div>
        )}
      </div>
    </div>
  );
};

export default NotificationRenter;