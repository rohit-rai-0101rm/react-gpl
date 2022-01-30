import React from 'react';
import{useQuery,gql} from "@apollo/client"
const GET_CHARACTER_DETAILS=gql`
query GetCharacterDetails($id:ID!){
  character(id:$id){
   
      name,
     id,
      image,
      episode{
        name,
        episode
      },
    status
      
    
  }
}

`
export const useCharacterDetails = (id) => {
 const {data,error,loading}=useQuery(GET_CHARACTER_DETAILS,{
     variables:{
         id
     }
 })
 return{
     data,
     error,loading
 }
};

