import { Link } from 'react-router-dom'
import style from './nav.module.css'

const NavBar = () => {
  return (
    <div className={style.nav}>
        <div className={style.header}>
          <h2>Mi portafolio</h2>
        </div>
      
        <div className={style.buttons}>
          <button className={style.button1}>
            <Link to='/'>Home</Link>
          </button>
          <button className={style.button2}>
            <Link to='/projects'>Proyectos</Link>
          </button>
          <button className={style.button3}>
            <Link to='/about'>Sobre mí</Link>
          </button>
        </div>
        
    </div>
  )
}

export default NavBar