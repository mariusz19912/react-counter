import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class App extends Component {
    render() {
        // let imie = 'Krystian';
        return ( 
        <div className = "App">
            <header className = "App-header">
            <h1 className = "App-title" > Licznik w ReactJS </h1></header> 
            <Counter initValue = "10"/>
            <Counter initValue = "20"/>
            <Counter initValue = "30"/>
            </div >
        );
    }
}

export default App;