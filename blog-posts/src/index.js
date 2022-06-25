import React from "react";
import  ReactDOM  from "react-dom";
import SingleComment from './SingleComment';
import UserCard from "./UserCard";
import profile1 from './images/indir.jpeg'

const App = () => {
    return(
    <div className="ui comments">
        <UserCard>
        <SingleComment name ='Alex' date ='Today at 5:00 PM' text ='it is amazing' picture ={profile1}/>
        </UserCard>
        <UserCard>
        <SingleComment name ='Jack' date ='Today at 6:00 PM' text ='Great Job' picture ={profile1}/>
        </UserCard>
        <UserCard>
        <SingleComment name ='Sarah' date ='Today at 7:00 PM' text ='Thanks' picture ={profile1}/>
        </UserCard>
    </div>
    
    )
}
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)