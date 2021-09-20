import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const useUser = () => {
    const auth = useAuth();
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        auth.getUser()
        .then(user => setUser(user));
    }, []);

    return user;
}

export default useUser;

//TODO include this in AuthContext?