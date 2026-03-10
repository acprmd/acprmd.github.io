import AnimatedTextLayout from "../layouts/AnimatedTextLayout";
import Card from "../Card";
import GitHub from "../icons/Github";
import LinkedIn from "../icons/LinkedIn";
import Mail from "../icons/Mail";

export default function Intro() {
    return (
        <Card>
            <h3>Hi there, I'm</h3>
            <h1>
                <AnimatedTextLayout>
                    <span>Andika</span>
                    <span>Crishna</span>
                    <span>Pramoedya</span>
                </AnimatedTextLayout>
            </h1>
            <h3>I'm a software engineer focusing on front end development. Currently using React and TypeScript as my go-to tools to build web apps<span className="flicker">_</span></h3>
            <div className="socials-container" >
                <button>
                    <a href='mailto:acpramoedya@gmail.com'>
                        <Mail />
                    </a>
                </button>
                <button>
                    <a href='https://linkedin.com/in/acprmd' target='blank'>
                        <LinkedIn />
                    </a>
                </button>
                <button>
                    <a href='https://github.com/acprmd' target='blank'>
                        <GitHub />
                    </a>
                </button>
            </div>
        </Card>
    )
}