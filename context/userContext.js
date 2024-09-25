import { axiosInstance } from "@/lib/axios";
import { API_ROUTES } from "@/utils/routes";
import { createContext, useContext, useState, useEffect } from "react";
import { alertTypes, useAlert } from "./alertContext";

// Define the context
const UserContext = createContext();

// Define the provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email:"",
    havedeposit:"",
    lastname:"",
    name:"",
    total:"",
    uid:"",
    lirarate:""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { triggerAlert } = useAlert(); // Access the triggerAlert function

  // Function to fetch user data from the server
  const fetchUserData = async () => {
    try {
      const response = await axiosInstance.get(API_ROUTES.getUserInfo);
      setUser(response.data.value); // Assuming response.data contains the user object
    } catch (err) {
      setError(err.message || "Error fetching user data");
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
    fetchUserData();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser, loading, setLoading, error, refetch: fetchUserData }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook to use the UserContext
export const useUser = () => useContext(UserContext);
