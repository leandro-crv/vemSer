import {connect} from 'react-redux';

function Video({activeLesson, activeModule}){
  return(
    <main>
      <div>
      <h1>Módulo:  {activeModule.title}</h1>
      <h2>Aula: {activeLesson.title}</h2>
      </div>
    </main>
  )
}
export default connect(state => ({
  activeLesson: state.videoReducer.activeLesson,
  activeModule: state.videoReducer.activeModule
})) (Video);