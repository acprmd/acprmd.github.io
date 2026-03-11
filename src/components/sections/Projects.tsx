import Card from "../Card";

export default function Projects() {
    return (
        <Card header='Projects'>
            <div className='project-container'>
                <div>
                    <h3>Asakarya</h3>
                    <div className='project-card'>
                        <a href="https://asakarya.vercel.app" target='blank'>
                            <img src="/asakarya_sq.png" alt="Asakarya screenshot" />
                        </a>
                        <div className='project-details'>
                            <p>A crowdfunding app for the final project of SYNRGY academy bootcamp</p>
                            <p>Stacks: JavaScript, React, Tailwind CSS, Redux, Next.js, Vercel </p>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}