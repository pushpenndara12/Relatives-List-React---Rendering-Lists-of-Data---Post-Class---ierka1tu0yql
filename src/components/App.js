import React from "react";

import Task from "../Task";
import List from "./List";

class App extends React.Component{
    constructor(){
        super();
        this.state={
            list:[],
            count:1
        }
    }
     
    render(){
        const taskdata=(data)=>{
            
            const newtask={
                planning:data,
                id:`relativeListItem${this.state.count}`
            }
            const update=[...this.state.list,newtask]

            this.setState({
                list:update,
                count:this.state.count+1
            }) 
            
        }
        console.log(this.state.list)
        return(
            <div id="main">
            
            <Task
            data3={taskdata} 
            />
            <List
            data4={this.state.list}/>
            </div>
        )
    }
}
export default App;
