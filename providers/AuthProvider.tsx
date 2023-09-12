import React, {
  ReactNode,
  useEffect,
  useState,
  useContext,
  createContext,
} from 'react';

interface User {
  name: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  initialized: boolean;
  login: () => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [initialized, setInitialized] = useState<boolean>(false);

  const login = () => {
    setUser({ name: 'John Doe' });
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    setTimeout(() => {
      setUser({ name: 'John Doe' });
      setLoading(false);
      setInitialized(true);
    }, 1000);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        initialized,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export default AuthProvider;
