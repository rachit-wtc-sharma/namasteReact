//create nested element on react

// const nestedStructure  = React.createElement('div',{
//     id:'parent'
// },React.createElement('div',{
//     id:'child'
// },React.createElement('h1',{},"i am a h1 tag created through nested structure")))

// create sibling elements 
// const nestedStructure  = React.createElement('div',{
//     id:'parent'
// },React.createElement('div',{
//     id:'child'
// },[React.createElement('h1',{},"i am a h1 tag created through nested structure"),
//    React.createElement('h2',{},"i am a h2 tag created through nested structure"),
//    React.createElement('h3',{},"i am a h3 tag created through nested structure")]))


//Create nested element with two child div as a siblings

const nestedStructure  = React.createElement('div',{
    id:'parent'
},[React.createElement('div',{
    id:'child'
},[React.createElement('h1',{},"i am a h1 tag created through nested structure"),
   React.createElement('h2',{},"i am a h2 tag created through nested structure"),
   React.createElement('h3',{},"i am a h3 tag created through nested structure")]),React.createElement('div',{
    id:'child2'
},[React.createElement('h1',{},"i am a h1 tag created through nested structure"),
   React.createElement('h2',{},"i am a h2 tag created through nested structure"),
   React.createElement('h3',{},"i am a h3 tag created through nested structure")])])

const heading = React.createElement('h1',{
    id:'heading'
},"Hello from react");
const root = ReactDOM.createRoot(document.getElementById('react-root'));
const root2 = ReactDOM.createRoot(document.getElementById('react-root2'));
root.render(nestedStructure);
root2.render(heading);