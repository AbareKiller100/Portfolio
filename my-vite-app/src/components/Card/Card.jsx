import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProjectsCard = ({id, title, image, date, status, classification}) => {
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
    
    const [showAnimation, setShowAnimation] = useState(false);

    const handleAnimation = () => {
      setShowAnimation(true);
      setTimeout(() => setShowAnimation(false), 2000); // Duración de la animación
    };

    console.log(isExpanded);

    return (
        <div>
        {
          // !isExpanded 
          // ? (
          status==="CONCLUIDO"
          ?(
            <div className={style.div} >
              <img src={image} alt=""/>
              <h2>{title}</h2>
              <p>{date}</p>
              <p>{classification}</p>
              <Link to={`/detail/${id}`}><button className={style.button} onClick={handleClick}>Conócelo</button></Link>
            </div>
          )
          : (
            <div className={style.div} >
              <img src={image} alt="" className={style.imgNoConcluido}/>
              <h2>{title}</h2>
              <p>{date}</p>
              <p>{classification}</p>
              <Link to={`/detailInc/`}><button className={style.buttonNoConcluido} onClick={handleAnimation}>En proceso</button></Link>
            </div>
          )
          
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