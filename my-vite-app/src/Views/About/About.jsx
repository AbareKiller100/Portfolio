import { Link } from "react-router-dom"
import style from './about.module.css'
import CV from '../../../assets/Currículum Vitae (1).pdf'

const About = () => {
  return (
    <div>
        <h2 className={style.header}>Sobre mí</h2>
        <p className={style.About}>
            Mi nombre es Lorenzo Santos, soy Full Stack web Developer. Mi mundo gira en torno a JavaScript, NodeJS, ExpressJS, SQL, PostgreSQL, Sequelize, HTML, CSS, ReactJS, Redux. 
            Me encanta dar vida a proyectos desde cero.
            Me especializo en Back-end, tengo experiencia trabajando en proyectos al cursar el bootcamp de Soy
            Henry, elaborando filtrado de información, sistema de reviews, modelado de bases de datos relacionales,
            entre otras. También cuento con habilidades en Front-end, principalmente en la conexión con el servidor
            para llevar la información desde la base de datos, además del manejo de librerías como React y Redux.
            Mi conocimiento de metodologías ágiles y fluidez en GIT garantizan una colaboración eficaz en equipos de
            desarrollo. Soy un apasionado del aprendizaje continuo y siempre estoy dispuesto a adoptar nuevas tecnologías para
            mantenerme actualizado en el mundo en constante evolución de la programación. Mis fuertes habilidades
            de resolución de problemas, comunicación efectiva y la capacidad para aprender rápidamente me
            permiten enfrentar desafíos técnicos con confianza.
        </p>

        <div className={style.proyectos}>
          <h2>Algunos de mis trabajos:</h2>
          <ul>
              <li>Pokemon: proyecto en solitario</li>
              <li>WanderLuxe: proyecto grupal</li>
          </ul>
          <Link to='/projects'>Todos mis proyectos aquí</Link>
        </div>

        <div className={style.cv}>
          <h2>Mi CV:</h2>
          <a href={CV} target='_blank'>Link de descarga</a>
        </div>

        <div className={style.contact}>
          <h2 className={style.ch2}>Datos de contacto:</h2>
          <ul>
            <a href='https://www.linkedin.com/in/lorenzo-santos-34a109267/' target='_blank'><li className={style.linkd}>LinkedIn</li></a>
            
            <a href='https://github.com/AbareKiller100' target='_blank'><li className={style.gith}>GitHub</li></a>
            
            <li>Mail: lorenzosantos100211@gmail.com</li>
          </ul>
        </div>        
    </div>
  )
}

export default About