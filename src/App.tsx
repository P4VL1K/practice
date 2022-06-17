import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";
import {v1} from "uuid";



export type ObjPropsType = {
    id: string
    name: string
}


function App() {

    const [value, setValue] = useState('')

    const [el,setEl] = useState<Array<ObjPropsType>>([
        {id: v1(), name: "coca cola"},
        {id: v1(), name: "fanta"},
        {id: v1(), name: "sprite"},
        {id: v1(), name: "mirinda"}
    ])

    const addElFunc = (name: string) => {
        let addEl = {id: v1(), name: name}
        let newEl = [addEl, ...el]
        setEl(newEl)
    }

  return (
    <div className="App">
      <TodoList el={el} value={value} setValue={setValue} addElFunc={addElFunc}/>
    </div>
  );
}

export default App;
