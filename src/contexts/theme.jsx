import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const ThemeContext = createContext({
  theme: null,
  toggleTheme: () => null,
});

export function ThemeProvider({ children }) {
  const defaultTheme = 'dark';
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    localStorage.setItem('theme', theme || defaultTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme || defaultTheme);

    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark');
      return;
    }

    document.querySelector('html').classList.remove('dark');
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(
      !theme
        ? defaultTheme === 'light'
          ? 'dark'
          : 'light'
        : theme === 'light'
        ? 'dark'
        : 'light'
    );
  }, [theme]);

  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
