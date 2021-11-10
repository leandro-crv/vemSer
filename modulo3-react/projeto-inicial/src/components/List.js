import Item from "./Item";
function List(){
    return(
        <>
            <h1>Minhas Lista</h1>
            <ul>
                <Item />
				<Item menu="about" url={12}/>
				<Item menu="contact" url={10}/>
            </ul>
        </>
    );
}

export default List;