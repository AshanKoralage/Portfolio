import ProjectCard from "./projectCard";

function Home() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <ProjectCard title="Project One" description="Description of project one" tech="React" />
      <ProjectCard title="Project Two" description="Description of project two" tech="Node.js" />
      <ProjectCard title="Project Three" description="Description of project three" tech="MySQL" />
    </div>
  );
}

export default Home;