import React from "react";

class List extends React.Component{
    
    render(){
        return(
            <ol>
                {
                    this.props.data4.map((obj)=>{
                        return <li key={obj.id}>{obj.planning}</li>
                    })
                }
            </ol>
        )
    }
}
export default List;