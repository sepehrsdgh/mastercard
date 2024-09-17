"use client"
import { createContext, useState, useContext } from 'react';

// Create the Alert Context
const AlertContext = createContext();

// Provide the context to the whole application
export const AlertProvider = ({ children }) => {
  const [alertConfig, setAlertConfig] = useState({
    isVisible: false,
    title:'',
    message: '',
    type: '',
  });

  const triggerAlert = ({title,message,type}) => {
    setAlertConfig({
      isVisible: true,
      title,
      message,
      type,
    });

    // Automatically hide the alert after 3 seconds
    setTimeout(() => {
      closeAlert()
    }, 3000);
  };

  const closeAlert = () =>{setAlertConfig((prev) => ({
    ...prev,
    isVisible: false,
  }));}

  return (
    <AlertContext.Provider value={{ alertConfig, triggerAlert,closeAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

// Custom hook to use the Alert context
export const useAlert = () => {
    const context = useContext(AlertContext);
    if (!context) {
      throw new Error('useAlert must be used within an AlertProvider');
    }
    return context;
  };

  export const alertTypes = {success:"success",error:"error",warning:"warning"}
