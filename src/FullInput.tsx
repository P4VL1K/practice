import React, {ChangeEvent,KeyboardEvent, useRef, useState} from "react";
import {ObjPropsType} from "./App";

type FullInputPropsType = {
    el: Array<ObjPropsType>
    value: string
    setValue: (value: string) => void
    callback: () => void
}


export function FullInput (props: FullInputPropsType) {

    const [saveValue, setSaveValue] = useState('')
    const inputRef = useRef(null)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(e.currentTarget.value)
    }
    const onClickHandler = () => {
        setSaveValue(props.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            props.callback()
        }
    }

   return (
       <div>
           <input
               ref={inputRef}
               value={props.value}
               onChange={onChangeHandler}
               onKeyPress={onKeyPressHandler}
           />
           <button
               onClick={onClickHandler}
           >save
           </button>
           <b>
               value - {saveValue}
           </b>
       {props.el.map(t => {
            return (
                <div>

                    <ul>
                        <li>{t.name}</li>
                    </ul>
                </div>
            )
        })
    }
       </div> )
}