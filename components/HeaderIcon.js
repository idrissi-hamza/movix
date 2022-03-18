import React from "react";

function HeaderIcon({ title, Icon }) {
  return (
    <div className="group flex flex-col items-center cursor-pointer text-gray-400  hover:text-gray-100 text-xs  w-12  ">
      <Icon className="w-6 group-hover:scale-125   " />
      <p className="tracking-wider  font-semibold select-none transition-all opacity-0 group-hover:opacity-100 translate-y--5   group-hover:translate-y-1  duration-400 ease-in-out ">
        {title}
      </p>
    </div>
  );
}

export default HeaderIcon;
