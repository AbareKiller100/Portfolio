import { useDispatch, useSelector } from 'react-redux';
import style from './IntroProyectos.module.css'
import { useEffect, useState } from 'react';
import ProjectsCards from '../../components/Cards/Cards';
import { getProjectByName, getProjects } from '../../redux/actions';
import SearchBar from '../../components/SearchBar';
import { Link } from 'react-router-dom';

const PosterProjects=()=>{
    const dispatch= useDispatch();
    
    const projects= useSelector((state)=> state.projects);

    let concluidos= projects.filter((p)=> p.status==='CONCLUIDO')
    let noConcluidos= projects.filter((p)=> p.status==='POR CONCLUIR')

    console.log('concluidos: ', concluidos);
    console.log('No concluidos: ', noConcluidos);


    useEffect(()=>{ 
        dispatch(getProjects());
        return (()=> dispatch(getProjects()));
    }, [dispatch])

    

    const [getName, setGetName]=useState('');

    const handleSearch=(event)=>{
        setGetName(event.target.value);
    }

    let getNamePrueba= getName.split(' ')

    const handleGetProjects=(event)=>{
        event.preventDefault()
        if(!getNamePrueba.length){
            dispatch(getProjects());
        } else{
            getNamePrueba= getNamePrueba.join('')
            dispatch(getProjectByName(getNamePrueba))
        }
    }

    const handleReload=()=>{
        window.location.reload();
    }

    
    return (
        <div className={style.content}>

            {
                projects.length
                ? 
                <>
                    <SearchBar handleSearch={handleSearch} handleGetProjects={handleGetProjects}/>
                    <div>
                        <h2 className={style.concluidos}>Proyectos realizados</h2>
                        <ProjectsCards projects={concluidos}/>
                    </div>

                    <div>
                        <h2 className={style.noConcluidos}> Trabajos recientes</h2>
                        <ProjectsCards projects={noConcluidos}/>
                    </div>

                </>
                
                : (<div className={style.aviso}>
                    <h2>¿Portafolio equivocado? Ese proyecto no es mío. </h2>
                    <button onClick={handleReload}>Vuelve a buscar</button>
                </div>)
            }

        </div>
    )
}

export default PosterProjects;