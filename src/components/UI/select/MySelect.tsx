import React, {ChangeEvent} from 'react';


type OptionType = {
    value: string
    name: string
}

type MySelectType = {
    option: Array<OptionType>
    defaultValue: string
    value: string
    sortPost: (sort: any) => void
}
export const MySelect = React.memo<MySelectType>(({defaultValue, option, value, sortPost}) => {
    const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        sortPost(event.currentTarget.value)
    }
    return (
        <select value={value} onChange={onChangeSelect}>
                <option disabled value={'sort'}>{defaultValue}</option>
            {option.map(option => <option key={option.value} value={option.value}>
                {option.name}
            </option>)}
        </select>
    );
});

