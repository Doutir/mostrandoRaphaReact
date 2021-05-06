import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import {Container,Anime,Personagem,Fala} from './styles';
import api from '../../services/api'
import {BrowserRouter as lalalala} from 'react-router-dom'

function Home(){
  // const nomeAnime = 'naruto'
  const {animeQueOUserDigitou:nomeAnime} = useParams();

  const [animes,setAnimes] = useState([]);
  useEffect(()=>{

    async function pegaDados(){
      const response = await api.get(`/quotes/anime?title=${nomeAnime}`)
      setAnimes(response.data)
      console.log(response.data);

    }
    pegaDados();
  },[])

  console.log(animes);
return(

  <Container>
  
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