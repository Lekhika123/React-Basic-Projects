function customRender(ReactElement,container){
     const element=document.createElement(ReactElement.type);
     element.innerHTML=ReactElement.children;
    //  element.setAttribute('href',ReactElement.props.href);
    //  element.setAttribute('target',ReactElement.props.target);

     for(const prop in ReactElement.props){
        if(prop === 'children')   continue;
        element.setAttribute(prop,ReactElement.props[prop]);
     }
     mainContainer.appendChild(element);
}
const ReactElement={
    type:'a',
    children:'I am creating a custom react app',
    props:{
        href:"http://google.com",
        target:'_blank'
    }
}

const mainContainer=document.getElementById('root');
customRender(ReactElement,mainContainer);
