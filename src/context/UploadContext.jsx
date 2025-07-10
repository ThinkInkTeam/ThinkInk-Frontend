import { createContext, useState, useEffect } from "react";

export const UploadContext = createContext();

export const UploadProvider = ({ children }) => {
  const [uploadHistory, setUploadHistory] = useState([]);

  // Load history from localStorage on initialization
  useEffect(() => {
    const savedHistory =
      JSON.parse(localStorage.getItem("uploadHistory")) || [];
    setUploadHistory(savedHistory);
  }, []);

  // Save history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("uploadHistory", JSON.stringify(uploadHistory));
  }, [uploadHistory]);

  const addUploadData = (data) => {
    setUploadHistory((prev) => [...prev, data]);
  };

  return (
    <UploadContext.Provider value={{ uploadHistory, addUploadData }}>
      {children}
    </UploadContext.Provider>
  );
};
