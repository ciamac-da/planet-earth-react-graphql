import  React  from 'react';

export function Countries({users}) {
    return(
<div className="users">
<div className="usersId">     <p>{users.id}</p> </div>
<div className="usersName">   <p>{users.name}</p> </div>
<div className="usersRocket"> <p>{users.rocket}</p> </div>
</div>
    )
}