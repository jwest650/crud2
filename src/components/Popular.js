import React from "react";
import image from "../Images/index.png";
function Popular({ data }) {
    return (
        <div className="p-2">
            {data?.map((data, i) => (
                <div key={i} className="border-b p-2 sm:flex ">
                    <img
                        src={data.multimedia ? data.multimedia.src : image}
                        alt=""
                        className="pr-5 w-96"
                    />

                    <div className="space-y-3 ">
                        <h2 className="font-bold text-2xl">
                            {data.display_title}
                        </h2>
                        <p>
                            {" "}
                            {data.summary_short.length > 200
                                ? data.summary_short.substring(0, 200) + "..."
                                : data.summary_short}
                        </p>
                        <p className="text-red-500">{data.opening_date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Popular;
