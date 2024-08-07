import ProjectsCard from '../Card/Card';
import style from './Cards.module.css';

const ProjectsCards = ({projects}) => {
    return (
        <div className={style.content}>
            {    
              projects.map(({id, title, image, date})=>{
                return(
                  <ProjectsCard
                    key={id}
                    id={id}
                    title={title}
                    date={date}
                    // description={description}
                    image={image}
                  />
                )
              })
            }
        </div>
    )
}

export default ProjectsCards;
  