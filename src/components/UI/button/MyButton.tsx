import React, {MouseEvent} from 'react';
import style from './MyButton.module.css'


type MyButtonType = {
    children: string
    disabled: boolean
    onClick: (event: MouseEvent) => void

}
export const MyButton = (props: MyButtonType) => {
    return (
        <button {...props} className={style.myButton}>
            {props.children}
        </button>
    );
}
