"use client";

import Link from "next/link";

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { FaGithub } from "react-icons/fa";
import { RxMoon } from "react-icons/rx";
import { IoSunny } from "react-icons/io5";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Navbar() {
    const { setTheme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    const handleHamburger = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex justify-between items-center p-4 shadow-sm fixed top-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-50">
            {/* hamburger */}
            <div className="text-xl p-2 md:hidden cursor-pointer rounded-md hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus:bg-slate-800 dark:focus:text-slate-50 transition-colors" onClick={handleHamburger}>
                <div className="flex flex-col gap-1">
                    <span className="block w-5 h-[2px] bg-black dark:bg-white"></span>
                    <span className="block w-5 h-[2px] bg-black dark:bg-white"></span>
                    <span className="block w-5 h-[2px] bg-black dark:bg-white"></span>
                </div>
            </div>

            {/* logo */}
            <div className="flex gap-6 items-center">
                <h2 className="font-semibold">Web Academy</h2>
            </div>

            {/* menu links */}
            <div className="hidden md:block">
                <NavigationMenu>
                    <NavigationMenuList>
                        {/* home */}
                        <NavigationMenuItem>
                            <Link href={"/"} legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Beranda</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        {/* category */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Kategori</NavigationMenuTrigger>
                            <NavigationMenuContent className="p-4">
                                <Link href={"/"}>
                                    <NavigationMenuLink asChild>
                                        <div className="p-4 rounded-md hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus:bg-slate-800 dark:focus:text-slate-50 transition-colors">
                                            <h4 className="font-semibold text-sm w-[350px]">Fundamental</h4>
                                            <p className="mt-2 text-sm w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam omnis nulla consectetur optio repellendus modi quam voluptate eaque beatae veniam?</p>
                                        </div>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* about */}
                        <NavigationMenuItem>
                            <Link href={"/"} legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Tentang Kami</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        {/* other */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Lainnya</NavigationMenuTrigger>
                            <NavigationMenuContent className="p-4">
                                <Link href={"/"}>
                                    <NavigationMenuLink asChild>
                                        <div className="p-4 rounded-md hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus:bg-slate-800 dark:focus:text-slate-50 transition-colors">
                                            <h4 className="font-semibold text-sm w-[350px]">Fundamental</h4>
                                            <p className="mt-2 text-sm w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam omnis nulla consectetur optio repellendus modi quam voluptate eaque beatae veniam?</p>
                                        </div>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            {/* useful links */}
            <div className="flex items-center">
                {/* github */}
                <Link href={"/"} className="text-xl p-2 rounded-md hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus:bg-slate-800 dark:focus:text-slate-50 transition-colors">
                    <FaGithub />
                </Link>

                {/* dark mode toggle */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="text-xl cursor-pointer p-2 rounded-md hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus:bg-slate-800 dark:focus:text-slate-50 transition-colors">
                            <RxMoon className="hidden dark:block" />
                            <IoSunny className="dark:hidden" />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}
