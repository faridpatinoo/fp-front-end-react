import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://fpplus-backend-docker-a9agb7hgdzdze2gd.eastus2-01.azurewebsites.net/api/videos')
      .then((response) => response.json())
      .then((data) => {
        setVideos(Array.isArray(data.videos) ? data.videos : []);
      })
      .catch((error) => console.error('Error al cargar los datos:', error));
  }, []);

  return (
    <DataContext.Provider value={videos}>
      {children}
    </DataContext.Provider>
  );
};
