import React, { Component } from "react";

import '../App.css';

function Square(props){
    return (
        <div>
            <h4>{props.komponen_nama}</h4>
            <h4>{props.komponen_nim}</h4>
            <h4>{props.komponen_email}</h4>
        </div>
    );
}

export default class CompAndProps extends Component{
    render(){
        const bgColor = {
            backgroundColor: this.props.bgColor
        }

        const bgbgColor = {
            backgroundColor: this.props.bgbgColor
        }
        return (
            <div className="wrapper">
                <div className ="User-info-pink" style={bgColor}>
                <Square komponen_nama='Raja Tobias Dante' komponen_nim='21120120140041' komponen_email='rajasinaga8@gmail.com'/>
                </div>
                <div className ="User-info-purple" style={bgbgColor}>
                <Square komponen_nama='Osvelina Margaretha S.' komponen_nim='21120120140167' komponen_email='osvelinasiregar@gmail.com' />
                </div>
                <div className ="User-info-pink" style={bgColor}>
                <Square komponen_nama='Muhammad Irhamsyah Arrahim' komponen_nim='21120120140157' komponen_email='kopiqo69@gmail.com' />
                </div>
                <div className ="User-info-purple" style={bgbgColor}>
                <Square komponen_nama='Muhammad Fitra Arisaputra' komponen_nim='21120120140160' komponen_email='keyladefina@gmail.com' />
                </div>
            </div>
        );
    }
}
