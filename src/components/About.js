import UserClass from "./UserClass";
// import User from "./User";
import { Component } from "react";
import userContext from "../Utils/userContext";

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
            <div>
                Login
                <userContext.Consumer>
          {({logedin})=>(
          <h1 className="text-xl font-bold">{logedin}</h1>
          )}
                </userContext.Consumer>
            </div>
            {/* <User name={"Anuj"} location={"Ahmednagar"}></User> */}
            {/* <User   name={"Anuj khedekar(function)"} location={"Ahmednagar"}/> */}
            <UserClass  name={"Anuj khedekar (class)"} location={"Ahmednagar"}/>
        </div>
    );
}
}

export default about;