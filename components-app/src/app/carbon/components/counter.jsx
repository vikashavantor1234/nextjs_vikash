'use client'

import { Button, ComboButton, MenuItem } from "@carbon/react";

import { useState } from "react";

export default function Counter(){
    const [counter, setCounter] = useState(0);


    return <div>
        <h1> Value: {counter}</h1>
        <Button onClick={()=>{
            setCounter(counter+1)

        }}> + </Button>

        <ComboButton label="Primary action">
            <MenuItem label="Secondry action"/>
            <MenuItem label="Third action"/>
            <MenuItem label="fourth action"/>
        </ComboButton>
    </div>

}