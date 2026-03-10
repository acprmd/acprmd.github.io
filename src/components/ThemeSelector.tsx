import useDarkMode from "../hooks/useDarkMode"
import Moon from "./icons/Moon"
import Sun from "./icons/Sun"

export function ThemeSelector() {
    const { theme, toggleTheme } = useDarkMode()
    return (
        <button className="button" onClick={toggleTheme} value={theme} defaultChecked={theme == 'dark'}>
            {theme == "dark" ? <Moon /> : <Sun />}
        </button>)
}