import React,{useEffect,useState} from 'react';
import {Container,Anime,Personagem,Fala} from './styles';
import {Link} from 'react-router-dom';
import api from '../../services/api'

function Home(){

  
  const [animes,setAnimes] = useState([]);
  const [inputUser,setInputUser] = useState('');
  useEffect(()=>{

    async function pegaDados(){
      const response = await api.get(`/quotes`)
      setAnimes(response.data)
      console.log(response.data);

    }
    pegaDados();
  },[])
  console.log({inputUser})

return(

  <Container>
    {/* digite um anime:  */}
  <input
    type="text"
    placeholder="digite aqui um anime" 
    onChange={(e)=>setInputUser(e.target.value)}
   />
  <Link to={`/anime/${inputUser}`} >clica pra ir </Link>
  {/* <div>
    <Anime>claymore</Anime>
    <Personagem>teresa</Personagem>
    <Fala>os guri ta sem freio, depois e de nois e nois</Fala>
  </div> */}
  {animes.map(cadaAnime=>{
    return(
      <div>
    <Anime>{cadaAnime.anime}</Anime>
    <Personagem>{cadaAnime.character}</Personagem>
    <Fala>{cadaAnime.quote}</Fala>
  </div>
    )
  })}

    
  </Container>
)
}

export default Home