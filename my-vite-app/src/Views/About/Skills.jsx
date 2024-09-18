import style from './skills.module.css'
import JS from '../../../Capturas_Proyectos/javascript-logo.png'
import HTML from '../../../Capturas_Proyectos/html5-original.svg'
import CSS from '../../../Capturas_Proyectos/css3-original.svg'
import TS from '../../../Capturas_Proyectos/typescript-original.svg'
import SQL from '../../../Capturas_Proyectos/SQL-icon.png'

import NODE from '../../../Capturas_Proyectos/nodejs-original-wordmark.svg'
import EXPRESS from '../../../Capturas_Proyectos/express-original-wordmark.svg'
import SEQUELIZE from '../../../Capturas_Proyectos/sequelize-original.svg'
import REACT from '../../../Capturas_Proyectos/react-original.svg'
import REDUX from '../../../Capturas_Proyectos/redux-original.svg'

import POSTGRE from '../../../Capturas_Proyectos/postgresql-original-wordmark.svg'
import APPSHEET from '../../../Capturas_Proyectos/appsheet-icon.png'
import GOOGLESHEETS from '../../../Capturas_Proyectos/google_sheets-icon.jpg'

import GIT from '../../../Capturas_Proyectos/git-plain.svg'
import GITHUB from '../../../Capturas_Proyectos/github-original.svg'

import VS from '../../../Capturas_Proyectos/vscode-original.svg'
import POSTMAN from '../../../Capturas_Proyectos/postman-original-wordmark.svg'

const Skills= () =>{
    return(
        <div className={style.skills}>
          <h2>Tech skills</h2>
          <div className={style.prim}>

          <div className={style.lenguajes}>
          <h3>Lenguajes de Programación</h3>
          <img src={JS} alt="JavaScript" />
          <img src={SQL} alt="SQL" />
          <img src={TS} alt='TS' />
          </div>

          <div className={style.diseno}>
            <h3>Diseño y maquetación</h3>
            <img src={HTML} alt="HTML" />
            <img src={CSS} alt="CSS" />
          </div>
          
          </div>
          <div className={style.frameworks}>
            <h3>Frameworks</h3>

            <p>Front-End</p>
            <img src={REACT} alt="React" />
            <img src={REDUX} alt='Redux' />

            <p>Back-End</p>
            <img src={NODE} alt="Node" />
            <img src={EXPRESS} alt="Express" />
            <img src={SEQUELIZE} alt="Sequelize" />
          </div>
          <div className={style.database}>
            <h3>Base de datos</h3>
            <img src={POSTGRE} alt="PostgreSQL" />
            <img src={GOOGLESHEETS} alt="Google Sheets" />
          </div>
          <div className={style.platform}>
            <h3>Plataformas de desarrollo</h3>
            <img src={APPSHEET} alt="AppSheet" />
          </div>
          <div className={style.tools}>
            <h3>Herramientas de desarrollo</h3>
            <img src={VS} alt="VS Code" />
            <img src={POSTMAN} alt="Postman" />
          </div>
          <div className={style.version}>
            <h3>Control de versiones</h3>
            <img src={GIT} alt="GIT" />
            <img src={GITHUB} alt="GitHub" />
          </div>

          
          
          <h2>Soft skills</h2>
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