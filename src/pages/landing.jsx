import Header from "../components/header";
import Card from "../components/card";
import Todocontainer from "../components/todocontainer";
import { useLocation } from "react-router"


function Landing(){

    const data= useLocation()

    return(
        <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <Header username={data.state.user}/>
        <div className="flex justify-between gap-7 my-5  flex-wrap ">

          <Card bgcolor={"#8272DA"} title={'23'} subtitle={'Chennai'} ></Card>

          <Card bgcolor={"#FD6663"} title={'July'} subtitle={'14:23:08'} ></Card>

          <Card bgcolor={"#FCA201"} title={'Building Using'} subtitle={'React'} ></Card>

        </div>
        <Todocontainer></Todocontainer>
      </div>

      
    </div>
    )
}

export default Landing