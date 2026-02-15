import { createContext } from "react";
import type { IUser } from "../../public/assets/assets";


interface AuthContextProps {
    isLoggedIn:boolean;
    setIsLoggedIn:(isLoggedIn:boolean)=>void;
    user:IUser | null;
    setUser : (user:IUser | null)=>void;
    login:(user:{email:string;password:string})=>Promise<void>;
    signUp:(user:{name:string; email:string; password:string})=>Promise<void>;
    logout:()=>Promise<void>;
}

const AuthContext = createContext()

export const AuthProvider =({children})=>{

    const value = {

    }

    return(
        <AuthContext.Provider value={value}> 
            {children}
        </AuthContext.Provider>
    )
}