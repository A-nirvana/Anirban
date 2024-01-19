
import './Home.css';
import Aos from 'aos'
import 'aos/dist/aos.css'    
import { useEffect } from 'react';


interface Event {
    date: string;
    description: string;
  }
  
  interface VerticalTimelineProps {
    events: Event[];
  }
  
  const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ events }) => {
    useEffect(() => {
      Aos.init({
        duration: 1000,
        offset: 200,
      });
    }, []);
  
    return (
      <div className="vertical-timeline">
        {events.map((event, index) => (
          <div key={index} className="timeline-item" data-aos="fade-up">
            <div className="timeline-content">
              <h3>{event.date}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

export default function Story(){
    useEffect(()=>{
        Aos.init()
    },[])

    const Time = ["2018", "2019", "2020","2021-23","2023-24"]

    return(
    <div className='content' style={{marginTop:"-10vh"}}>
        <span >
        My journey
        </span>
        <div className='Timeline'>
            
        </div>
    </div>
    )
}