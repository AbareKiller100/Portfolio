import { useNavigate } from 'react-router-dom';
import style from './DetailInc.module.css'
import animation from '../../../assets/animation/Animation - 1726076352485.json';
import { Player } from '@lottiefiles/react-lottie-player';
import { useEffect } from 'react';

const DetailInc=()=>{

    const navigate= useNavigate();

    const handleBack=()=>{
        navigate(-1);
    }

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <div className={style.container}>
            <h2 className={style.message}>En proceso te dije pelotudo...</h2>

            <div className={style.construction_container}>
                <Player
                autoplay
                loop
                src={animation}
                className={style.animation}/> 
            </div>
            <button onClick={handleBack}>Vuelve</button>
        </div>
    )
}

export default DetailInc