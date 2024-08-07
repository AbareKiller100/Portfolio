import style from './data.module.css'
import { Link } from "react-router-dom"
import CV from '../../../assets/Currículum Vitae (1).pdf'

const Data= ()=>{
    return(
        <div className={style.skills}>
            <div className={style.cv}>
              <h2>Mi CV:</h2>
              <a href={CV} target='_blank'>Link de descarga</a>
            </div>

            <div className={style.contact}>
              <h2 className={style.ch2}>Datos de contacto:</h2>
              <ul>
                <a href='https://www.linkedin.com/in/lorenzo-santos-34a109267/' target='_blank'>
                    <li className={style.linkd}>LinkedIn</li>
                </a>
            
                <a href='https://github.com/AbareKiller100' target='_blank'>
                    <li className={style.gith}>GitHub</li>
                </a>
            
                <li>Mail: lorenzosantos100211@gmail.com</li>
              </ul>
            </div>
        </div>
    )
}

export default Data;