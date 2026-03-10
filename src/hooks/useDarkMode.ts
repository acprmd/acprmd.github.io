import { useEffect, useState } from "react";

type Theme = 'light' | 'dark'

export default function useDarkMode() {
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme) return savedTheme as Theme
        const prefersDark = window.matchMedia("prefers-color-scheme: dark").matches
        return prefersDark ? 'dark' : 'light'
    })

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme == 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    return { theme, toggleTheme }
}