import React, { useState } from "react";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

const Header = () => {
  return (
    <header className="m-4 mx-6 flex  flex-row items-center justify-between">
      <h1 className="text-white text-3xl font-black tracking-wider cursor-pointer  select-none hover:scale-110  mr-auto  ">
        MOVIX
      </h1>
      {/* <HeaderIcon Icon={MenuIcon} /> */}
      <div className=" flex flex-grow  gap-2  max-w-xs   ">
        <HeaderIcon Icon={HomeIcon} title="HOME" />
        <HeaderIcon Icon={CollectionIcon} title="TRENDING" />
        <HeaderIcon Icon={BadgeCheckIcon} title="VERFIED" />
        <HeaderIcon Icon={LightningBoltIcon} title="COLLECTIONS" />
        <HeaderIcon Icon={SearchIcon} title="SEARCH" />
        <HeaderIcon Icon={UserIcon} title="ACCOUNT" />
      </div>
      

      {/* <Image /> */}
    </header>
  );
};

export default Header;
// import { BeakerIcon } from '@heroicons/react/solid'

// function MyComponent() {
//   return (
//     <div>
//       <BeakerIcon className="h-5 w-5 text-blue-500"/>
//       <p>...</p>
//     </div>
//   )
// }
