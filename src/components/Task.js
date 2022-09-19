import React from "react";

class Task extends React.Component{
    constructor(){
        super();
        this.state={
            task:''
        }
    }
    render(){
        const func1=(e)=>{
            this.setState({task:e.target.value})
        }
        const addtast1=(e)=>{
            e.preventDefault();
            this.props.data3(this.state.task);
        }
        return(
            <form onSubmit={addtast1}>
           <input placeholder="Enter here..." onChange={func1}></input>
           </form>
        )
    }
}
export default Task;