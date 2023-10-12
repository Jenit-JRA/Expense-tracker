// LocationInfo.js
import React, { useState, useEffect } from 'react';

function LocationInfo() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [sunriseSunset, setSunriseSunset] = useState({});

  useEffect(() => {
    // Get latitude and longitude using Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }

    // Fetch sunrise and sunset data from the API
    fetch('https://api.sunrise-sunset.org/json?lat=' + latitude + '&lng=' + longitude + '&formatted=0')
      .then((response) => response.json())
      .then((data) => setSunriseSunset(data.results));
  }, [latitude, longitude]);

  return (
    <div className="location-info">
      <div>Latitude: {latitude}</div>
      <div>Longitude: {longitude}</div>
      <div>
        Sunrise today: {new Date(sunriseSunset.sunrise).toLocaleTimeString()}
      </div>
      <div>
        Sunset today: {new Date(sunriseSunset.sunset).toLocaleTimeString()}
      </div>
      <div>
        Sunrise tomorrow: {new Date(sunriseSunset.sunset).toLocaleTimeString()}
      </div>
      <div>
        Sunset tomorrow: {new Date(sunriseSunset.sunset).toLocaleTimeString()}
      </div>
    </div>
  );
}

export default LocationInfo;
