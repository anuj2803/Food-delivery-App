import UserClass from "./UserClass"
import User from "./User";
import { Component } from "react";

class about extends Component{
    constructor(props){
        super(props);
        console.log("parent constructor");
    }
    componentDidMount(){
  console.log("parent component did mount");
    }
render()
{
    console.log("Parent Render");
    return(
        <div>
            <h1>About page it is</h1>
            {/* <User name={"Anuj"} location={"Ahmednagar"}></User> */}
            {/* <User   name={"Anuj khedekar(function)"} location={"Ahmednagar"}/> */}
            <UserClass  name={"Anuj khedekar (class)"} location={"Ahmednagar"}/>
        </div>
    );
}
}

export default about;