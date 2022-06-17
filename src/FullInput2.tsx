import React, {ChangeEvent,KeyboardEvent, useRef, useState} from "react";
import {ObjPropsType} from "./App";

type FullInputPropsType = {
    el: Array<ObjPropsType>
    callback: (name: string) => void
}


export function FullInput2 (props: FullInputPropsType) {

    const inputRef = useRef<HTMLInputElement>(null)
    const onClickHandler = () => {
       if (inputRef.current) {
           props.callback(inputRef.current.value)
       }
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {

        }
    }

   return (
       <div>
           <input
               ref={inputRef}
               onKeyPress={onKeyPressHandler}
           />
           <button
               onClick={onClickHandler}
           >save
           </button>
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