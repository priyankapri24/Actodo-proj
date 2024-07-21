import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props) {

    const navigate = useNavigate()

    const users = props.users
    const setusers = props.setusers



    const [eusername, seteusername] = useState()
    const [epassword, setupassword] = useState()

    function handleuinput(evt) {
        seteusername(evt.target.value)
    }

    function handleupass(evt) {
        setupassword(evt.target.value)

    }
    function adduser() {
        setusers([...users, { username: eusername, password: epassword }])
        navigate('/')
    }
  

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md ">
                <h1 className="text-3xl font-medium">Hey Hi🙌</h1>
                <p className="mt-2"> You can Signup here :)</p>

                <div className="flex flex-col gap-2 mt-3">
                    <input onChange={handleuinput} placeholder="username" className="w-52 border-black p-1 bg-transparent border rounded-md"></input>
                    <input onChange={handleupass} placeholder="password" className="w-52 border-black p-1 bg-transparent border rounded-md"></input>


                    <button onClick={adduser} className="bg-[#FCA201] w-24 p-1 rounded-md mt-1" >Signup</button>
                    <p>Already have an account? <Link to={'/'} className="underline text-blue-500" >Login</Link> </p>
                </div>

            </div>


        </div>
    )
}
export default Signup