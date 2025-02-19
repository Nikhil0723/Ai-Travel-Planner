"use client";
import React, { useState } from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { CiSearch } from "react-icons/ci";
import { Input } from "./ui/input";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="rounded-t-lg bg-gradient-to-r from-green-400 to-blue-500 p-3">
      <div className="flex justify-between items-center gap-5">
        <SidebarTrigger />
        <Separator orientation="vertical" className="h-4 w-[0.1px]" />
        <div className="flex-1 flex items-center gap-3 relative p-1">
          <CiSearch size={20} />
          <Input
            type="text"
            placeholder="Search City"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-none outline-none shadow-none font-light pr-8"
          />
          {search && (
            <AiOutlineClose
              size={18}
              className="absolute right-2 cursor-pointer text-gray-600"
              onClick={() => setSearch("")}
            />
          )}
        </div>
        <Separator orientation="vertical" className="h-4 w-[0.1px]" />
        <Button>Add Trip</Button>
      </div>
    </div>
  );
};

export default Navbar;
