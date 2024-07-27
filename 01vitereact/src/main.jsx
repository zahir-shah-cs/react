import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App.jsx';

function Myapp(){
    return (
        <div>
            <h1>Custome App! Here</h1>
        </div>
    )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'http//google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href='http://google.com' target='_blank'>Visit
     google!</a>
)

const anotherUser = 'chia or react'

const reactElement = React.createElement(
    'a', 
    {href: 'http://google.com', target: '_blank'},
    'click me to visit google',
    anotherUser
)

ReactDom.createRoot(document.getElementById
    ('root')).render(

        reactElement
    
    )