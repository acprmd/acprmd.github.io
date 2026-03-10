import AnimatedTextLayout from "./layouts/AnimatedTextLayout";
import { ThemeSelector } from "./ThemeSelector";

export default function Navbar() {
    return (
        <header className="navbar-container">
            <span className="navbar-left">Open to work</span>
            <div className="navbar-right">
                <AnimatedTextLayout>
                    <a href='/#experience'>
                        Experience
                    </a>
                </AnimatedTextLayout>
                <AnimatedTextLayout>
                    <a href='/#background'>
                        Background
                    </a>
                </AnimatedTextLayout>
                <AnimatedTextLayout>
                    <a href='/#projects'>
                        Projects
                    </a>
                </AnimatedTextLayout>
                <ThemeSelector />
            </div>
        </header>
    )
}