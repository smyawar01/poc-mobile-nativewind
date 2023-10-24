import React from 'react';
import {createContext, useContext, useEffect, useState} from 'react';

type ThemeType = 'village' | 'summit';

interface Props {
  children?: React.ReactNode;
  initialTheme?: ThemeType;
}

interface ContextProps {
  theme: ThemeType;
  setTheme: (newTheme: ThemeType) => void;
}

const ThemeContext = createContext<ContextProps>({
  theme: 'village',
  setTheme: () => null,
});

const ThemeProvider = ({children, initialTheme = 'village'}: Props) => {
  const [theme, setTheme] = useState<ThemeType>(initialTheme);

  useEffect(() => {
    if (initialTheme) {
      setTheme(initialTheme);
    }
  }, [initialTheme]);
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeProvider = () => useContext(ThemeContext);
export default ThemeProvider;
