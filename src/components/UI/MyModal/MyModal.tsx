import React from 'react';
import style from './MyModal.module.css'

type MyModalType = {
    visible: boolean
    setVisible?: any
    children: any
}
export const MyModal = React.memo<MyModalType>(({visible, setVisible, children}) => {

    const rootClasses = [style.myModal]
    if (visible) {
        rootClasses.push(style.active)
    }
    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={style.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
});
