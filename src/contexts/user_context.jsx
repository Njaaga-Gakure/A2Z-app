import { createContext, useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = createContext()

const UserProvider = ({children}) => {
    const { 
        loginWithRedirect,
        user,
        logout,
    } = useAuth0()  
    const [myUser, setMyUser] = useState(null)
    useEffect(()=> {
        setMyUser(user)
    }, [user])   
    return (
        <UserContext.Provider
            value={{
                myUser,
                loginWithRedirect,
                logout,
            }}>
                {children}
        </UserContext.Provider>
    )
}

const useUserContext = () => {
    return useContext(UserContext)
}

export {UserProvider, useUserContext}