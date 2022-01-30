import React from 'react';
import { useParams } from 'react-router-dom';
import './Character.css'
import { useCharacterDetails } from '../hooks/useCharacterDetails';

const Character = () => {
    const {id}=useParams()
    console.log(id);
    const{data,error,loading}=useCharacterDetails(id)
  if(error)return `something went wrong`
  if(loading)return `Loading...`
  return <div className='Character'>
<img src={data.character.image} width={750} height={750}/>
<div className='Character-content'>
    <h1>{data.character.name}</h1>
    <p>{data.character.gender}</p>
    <div className='Character-episode'>
        {data.character.episode.map(episode=>{
            return <div>
            {episode.name}-<b>{episode.episode}</b>

            </div>
        })}

    </div>

</div>
  </div>;
};

export default Character;
