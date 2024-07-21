import Todoitem from "./todoitem"


function Todolist(props) {
    const activityarr=props.activityarr
    const setactivityarr=props.setactivityarr
    

    return (
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow gap-7">
            <h1 className="text-2xl font-medium">Todays Activity</h1>

            {activityarr.length==0?<p className="p-2">You havn't added anything yet!!</p>:''}
            {
                activityarr.map(function(item,index){
                    return <Todoitem id={item.id} activity={item.activity} index={index} activityarr={activityarr} setactivityarr={setactivityarr }></Todoitem>
                })
            }
        </div>
    )
}
export default Todolist