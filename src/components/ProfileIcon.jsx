import { TbGridDots } from "react-icons/tb";

import majid from "../assets/m-icon.png";
import ProfileRing from "../assets/profile-ring.svg";

const ProfileIcon = () => {
  return (
    <div className=" flex gap-2">
      <span className="h10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05] ">
        <TbGridDots />
      </span>
      <span className="h10 w-10 relative flex items-center justify-center cursor-pointer">
        <img src={ProfileRing} alt="profileRing" className="absolute" />
        <span className="h-8 w-8 rounded-full overflow-hidden ">
          <img src={majid} alt="profile" className=" h-full object-cover " />
        </span>
      </span>
    </div>
  );
};

export default ProfileIcon;
