import { axiosInstance } from "@/lib/axios";
import { API_ROUTES } from "@/utils/routes";
import { createContext, useContext, useState, useEffect } from "react";
import { alertTypes, useAlert } from "./alertContext";

// Define the context
const LogListContext = createContext();
// Define the provider component
export const LogListProvider = ({ children }) => {
  const [walletLogs, setWalletLogs] = useState([]);
//   const [cardLogs, setCardLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { triggerAlert } = useAlert(); // Access the triggerAlert function

  // Function to fetch log list from the server
  const fetchLogList = async () => {
    try {
      const response = await axiosInstance.get(API_ROUTES.getUserTransaction);
      setWalletLogs(response.data.value); // Assuming response.data contains the user object
    } catch (err) {
      setError(err.message || "Error fetching log's list");
      triggerAlert({
        title: "Error",
        message: "Something went wrong. Please try again later.",
        type: alertTypes.error,
      });
    } finally {
      setLoading(false);
    }
  };

  // Fetch user data when the component is mounted
  useEffect(() => {
    fetchLogList();
  }, []);

  return (
    <LogListContext.Provider
      value={{ walletLogs, loading, setLoading, error, refetch: fetchLogList }}
    >
      {children}
    </LogListContext.Provider>
  );
};

// Create a custom hook to use the UserContext
export const useLogList = () => useContext(LogListContext);
