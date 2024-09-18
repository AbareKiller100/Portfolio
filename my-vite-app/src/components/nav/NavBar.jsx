import { Link } from 'react-router-dom'
import style from './nav.module.css'
import { useDispatch } from 'react-redux'
import { getProjects } from '../../redux/actions'

const NavBar = () => {
  const dispatch= useDispatch();

  const reload=()=>{
    dispatch(getProjects())
  }

  return (
    <div className={style.nav}>
        <div className={style.header}>
          <h2>Mi portafolio</h2>
        </div>
      
        <div className={style.buttons}>
          
            <Link to='/'><button className={style.button1}>Home</button></Link>
          
            <Link to='/projects'><button onClick={reload} className={style.button2}>Proyectos</button></Link>
          
            <Link to='/about' className={style.button3}><button >Sobre mí</button></Link>
          
        </div>

    </div>
  )
}

export default NavBar