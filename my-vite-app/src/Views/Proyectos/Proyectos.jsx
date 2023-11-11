import React from 'react'
import style from './proyectos.module.css'

const Proyectos = () => {
  return (
    <div className={style.content}>

        <div>
            <h2>VideogamesApi</h2>
            <p>
                El desarrollo de VideogamesApi tuvo lugar durante mi tiempo en el bootcamp de Soy Henry. Fue mi primer proyecto individual, una single page application alimentada por una API. Participé activamente en todas las etapas de su desarrollo. Aunque no fue el proyecto con el que aprobé la etapa, marcó el comienzo de futuros proyectos más avanzados.
            </p>

        </div>

        <div>
            <h2>PokemonApi</h2>
            <p>
                Esta aplicación fue mi segundo proyecto, pero el primero en ser desarrollado de forma íntegra y conclusiva.
                Se trata de una single page application centrada en la temática de Pokémon, alimentada por una API. Mi rol abarcó todas las etapas del proyecto, desde el diseño de la interfaz de usuario hasta el modelado de la base de datos y la integración de la API.
            </p>
            <div className={style.capturas}>
                <img src='/assets/captura1.png' alt='' className={style.imga} />
                <img src='/assets/captura2.png' alt='' className={style.imgb} />
                <img src='/assets/captura3.png' alt='' className={style.imgc} />
            </div>
        </div>

        <div>
            <h2>Ignite Motors</h2>
            <p>
                Ignite Motors fue el primer proyecto que desarrollé en equipo durante la etapa final de mi bootcamp en Soy Henry. Se trata de un e-commerce de vehículos diseñado para facilitar actividades comerciales tanto para empresas como compradores sin necesidad de presencia física. Mi función se centró en la creación de controladores y manejadores, así como en el enrutado en el servidor y la estructura de la base de datos. Aunque el proyecto no superó la prueba, representó una valiosa experiencia de trabajo en equipo.
            </p>
            
            <img src='/captura1IGM.png' alt=''/>
            <img src='/assets/captura2IGM.png' alt=''/>
            <img src='/assets/captura3IGM.png' alt=''/>

            <a href='https://rumrum-nyd5.vercel.app/' target='_blank' className={style.ignite}><button>Visítalo</button></a>
            
        </div>

        <div>
            <h2>WanderLuxe</h2>
            <p>
                WanderLuxe fue el proyecto que nos dio paso a la graduación, a mí y a mi equipo.  La aplicación se enfoca en el negocio de alquiler de propiedades, sirviendo de intermediario entre propietarios e inquilinos. Contribuí a la creación de controladores, manejadores y el enrutado en el Back-end, así como al diseño y creación de modelos de datos clave. Además orienté a otros miembros del equipo en ciertas funcionalidades del proyecto.
            </p>

            <img src='/assets/capturaWL1.png' alt=''/>
            <img src='/assets/capturaWL2.png' alt=''/>
            <img src='/assets/capturaWL3.png' alt=''/>
            
            <a href='https://pf-2-lavenganza-front-6doztsbfp-migorriti.vercel.app/home' target='_blank' className={style.wander}><button>Visítalo</button></a>
        </div>
    </div>
  )
}

export default Proyectos