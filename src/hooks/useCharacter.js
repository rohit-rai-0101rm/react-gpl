import React from 'react';
import{useQuery,gql} from "@apollo/client"

const GET_CHARACTERS=gql`
    query{
  characters{
    results{
        id,
      name,
      image
      
    }
  }
}
`
const useCharacter = () => {
    const{data,error,loading}=useQuery(GET_CHARACTERS)
return{
    error,
    data,
    loading
}
};

export default useCharacter;
