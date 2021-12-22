import React, {ChangeEvent} from 'react';
import style from './MyInput.module.css'

type MyInputType = {
    type: string
    value: string
    placeholder: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void


}
export const MyInput = React.memo<MyInputType>(({placeholder,...props}) => {
    return (
        <input placeholder={placeholder} className={style.myInput} {...props}/>
    );
});

