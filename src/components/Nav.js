import React from "react";
import { GoThumbsup } from "react-icons/go";
import { BsSearch } from "react-icons/bs";
function Nav({ input, display }) {
    return (
        <div className="sm:flex justify-between p-5 items-center  border-b-2 border-black mx-2">
            <h1 className="text-2xl flex items-center">
                <i>
                    <GoThumbsup />
                </i>
                <span className="pl-2">MovieReviews</span>{" "}
            </h1>
            <div className="flex h-[25px] w-52 relative">
                <input
                    id="search"
                    type="text"
                    className="bg-gray-100 border border-[#a68555] rounded-l-sm outline-none pl-1 w-full h-full"
                    value={display}
                    placeholder="Search for movies"
                    onChange={(e) => input(e.target.value)}
                />
                <label
                    htmlFor="search"
                    className="py-1 bg-[#a68555] text-white px-1 rounded-r-sm"
                >
                    <BsSearch className=" " />
                </label>
            </div>
        </div>
    );
}

export default Nav;
