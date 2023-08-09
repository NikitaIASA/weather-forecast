import { useContext, createContext, useEffect, useState, FC, ReactNode } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth } from "../firebase";

interface AuthContextProps {
  googleSignIn: () => void;
  logOut: () => void;
  user: User | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}
// Logic for auth (Authentication provider component)
export const AuthProvider: FC<AuthProviderProps> = ({ children }) => { 
  const [user, setUser] = useState<User | null>(null);

  // Function for Google sign-in
  const googleSignIn = () => {  
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

   // Function for logging out
  const logOut = () => {
    signOut(auth);
  };

  // Effect to track changes in authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const contextValue: AuthContextProps = {
    googleSignIn,
    logOut,
    user,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook for using authentication data in components
export const useUserAuth = (): AuthContextProps => { 
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useUserAuth must be used within an AuthProvider");
  }
  return context;
};
