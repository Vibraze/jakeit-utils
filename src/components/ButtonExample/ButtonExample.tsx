import React, { useEffect, useState } from 'react';
import './buttonExample.css';

export interface ButtonExampleProps {
    children:string;
    backgroundColor?:string;
    color?:string;
    width?:string;
    height?:string;
    fontSize?:string;
}

const ButtonExample = (props: ButtonExampleProps) => {
    return <button style={{backgroundColor:props.backgroundColor, color:props.color, width:props.width, height:props.height, fontSize:"string"}}>{props.children}</button>
};

export default ButtonExample;
