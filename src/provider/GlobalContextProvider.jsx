import React, { createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext(null)
const GlobalContextProvider = ({children}) => {
  const [user,setUser] = useState(true)
  //dark mode context using localestorage
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme','dark')
    } else {
      setTheme('light');
      localStorage.setItem('theme','light')
    }
  };
  useEffect(()=>{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },[theme])
  return (
    <GlobalContext.Provider value={{user,theme,toggleTheme}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider