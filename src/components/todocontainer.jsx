import Addtodo from "./addtodoform"
import Todolist from "./todolist"
import { useState } from "react"

function Todocontainer() {
    const [activityarr, setactivityarr] = useState([
       
    ])

    return (
        <div className="flex gap-5 flex-wrap">
            <Addtodo activityarr={activityarr} setactivityarr={setactivityarr}></Addtodo>
            <Todolist activityarr={activityarr} setactivityarr={setactivityarr}></Todolist>
        </div>
    )
}
export default Todocontainer

