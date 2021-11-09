import SecondComponent from "./SecondComponent";


function FirstComponent(props){
    return(
        <div>
            <h1>Meu Primeiro Componente</h1>
            <SecondComponent name={props.name}/>

        </div>
    );
}

export default FirstComponent;