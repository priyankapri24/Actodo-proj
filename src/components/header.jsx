function Header (props){
    return(
        <div>
            <h1 className="text-3xl font-medium">Hello {props.username}!</h1>
        <p className="mt-2">I help you to manage your activities :)</p>

        </div>
    )
}
export default Header