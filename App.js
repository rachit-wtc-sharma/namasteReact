import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider } from 'react-router-dom';
import { appRouter } from './Route';
import MainLayout from './MainLayout';

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

// const nestedStructure  = React.createElement('div',{
//     id:'parent'
// },[React.createElement('div',{
//     id:'child'
// },[React.createElement('h1',{},"i am a h1 tag created through nested structure"),
//    React.createElement('h2',{},"i am a h2 tag created through nested structure"),
//    React.createElement('h3',{},"i am a h3 tag created through nested structure")]),React.createElement('div',{
//     id:'child2'
// },[React.createElement('h1',{},"i am a h1 tag created through nested structure"),
//    React.createElement('h2',{},"i am a h2 tag created through nested structure"),
//    React.createElement('h3',{},"i am a h3 tag created through nested structure")])])

// const heading = React.createElement('h1',{
//     id:'heading'
// },"Hello from react");
// const root = ReactDOM.createRoot(document.getElementById('react-root'));
// const root2 = ReactDOM.createRoot(document.getElementById('react-root2'));
// root.render(nestedStructure);
// root2.render(heading);

// function Title () {
//     return <h1>I am a title component</h1>
// }
// const title = (
//     <span>Hi this is variable</span>
// )
// function HeaderComponent() {
//     return (
//         <div className='container'>
//             {title}
//             <Title /> //Component composition
//             <h1 id="heading">I am a react header component</h1>
//         </div>
//     )
// }

function App() {
    return (
        <MainLayout />
    )
}

// const appRouter = createBrowserRouter([
//      {
//           path:'/',
//           element: <App />,
//           children: [{
//                path: '/about',
//                element: <About />
//           },{
//                path: '/',
//                element: <Main />
//           }]
//      },
     
// ])

const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(<RouterProvider router={appRouter} />);