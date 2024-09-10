"use client";

import Link from "next/link";

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { FaGithub } from "react-icons/fa";
import { RxMoon } from "react-icons/rx";
import { IoSunny } from "react-icons/io5";
import { useTheme } from "next-themes";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const { setTheme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    const handleHamburger = () => {
        setIsOpen(!isOpen);
    };

    const pathname = usePathname();

    return (
        <div className="flex justify-between items-center px-4 md:px-10 py-4 fixed top-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-50">
            {/* hamburger */}
            <div className="text-xl p-2 md:hidden cursor-pointer rounded-md hover:bg-slate-100 hover:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-slate-800 dark:hover:text-slate-50 transition-colors" onClick={handleHamburger}>
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
                                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${pathname === "/" ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-50" : ""}`}>Beranda</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        {/* videos */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={pathname === "/kategori" ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-50" : ""}>Videos</NavigationMenuTrigger>
                            <NavigationMenuContent className="p-4">
                                <div className="grid grid-cols-2 w-max max-w-[500px]">
                                    <Link href={"/video/fundamental"} className="w-full">
                                        <NavigationMenuLink asChild>
                                            <div className="p-4 flex flex-col w-full h-full rounded-md hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus:bg-slate-800 dark:focus:text-slate-50 transition-colors">
                                                <h4 className="font-semibold">Fundamental</h4>
                                                <p className="mt-1 text-sm">Mencakup dasar-sadar web programming seperti HTML, CSS, dan JavaScript dasar.</p>
                                            </div>
                                        </NavigationMenuLink>
                                    </Link>

                                    <Link href={"/video/frontend"} className="w-full">
                                        <NavigationMenuLink asChild>
                                            <div className="p-4 flex flex-col w-full h-full rounded-md hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus:bg-slate-800 dark:focus:text-slate-50 transition-colors">
                                                <h4 className="font-semibold">Frontend</h4>
                                                <p className="mt-1 text-sm">Mencakup tampilan dan interaksi pengguna, menggunakan HTML, CSS, dan JavaScript.</p>
                                            </div>
                                        </NavigationMenuLink>
                                    </Link>

                                    <Link href={"/video/backend"} className="w-full">
                                        <NavigationMenuLink asChild>
                                            <div className="p-4 flex flex-col w-full h-full rounded-md hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus:bg-slate-800 dark:focus:text-slate-50 transition-colors">
                                                <h4 className="font-semibold">Backend</h4>
                                                <p className="mt-1 text-sm">Mengelola logika bisnis, basis data, dan server, menggunakan Node.js, Python, dll.</p>
                                            </div>
                                        </NavigationMenuLink>
                                    </Link>

                                    <Link href={"/video/fullstack"} className="w-full">
                                        <NavigationMenuLink asChild>
                                            <div className="p-4 flex flex-col w-full h-full rounded-md hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus:bg-slate-800 dark:focus:text-slate-50 transition-colors">
                                                <h4 className="font-semibold">Fullstack</h4>
                                                <p className="mt-1 text-sm">Menggabungkan frontend dan backend, menangani keseluruhan pengembangan aplikasi.</p>
                                            </div>
                                        </NavigationMenuLink>
                                    </Link>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* about */}
                        <NavigationMenuItem>
                            <Link href={"/"} legacyBehavior passHref>
                                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${pathname === "/tentang" ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-50" : ""}`}>Tentang Kami</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        {/* other */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Lainnya</NavigationMenuTrigger>
                            <NavigationMenuContent className="p-4">
                                <div className="grid grid-cols-2 w-max max-w-[500px]">
                                    <Link href={"/"} className="w-full">
                                        <NavigationMenuLink asChild>
                                            <div className="p-4 flex flex-col w-full h-full rounded-md hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus:bg-slate-800 dark:focus:text-slate-50 transition-colors">
                                                <h4 className="font-semibold">Fundamental</h4>
                                                <p className="mt-1 text-sm">Mencakup dasar-sadar web programming seperti HTML, CSS, dan JavaScript.</p>
                                            </div>
                                        </NavigationMenuLink>
                                    </Link>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            {/* useful links */}
            <div className="flex items-center">
                {/* github */}
                <Link href={"https://github.com/rtrivaldo/web-academy"} className="text-xl p-2 cursor-pointer rounded-md hover:bg-slate-100 hover:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-slate-800 dark:hover:text-slate-50 transition-colors">
                    <FaGithub />
                </Link>

                {/* dark mode toggle */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="text-xl p-2 cursor-pointer rounded-md hover:bg-slate-100 hover:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-slate-800 dark:hover:text-slate-50 transition-colors">
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
