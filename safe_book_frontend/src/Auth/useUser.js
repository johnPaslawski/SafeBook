import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import axios from 'axios';

const useUser = () => {
    const auth = useAuth();
    const [user, setUser] = useState(null);
    

    useEffect(() => {
        auth.getUser()
        .then(user => {
            setUser(user);
            // if (user) {
            //     axios.defaults.headers.common["Authorization"] = `Bearer ${user.access_token}`;
            // }
        });
    }, []);

    return user;
}

export default useUser;

//TODO include this in AuthContext?