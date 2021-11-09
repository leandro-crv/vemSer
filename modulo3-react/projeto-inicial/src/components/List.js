import Item from "./Item";
function List(){
    return(
        <>
            <h1>Minhas Lista</h1>
            <ul>
                <Item marca="Ferrari"/>
								<Item marca="Fiat"/>
								<Item marca="Ford"/>
            </ul>
        </>
    );
}

export default List;