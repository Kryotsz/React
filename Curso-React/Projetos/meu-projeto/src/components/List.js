import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Fiat" ano_lancamento={1964}></Item>
                <Item marca="Renault"></Item>
                <Item marca="Chevrolet" ano_lancamento={1999}></Item>
                <Item></Item>
            </ul>
        </>
    )
}

export default List