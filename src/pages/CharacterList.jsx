import React from 'react';
import useCharacter from '../hooks/useCharacter';
import './CharacterList.css'

const CharacterList = () => {
 const{error,loading,data}= useCharacter()
  if(loading) return `loading...`
  if(error) return `something went wrong...`

    return <div className='CharacterList'>
        {
            data.characters.results.map(res=>{
                        return <div>
                            <img src={res.image}/>
                            <h2>{res.name}</h2>
                        </div>
            })}
               
    </div>;
};

export default CharacterList;
