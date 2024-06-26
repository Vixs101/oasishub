import React, { useState } from "react";
import { links } from "../lib/constants";

function NavMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex md:w-2/3 justify-end">
        {!open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-10 w-10 text-white md:hidden"
            onClick={() => setOpen(true)}
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-10 w-10 text-black mt-1 md:hidden z-30"
            onClick={() => setOpen(false)}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        )}

        {open && (
          <div className="absolute flex flex-col gap-5 px-5 py-10 text-lg font-semibold right-0 h-[calc(100vh-7rem)] w-[calc(100vw-5rem)] bg-white border-gray-300 border-2 text-black rounded-lg duration-500">
            {links.map((link) => (
              <>
                <div className="flex text-green-600 hover:bg-gray-100 rounded-sm h-10 gap-2 items-center">
                  <a
                    href={link.url}
                    className="flex gap-2"
                    onClick={() => setOpen(false)}
                  >
                    {link.icon}
                    {link.title}
                  </a>
                </div>
                <hr className="" />
              </>
            ))}
            <hr className=" bg-slate-950 mt-40" />
          </div>
        )}
      </div>
    </>
  );
}

export default NavMenu;
