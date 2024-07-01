import Sort from './Sort';

function Filter(props) {
    return (
        <div className='filters'>
            <Sort initialState = {props.initialState} sortBy ={props.sortBy}/>
        </div>
    )
}

export default Filter;