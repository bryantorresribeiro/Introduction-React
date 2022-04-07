//XML = javascript com html && Babel = interepretação do html+Javascript && React = Componentizações reativas com xml


function Form({name, setName, value, setValue, dataBase, setDataBase, setFilter}){

    function handleClick(){
       const obj = {
           name,
           value,
       }
       setDataBase([...dataBase, obj])
       setName("")
       setValue("")
    }

    function filterClick(){
        const filter = dataBase.filter(item=>{
            return item.name === name
        })
        setFilter(filter)
    }

    return(
        <div>
            <input placeholder="nome" type="text" value={name} onChange={(evt)=>setName(evt.target.value)}/>
            <button onClick={()=>filterClick()}>Filtrar</button>
            <input placeholder="valor" type="text" value={value} onChange={(evt)=>setValue(evt.target.value)}/>
            <button onClick={()=>handleClick()}>Criar</button>
            <button onClick={()=>setFilter(dataBase)}>Mostra tudo</button>
        </div>
    );
}

export default Form;