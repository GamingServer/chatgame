import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user-info");
    if (storedUser) {
      setAuthUser(JSON.parse(storedUser));
    }
    setLoading(false); // Done loading after checking localStorage
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, loading }}>
      {!loading && children} {/* only render app after auth check */}
    </AuthContext.Provider>
  );
};
