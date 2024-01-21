import './skills.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function ActionAreaCard(imageLink:string,title:string,content:string) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{
      margin:"5vw",
      borderRadius:"15px",
      backgroundColor:"#0c0c0c",
      boxShadow: "0 2px 4px 0 rgba(224, 224, 224, 0.658)"
  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageLink}
          alt={title}
        />
        <CardContent style={{backgroundColor:"#0c0c0c"}}>
          <Typography gutterBottom variant="h5" component="div" color="#afafaf">
            {title}
          </Typography>
          <Typography variant="body2" color="lightgrey">
           {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function Skills(){
    return(
        <div className="0" style={{width:"100%", marginLeft:"4em"}}>
            <span className="content">My skills are</span>
            <div className="skill-container" style={{width:"100%"}}>
              {ActionAreaCard('https://wallpapercave.com/wp/wp8903893.jpg',"MERN stack","I have learned the necessary mern stack")}
              {ActionAreaCard('../src/assets/ml.jpg',"MERN stack","I have learned the necessary mern stack")}
              {ActionAreaCard('../src/assets/git.jpg',"MERN stack","I have learned the necessary mern stack")}
              {ActionAreaCard('../src/assets/linux2.jpg',"MERN stack","I have learned the necessary mern stack")}
              {ActionAreaCard('../src/assets/cli.jpg',"MERN stack","I have learned the necessary mern stack")}
              {ActionAreaCard('../src/assets/docker.jpg',"Docker","I have learned the use of docker and its necessity to build projects")}

            </div>
        </div>
    )
}