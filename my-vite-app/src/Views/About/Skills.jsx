import style from './skills.module.css'
import JS from '../../../Capturas_Proyectos/javascript-logo.png'
import HTML from '../../../Capturas_Proyectos/html5-original.svg'
import CSS from '../../../Capturas_Proyectos/css3-original.svg'
import TS from '../../../Capturas_Proyectos/typescript-original.svg'
import SQL from '../../../Capturas_Proyectos/SQL-icon.png'


const Skills= () =>{
    return(
        <div className={style.skills}>
          <h2>Skills</h2>
          <h3>Tech skills</h3>
          <h3>Lenguajes de Programación</h3>
          <img src={JS} alt="JavaScript" />
          <img src={HTML} alt="HTML" />
          <img src={CSS} alt="CSS" />
          <img src={SQL} alt="SQL" />
          <img src={TS} alt='TS' />
          <h3>Frameworks</h3>
            <ul>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>Sequelize</li>
                <li>ReactJS</li>
                <li>Redux</li>
            </ul>
            <h3>Base de datos</h3>
            <ul>
                <li>PostgreSQL</li>
            </ul>
          
          <h3>Soft skills</h3>
          <ul className={style.soft}>
            <li>Análisis de problemas</li>
            <li>Aprendizaje ágil</li>
            <li>Cooperación</li>
            <li>Mente abierta</li>
            <li>Liderazgo</li>
          </ul>

        </div>
    )
}

export default Skills;