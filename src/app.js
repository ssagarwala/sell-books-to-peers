import React from 'react';
import ReactDOM from 'react-dom';
import SellBooksToPeers from './components/SellBooksToPeers';
import  './styles/styles.css'
ReactDOM.render(<SellBooksToPeers /> , document.getElementById('app'));


class OldSyntax {
    constructor(){
        this.name = 'Mike';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting(){
        return `Hi My name is ${this.name}`;
    }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

class NewSyntax {
    name="Jen";
    getGreeting = () =>{
        return `Hi, My name i s${this.name}`;
    }
}
const newSyntax = new NewSyntax ();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());