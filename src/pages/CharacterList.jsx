import React from 'react';
import { Link } from 'react-router-dom';
import useCharacter from '../hooks/useCharacter';
import './CharacterList.css'

const CharacterList = () => {
 const{error,loading,data}= useCharacter()
  if(loading) return `loading...`
  if(error) return `something went wrong...`

    return <div className='CharacterList'>
        {
            data.characters.results.map(res=>{
                        return <Link to={`/character/${res.id}`}>
                            <img src={res.image}/>
                            <h2>{res.name}</h2>
                        </Link>
            })}
               
    </div>;
};

export default CharacterList;
