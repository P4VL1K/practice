import React from "react";



type SupetButtonPropsType = {
    buttonName: string
    callBack: () => void
}

export function SupetButton (props: SupetButtonPropsType) {

    return (
    <button onClick={props.callBack}>{props.buttonName}</button>
    )
}
