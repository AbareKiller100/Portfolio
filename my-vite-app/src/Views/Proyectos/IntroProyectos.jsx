import { useDispatch, useSelector } from 'react-redux';
import style from './IntroProyectos.module.css'
import { useEffect, useState } from 'react';
import ProjectsCards from '../../components/Cards/Cards';
import { getProjectByName, getProjects } from '../../redux/actions';
import SearchBar from '../../components/SearchBar';

const PosterProjects=()=>{
    const dispatch= useDispatch();
    
    const projects= useSelector((state)=> state.projects);

    useEffect(()=>{ 
        dispatch(getProjects());
        return (()=> dispatch(getProjects()));
    }, [dispatch])

    console.log(projects);

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

            <SearchBar handleSearch={handleSearch} handleGetProjects={handleGetProjects}/>

            {
                !projects.length
                ? <div className={style.aviso}>
                    <h2>¿Portafolio equivocado bro? Ese proyecto no es mío </h2>
                    <button onClick={handleReload}>Vuelve a buscar</button>
                </div>
                : <ProjectsCards projects={projects}/>
            }

        </div>
    )
}

export default PosterProjects;