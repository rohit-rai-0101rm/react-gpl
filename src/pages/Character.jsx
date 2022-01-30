import React from 'react';
import { useParams } from 'react-router-dom';

import { useCharacterDetails } from '../hooks/useCharacterDetails';

const Character = () => {
    const {id}=useParams()
    console.log(id);
    const{data,error,loading}=useCharacterDetails(56)
  return <div>

      {
          console.log({error,loading,data})
      }
  </div>;
};

export default Character;
