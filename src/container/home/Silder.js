import React from "react";  
import ReactSwipe from 'react-swipe';

export default class Slider extends React.Component{
    render() {
        let option ={continuous:true,auto:2000}
        return <div className="home-swipe"> 
             <ReactSwipe className="carousel" swipeOptions={option} key={this.props.sliders.length}>
                 {this.props.sliders.map((item,index)=>{
                     return <div key={index}>
                     <img src={item.img}/>
                     </div>
                 })}
            </ReactSwipe>
            <div className="focus">
                 {this.props.sliders.map((item,index)=>{
                     return <span key={index}></span>
                 })}
            </div>
        </div>
    }
}
