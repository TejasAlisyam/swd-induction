const UserList =({users}) => {
    return (
        <ul>
            {users.map((user) =>(
                <li>
                    {user.name}
                </li>
            ))}
        </ul>
    );
};

export default UserList;