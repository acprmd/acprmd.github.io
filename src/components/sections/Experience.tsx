import Card from "../Card";
import AccelByte from "../icons/AccelByte";
import ExperienceLayout from "../layouts/ExperienceLayout";

export default function Experience() {
  return (
    <Card header='Experience'>
      <ExperienceLayout icon={<AccelByte />} title="Software Engineer" company="AccelByte" period="Dec 2021 - May 2025">
        <p>Maintained and developed an admin portal web app:</p>
        <ul>
          <li>Developed front end side clawback reporting between 2K Games and Sony to help game studios report inconsistencies between the actual sales of their in game contents and what is reported by users. Worked closely with cross functional teams to tackle arising challenges.</li>
          <li>Involved in React Query implementation, transitioning from Redux which improved the app’s data fetching, caching, and overall performance.</li>
          <li>Built scalable, reusable UI components with React, TypeScript, Redux, Context API, and React Query, improving consistency across verticals and streamlining feature development.</li>
          <li>Developed and maintained BFF (backend for frontend) APIs for backend interaction using Node.js.</li>
          <li>Ensured code quality by participating in code reviews and knowledge sharing.</li>
          <li>Involved in sprint planning and backlog grooming using JIRA to set priorities and break down features into smaller tasks.</li>
          <li>Participated in sprint retrospective, suggesting improvements to enhance team efficiency and development processes.</li>
          <li>Prioritized concise and clear written communication to the client to tackle timezone differences.</li>
        </ul>
      </ExperienceLayout>
    </Card>
  )
}