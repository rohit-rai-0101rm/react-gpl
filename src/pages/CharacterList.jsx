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
const CharacterList = () => {
    const{data,error,loading}=useQuery(GET_CHARACTERS)
  console.log(data,error,loading);
  
    return <div></div>;
};

export default CharacterList;
