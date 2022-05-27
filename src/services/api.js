import axios from 'axios';
import md5 from 'md5';

const publicKey = 'c1aa9d6f2107d277ea587a8274738311';
const privateKey = 'fdab1330d83325da8c6d9f955d473ade5dd0e4f1';
const ts = Number(new Date());
const hash = md5(time + privateKey + publicKey);

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public',
    params:{
        ts,
        apikey: publicKey,
        hash
    }
    
})

export default api;