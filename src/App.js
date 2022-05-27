import React, { useEffect, useState } from 'react';
import axios from 'axios';
import md5 from 'md5';

const publicKey = 'c1aa9d6f2107d277ea587a8274738311';
const privateKey = 'fdab1330d83325da8c6d9f955d473ade5dd0e4f1';
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);






function  App() {
  const [characters, setCharacters] = useState([]);

  useEffect(()=>{
    axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`
    ).then(response => setCharacters(response.data.data)

  
    )
    .catch(erro => console.log(erro));
  },[]);

  return (
    <div className="App">
Marvel
    </div>
  );
}

export default App;
