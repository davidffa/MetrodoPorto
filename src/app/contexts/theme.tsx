import { ReactNode, createContext, useState } from 'react';

type DarkModeContextData = {
  theme: string;
  setTheme: (mode: 'light' | 'dark') => void;
};

const DarkModeContext = createContext<DarkModeContextData>({} as DarkModeContextData);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light');

  return (
    <DarkModeContext.Provider value={{ theme, setTheme }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export { DarkModeContext, ThemeProvider };
