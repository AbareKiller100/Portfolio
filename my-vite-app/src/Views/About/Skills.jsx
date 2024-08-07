import style from './skills.module.css'

const Skills= () =>{
    return(
        <div className={style.skills}>
          <h2>Skills</h2>
          <h3>Tech skills</h3>
          <h3>Lenguajes de Programación</h3>
          <ul className={style.tech}>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>SQL</li>
          </ul>
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