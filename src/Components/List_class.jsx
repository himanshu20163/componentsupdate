import { Component } from "react";
class List_class extends Component{
    constructor(){
        console.log("constructor called");
        super();
        this.state = {
            data: [],
        };
    }
    async componentDidMount(){
       <h2>Component did mount</h2>
       let api = 'https://fakestoreapi.com/products';
       let res = await fetch(api);
       let data = await res.json(res);
       this.setState({data:data});
    }
    render(){
        return(
            <div>
                <div >
                <h4>Components did mount</h4>
                    <div style={{display:"flex",flexWrap:"wrap",width:"100%"}}>
                    
                {this.state.data.map((e)=>{
                    return (
                       <div style={{width:"25%"}}>
                     <h2>{e.id}</h2>
                    <img src={e.image} height="100px" width="100px"/>
                       </div> 
                    )  
                })}
                    </div>
                  
                </div>
                
            </div>
        )
    }
}
export default List_class;