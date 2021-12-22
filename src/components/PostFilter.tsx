import React from 'react';
import {MyInput} from "./UI/input/MyInput";
import {MySelect} from "./UI/select/MySelect";

type  FilterType = {
    sort: any
    query: string
}
type PostFilterType = {
    filter: FilterType
    setFilter: (filter: FilterType) => void
}
export const PostFilter = React.memo<PostFilterType>(({filter, setFilter}) => {
    const options = [{value: 'title', name: 'По названию'}, {value: 'body', name: 'По описанию'}]

    return (
        <div>
            <MyInput type={'text'} value={filter.query} placeholder={'Search for...'}
                     onChange={e => setFilter({...filter, query: e.currentTarget.value})}/>
            <MySelect option={options}
                      defaultValue={'Сортировка по'}
                      value={filter.sort}
                      sortPost={selected => setFilter({...filter, sort: selected})}
            />
        </div>
    );
});

