

const Profile =()=>{

    return(
        <div className="profile">
            <div className="header">
            {localStorage.getItem('user')}
            </div>
        </div>
    )
}
export default Profile