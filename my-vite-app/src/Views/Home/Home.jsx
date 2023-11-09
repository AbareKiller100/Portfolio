import React from 'react'
import style from './home.module.css'

const Home = () => {
  return (
    <div>
        <h1 className={style.title}>Diario de vida de un programador.</h1>
        {/* <h3></h3> */}

        <p className={style.presentacion}>Lo que están por ver es un pequeño recorrido por mi carrera en tecnología, o lo que va de ella, desde mis inicios. Y conocerán cómo me he desenvuelto como desarrollador a través de mis experiencias y proyectos...</p>
    </div>
  )
}

export default Home