function Listproduct({filter, dataBase, setDataBase}){

    function removeClick(itemRemove){
        const newDataBase = dataBase.filter(item => {
            return item !== itemRemove;
        })
        setDataBase(newDataBase)
    }

    return(
        //dataBase ele sempre é imutável aos olhos do cliente então utilizamos sempre um filter para mostrar itens que recebemos
        filter.map(item => (
            <div>
                <p>{item.name}</p>
                <span>{item.value}</span>
                <button onClick={()=>removeClick(item)}>Excluir</button>
            </div>
        ))
    );
}
export default Listproduct;