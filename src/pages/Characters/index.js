import React, { useEffect } from 'react';
import api from '../../services/api';

function Characters (){

    useEffect(()=>{
        api.get('/characters').then(response => console.log(response.data.data)).catch(err=> console.log(err))
    },[])

   /*useEffect(()=>{
        axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`
        ).then(response => console.log(response.data.data))
        .catch(erro => console.log(erro));
      },[]);*/

    return(
        <View>



        </View>
    );
}

export default Characters;