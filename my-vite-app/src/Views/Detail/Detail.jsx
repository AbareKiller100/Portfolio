import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getDetail, getImages, removeDetail } from "../../redux/actions";
import style from "./detail.module.css"

const Detail = () => {
    const {id}=useParams();
    const dispatch=useDispatch();
    const projectDetail= useSelector((state)=> state.detailProject);
    const images= useSelector((state)=> state.projectsImages)

    useEffect(()=>{
        dispatch(getDetail(id));
        dispatch(getImages(id));
        return (()=> dispatch(removeDetail()))
    }, [id])

  return (
    <div className={style.container}> 
        <Link to="/projects">Proyectos</Link>

        <div >
        <div className={style.div}>
            <h1>{projectDetail.title}</h1>
            <img src={projectDetail.image} alt="Portada del pokemon"/>
        </div>

        <div>
            <p className={style.data}>{projectDetail.description}</p>
        </div>

        <div className={style.galery}>
            {
                images?.map(({url})=>{
                    return(
                        <img src={url} alt="" />
                    )
                })
            }
        </div>

        </div>
    </div>
    )
}

export default Detail