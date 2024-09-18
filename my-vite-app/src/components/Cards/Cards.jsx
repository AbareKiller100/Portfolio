import ProjectsCard from '../Card/Card';
import style from './Cards.module.css';

const ProjectsCards = ({projects}) => {
  const dates=[]
  let date='';

  for(let i = 0; i < projects.length; i++) {
    date= projects[i].date.split(' ')

    console.log(projects[i].image);

    if(date.includes('-')){
      date.slice(0, 1);
    }
    dates.push(date)
  }

  for(let i = 0; i < dates.length; i++){
    console.log(dates[i]);
  }

  

  return (
      <div className={style.content}>
        {    
          projects.map(({id, title, image, date, status, classification})=>{
            return(
              <ProjectsCard
                key={id}
                id={id}
                title={title}
                date={date}
                // description={description}
                image={image}
                status={status}
                classification={classification}
              />
            )
          })
        }
      </div>
  )
}

export default ProjectsCards;
  