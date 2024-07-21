import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


function Login(props) {

    const navigate=useNavigate()
    const [eusername, seteusername] = useState()
    const [epassword, setupassword] = useState()
    const [ruser, setruser] = useState(true)

    const users = props.users

    function handleuinput(evt) {
        seteusername(evt.target.value)
    }

    function handleupass(evt) {
        setupassword(evt.target.value)

    }

    function checkuser() {
        var userfound = false
        users.forEach(function (item) {
            if (item.username === eusername && item.password === epassword) {
                console.log('login successful')
                userfound = true
                navigate('/landing',{state:{user:eusername}})
            }

        })
        if (userfound === false) {
            console.log('login failed')
            setruser(false)
        }
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md ">
                <h1 className="text-3xl font-medium">Hey Hi🙌</h1>
                {ruser ? <p className="mt-2">I help you manage your activities after you login :)</p> : <p className="text-red-600" >please Signup Before Login !!</p>}


                <div className="flex flex-col gap-2 mt-3 ">
                    <input onChange={handleuinput} placeholder="username" className="w-52 border-black p-1 bg-transparent border rounded-md"></input>
                    <input onChange={handleupass} placeholder="password" className="w-52 border-black p-1 bg-transparent border rounded-md"></input>


                    <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkuser}>Login</button>
                    <p>Don't have an account? <Link to={'/signup '} className="underline text-blue-500">Signup</Link> </p>
                </div>

            </div>


        </div>
    )
}
export default Login