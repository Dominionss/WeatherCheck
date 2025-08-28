import { useContext } from "react";
import { UserContext } from "../context";

function ProfileWithContext() {
    const user = useContext(UserContext);
    return (
        <div className="ProfileWithContext">
            <h1>Hello, {user.name}</h1>
        </div>
    );
}

export default ProfileWithContext;
