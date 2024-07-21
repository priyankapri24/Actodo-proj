function Todoitem(props) {
    const activityarr = props.activityarr
    const setactivityarr = props.setactivityarr

    function handledelete(deleteid) {
        var temparr=activityarr.filter(function(item){
            if(item.id==deleteid)
            {
                return false
            }
            else{
                return true
            }
        })
        setactivityarr(temparr)
    }
    return (
        <div className="flex justify-between">
            <p className="mt-1 ">{props.index + 1}.{props.activity} </p>
            <button className="mt-1 text-white border border-black pl-1 pr-1 bg-red-500" onClick={ ()=>{handledelete(props.id)}}>Delete</button>
       </div> 
    )
}
export default Todoitem
