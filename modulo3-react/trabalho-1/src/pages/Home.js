import Main from "../Components/Main/Main";
import Mapa from "../Components/Mapa/Mapa";
import Texto from "../Components/Texto/Texto";


function Home({cogumelo, mapa}){
  return(
    <div className='App-container'>
      <Main src={cogumelo}/>
      <Texto/>
      <Mapa link={mapa} nome="DBC Company"/>
    </div>
  );
}
export default Home;