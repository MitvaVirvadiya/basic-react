import { useState, useContext, useEffect } from 'react'
import './App.css'
import ThemeBtn from './components/themeBtn'
import Card from './components/Card'
import { ThemeProvider } from './context/themeContext'

function App() {
  const [theme, setTheme] = useState("light")

  const darkMode = () => {
    setTheme("dark")
  }

  const lightMode = () => {
    setTheme("light")
  }

  useEffect(() => {
    const html = document.querySelector('html')
    html.classList.remove("light", "dark")
    html.classList.add(theme)
  }, [theme])

  return (
    <ThemeProvider value={{theme, darkMode, lightMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
                <Card />
            </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
