import Card from "../Card";
import Synrgy from "../icons/SYNRGY";
import ExperienceLayout from "../layouts/ExperienceLayout";
import Separator from "../Separator";
import Tag from "../Tag";

export default function Background() {
  return (
    <Card header='Background'>
      <h2>/ Education</h2>

      <ExperienceLayout title="Bachelor's Degree, Computer Science" company="Gadjah Mada University, Indonesia" period="Aug 2015 - Jan 2021" />

      <Separator />

      <h2>/ Activities</h2>

      <ExperienceLayout icon={<Synrgy />} title="Frontend Web Development" company="BCA SYNRGY Academy" period="Jun 2021 - Dec 2021">
        <p>
          In training under a 6 month program provided by Bank BCA and Binar Academy. Studied full stack web development during the starting 2 months and focused on frontend web development in the last 4 months.
          Leading a team of 3 frontend engineers, I worked with cross functional teams to build a crowdfunding app for the final project.
        </p>
      </ExperienceLayout>

      <Separator />

      <h2>/ Skills</h2>
      <p>
        <Tag text={['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Ant Design', 'Git', 'Perforce', 'Python',]} />
      </p>
    </Card>
  )
}