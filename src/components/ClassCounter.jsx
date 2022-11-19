//Это приложение - реализация видеоурока на YouTube канале Ulbi TV ссылка: https://www.youtube.com/watch?v=GNrdg3PzpJQ
import React from "react";

class ClassCounter extends React.Component {
    constructor (props){
        super(props)
            this.state = {
                count:0
            }
            this.increment = this.increment.bind(this)
            this.decrement = this.decrement.bind(this)
        
    }
    
    increment(){
        this.setState({count: this.state.count +1})
    }
    decrement(){
        this.setState({count: this.state.count -1})
    }

    render(){
        return(
            <>
            <h1>{this.state.count}</h1>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            </>
        )
    }



} 





export default ClassCounter