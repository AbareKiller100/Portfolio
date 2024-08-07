import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Detail from '../../Views/Detail/Detail';

const ProjectsCard = ({id, title, image, date}) => {
    console.log(id);
    const [isExpanded, setIsExpanded] = useState(false);
    const [projectId, setProjectId] = useState(null);

    useEffect(() => {
        // Al cambiar de vista, actualiza el estado del proyecto
        if (isExpanded) {
            setProjectId(id);
        }
    }, [isExpanded, id]);

    const handleClick = () => {
      setProjectId(id);
      setIsExpanded(true);
    };

    console.log(isExpanded);

    return (
        <div>
        {
          // !isExpanded 
          // ? (
            <div className={style.div} >
            <img src={image} alt=""/>
            <h2>{title}</h2>
            <p>{date}</p>
            <Link to={`/detail/${id}`}><button className={style.button} onClick={handleClick}>Conócelo</button></Link>
          </div>
          // ) 
          // : <div className={style.expandAnimation}>
          //     <Detail
          //     projectId={projectId}/>
          //   </div>
        }

        </div>
    )
}  

export default ProjectsCard;