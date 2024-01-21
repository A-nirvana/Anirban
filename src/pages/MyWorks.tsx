import './journey.css'
import './Home.css';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css' 


interface Event {
    date: string;
    description: string;
  }
  
  interface VerticalTimelineProps {
    events: Event[];
  }
  
  const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ events }) => {  
    return (
      <div className="vertical-timeline">
        {events.map((event, index) => (
          <motion.div key={index}  className={`timeline-item ${index % 2 === 1 ? 'even' : 'odd'}`} >
            <h3>{event.date}</h3>
            <p>{event.description}</p>
          </motion.div>
        ))}
      </div>
    );
  };

export default function Story(){
    const Time = [{date: "2018",description:"Got interseted"}, {date:"2019",description:"implemented"},
     {date:"2020", description:"made it better and fought covid"},{date:"2021-23", description:"BOARDS"},
     {date:"2023-24", description:"again"}]

    return(
    <div className='content' style={{marginTop:"-10vh", width:"20em", marginLeft:"4em"}}>
        <span >
        My journey
        </span>

        <VerticalTimeline events={Time}/>
          {/* <div className="timeline-box">
            <div className="timeline">
              <div className="timeline-node"></div>
              <div className="timeline-node"></div>
              <div className="timeline-node"></div>
              <div className="timeline-node"></div>
              <div className="timeline-node"></div>
            </div>
           <div className="timeline-data timeline-left">
            <span className='text-left'>Jonmo</span>
            </div>
           <div className="timeline-data timeline-right"></div>
           <div className="timeline-data timeline-left"></div>
           <div className="timeline-data timeline-right">
           <span className='text-right'>Biya</span>
           </div>
           <div className="timeline-data timeline-left">
            <span className='text-left'>Putro</span>
           </div>
           <div className="timeline-data timeline-right"></div>
           <div className="timeline-data timeline-left"></div>
           <div className="timeline-data timeline-right">
            <span className='text-right'>Nati</span>
           </div>
           <div className="timeline-data timeline-left">
            <span className='text-left'>Mrityu</span>
           </div>
           <div className="timeline-data timeline-right"></div>
          </div> */}
    </div>
    )
}