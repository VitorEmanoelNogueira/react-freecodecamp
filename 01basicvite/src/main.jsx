import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const reactElement= {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

function MyApp(){
    return(
        <h1>Custom React App</h1>
    )
}

const AnotherElement = (
    <a href="http://google.com" target='_blank'>Visit Google</a>
) // Só colocar no createRoot como AnotherElement funciona

const areactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: "_blank"},
    'Click me to visit Google'
) // Só colocar literalmente também. Por não estar sendo extraído de outro elemento, note que nem precisa de começar com letra maiúscula curiosamente porque é a versão em objeto do elemento 

createRoot(document.getElementById('root')).render(
    
    <App />

)
