import { useContext } from "react";
import { UserContext } from "../../App";
import { UserInfo, Avatar, Name, UserId } from "../style";

const User = () => {
  const { user } = useContext(UserContext);
  
  const Avticon = () => (
    <Avatar>
      {user.created_by.avt === "" ? (
        <i className="fas fa-user"></i>
      ) : (
        <img src={user.created_by.avt} alt="avt" />
      )}
    </Avatar>
  );
  return (
    <UserInfo>
      <Avticon />
      <Name>
        {user.created_by.name}
        <UserId>@{user.created_by.id}</UserId>
      </Name>
    </UserInfo>
  );
};
export default User;
