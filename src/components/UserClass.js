import React from "react";

class UserClass  extends React.Component{
    constructor(props){
        super(props);
        //state object in class
        this.state={
            // count:0,
            // count1:1,
            userInfo:{
                name:"dummy",
                location:"default",
                
            },
        };
        // console.log(props);
    }

    async componentDidMount(){
        //API call
        const data=await fetch("https://api.github.com/users/anuj2803");
        const json=await data.json();

        this.setState({
            userInfo:json,
        });

        console.log(json);
    }
    componentDidUpdate(){
        console.log("component Did update");
    }
    // componentDidUpdate(prevProps,prevState){
    //     if(this.state.count!==prevState.count){

    //     }
    //     if(this.state.count2!==prevState.count2){

    //     }
    //     console.log("component Did update");
    // }
    componentWillUnmount(){
        console.log("component will unmount");
    }
    render(){
        console.log(this.props.name+"child Render");
        const {name,location,avatar_url}=this.state.userInfo;
        
        // debugger;---->>The debugger allows you to understand and debug how your JavaScript code is running, similar to a web browser. 
        // const{name,location}=this.props;
        // const{count,count1}=this.state;
        return(
            <div className="user-card">
                {/* <h1>count:{count}</h1>
                <button onClick={()=>{
                    this.setState({
                    count:this.state.count+1,
                    });
                }}>
                
                    count Increase
                </button> */}
                {/* <h1>count1:{count1}</h1> */} 
                 <img src={avatar_url}/>
                <h2>Name:{name}</h2>
                 <h3>Location:{location}</h3> 
                <h4>Contact:@anujkhedekar</h4>
            </div>

        );
    }
}
export default UserClass;