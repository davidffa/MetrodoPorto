//dark mode context

import { createContext, useState } from 'react';

const DarkModeContext = createContext<{ theme: string; setTheme: React.Dispatch<React.SetStateAction<string>> }>({ theme: 'light', setTheme: () => {} });

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light');
    return (
        <DarkModeContext.Provider value={{ theme, setTheme }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export { DarkModeContext, ThemeProvider }