//Hooks
import { useState, useEffect } from "react";
//Componentes
import Form from "./components/Form";
import Listproduct from "./components/Listproduct"

//Lembre-se da estrutura de pasta atual!

//Hooks = useState, useEffect 
//Obs: Existem mais!

//Estrutura de um useState:
//const [alterado,    setAlterador] = useState([])

function App() {

  //React tem imutábalidade: imutavel !== let && imutavel !== const && imutavel === Hooks
  const [name, setName] = useState([])
  const [value, setValue] = useState([])
  const [dataBase, setDataBase] = useState([])
  const [filter, setFilter] = useState([])

  //useEffect: Observa apenas o ciclo de atualização de um Hook ou função
  //React ciclo de vida:  montagem, atualização e desmontagem
  useEffect(()=>{
    setFilter(dataBase)
  }, [dataBase])

  //Props e Childres e a maneira que temos de cascatiar os componentes com dados
  return (
    <div className="App">
     <Form name={name} setName={setName} value={value} setValue={setValue} dataBase={dataBase} setDataBase={setDataBase} setFilter={setFilter}/>
     <Listproduct dataBase={dataBase} filter={filter} setDataBase={setDataBase}/>
    </div>
  );
}

export default App;
