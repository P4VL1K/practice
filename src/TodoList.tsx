import React from "react";
import {FullInput} from "./FullInput";
import {ObjPropsType} from "./App";
import {SupetButton} from "./SupetButton";
import {FullInput2} from "./FullInput2";


type TodoListPropsType = {
    el: Array<ObjPropsType>
    value: string
    setValue: (value: string) => void
    addElFunc: (name: string) => void
}

export function TodoList(props: TodoListPropsType) {


    const addElFunction = () => {
        props.addElFunc(props.value)
        props.setValue('')
    }

    return (
        <div>
            {/*<FullInput el={props.el} value={props.value} setValue={props.setValue} callback={addElFunction}/>*/}
            {/*<SupetButton callBack={addElFunction} buttonName={'+'}/>*/}
            <FullInput2 el={props.el} callback={props.addElFunc}/>
        </div>
    )
}