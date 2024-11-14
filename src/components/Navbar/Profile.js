import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import Icon from "../../Icons";
import React from "react";

function Profile() {
  const user = {
    name: "Seda Mercan",
    avatar: "https://placekitten.com/250/250",
  };
  return (
    <Menu>
      {({ open }) => (
        <>
          <MenuButton
            className={`flex items-center h-8 rounded-full gap-x-2 pr-3 ${
              open ? "bg-active" : "white"
            }`}
          >
            <img src={user.avatar} alt="" className="w-8 h-8 rounded-full" />
            <span className="flex-shrink-0">{user.name}</span>{" "}
            <span className={open && "rotate-180"}>
              <Icon name={"downDir"} size={18} />
            </span>
          </MenuButton>
          <MenuItems
            anchor="bottom"
            className="absolute top-full
        right-0 w-52 bg-active:white pr-5"
          >
            <MenuItem>
              <a
                className="h-10 flex items-center rounded bg-transparent text-white data-[focus]:bg-white/10"
                href="/account"
              >
                Account
                <span className="flex items-center ml-auto">
                  <Icon name={"external"} size={18} />
                </span>
              </a>
            </MenuItem>
            <MenuItem>
              <a
                className="h-10 flex items-center rounded bg-transparent text-white data-[focus]:bg-white/10"
                href="/profile"
              >
                {" "}
                Profile
              </a>
            </MenuItem>
            <MenuItem>
              <a
                className="h-10 flex items-center rounded bg-transparent text-white data-[focus]:bg-white/10"
                href="/logout"
              >
                {" "}
                Log Out{" "}
              </a>
            </MenuItem>
          </MenuItems>
        </>
      )}
    </Menu>
  );
}

export default Profile;
