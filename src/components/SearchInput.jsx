import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && searchQuery.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };
  return (
    <div
      id="SearchBox"
      className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 
                    border-[#cfd0d4] rounded-3xl hover:shadow-c2
                      focus-within:shadow-c border hover:bg-[#e0e1e4] "
    >
      <AiOutlineSearch size={18} color="#9aa0a6" />
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
        value={searchQuery}
        autoFocus
        className="grow outline-none text-black/[0.87] bg-transparent border-none"
      />

      <div className="flex items-center sm:gap-1 md:gap-2 lg:gap-4">
        {searchQuery && (
          <IoMdClose
            size={24}
            color="#79757a"
            className="cursor-pointer "
            onClick={() => setSearchQuery("")}
          />
        )}

        <img
          src={MicIcon}
          alt="micicon"
          className=" h-6 w-4 md:w-6  cursor-pointer "
        />
        <img
          src={ImageIcon}
          alt="micicon"
          className=" h-6 w-4 md:w-6 cursor-pointer "
        />
      </div>
    </div>
  );
};

export default SearchInput;
