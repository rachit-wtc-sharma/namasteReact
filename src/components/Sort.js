function Sort(props) {
    const initialState = props.initialState;
    const sortBy = props.sortBy;
console.log('props',props);
    return (
        <>
            <div className="sorter">
                <span>Sorter:</span>
                <select onChange={sortBy} value={initialState}>
                    <option value="1">Relavance</option>
                    <option value="2">Price:low to high</option>
                    <option value="3">Price:high to low</option>
                    <option value="4">Ratings:low to high</option>
                    <option value="5">Ratings:high to low</option>
                </select>
            </div>
        </>
    )
}

export default Sort;