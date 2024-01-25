function customRender(reactElement,container){
    const domElement = document.createElement()
}

const  reactElement = {
    type : 'a',
    props :{
        href : 'https://google.com',
        target: '_black'
    },
    children :'Click me to visit google'
}
const mainContainer = document.querySelector('#root')


customRender(reactElement , mainContainer)
