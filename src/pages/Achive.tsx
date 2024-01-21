
import './ProjectCard.css'; // Import your styles

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="card" style={{marginRight:"10em"}}>
      <img src={imageSrc} alt="Project" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="#" className="btn">
          Learn More
        </a>
      </div>
    </div>
  );
};


export default function Achievements(){
    return(
        <div className="0" style={{marginLeft:"10vw", display:"flex", justifyContent:"space-between"}}>
            <ProjectCard title='Sanke game' description='I have built a snake game using c++ when I was in 9th standard' imageSrc='https://tilcode.blog/wp-content/uploads/2019/04/Screen-Shot-2019-04-28-at-17.51.16.png'/>
            <ProjectCard title="space wars" description='I have built a space war game using pyhton' imageSrc=''/>
           
        </div>
    )
}