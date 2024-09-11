"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { FaGithub } from "react-icons/fa";
import { RxMoon } from "react-icons/rx";
import { IoSunny } from "react-icons/io5";
import { ImCross } from "react-icons/im";

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

            {/* sibarmenu for mobiles */}
            <div className={`flex flex-col gap-4 absolute top-0 w-full h-screen px-10 py-32 bg-slate-950 transition-all duration-300 ease-out ${isOpen ? "right-0" : "right-[100%]"}`}>
                <Link href={"/"} className="font-semibold text-xl" onClick={handleHamburger}>
                    Beranda
                </Link>
                <Accordion type="single" collapsible>
                    <AccordionItem value="video" className="!border-none">
                        <AccordionTrigger className="!no-underline font-semibold text-xl p-0">Video</AccordionTrigger>
                        <AccordionContent className="!pt-4 !px-4 flex flex-col gap-4">
                            <Link href={"/video/fundamental"} className="font-semibold text-base" onClick={handleHamburger}>
                                Fundamental
                            </Link>
                            <Link href={"/video/frontend"} className="font-semibold text-base" onClick={handleHamburger}>
                                Frontend
                            </Link>
                            <Link href={"/video/backend"} className="font-semibold text-base" onClick={handleHamburger}>
                                Backend
                            </Link>
                            <Link href={"/video/fullstack"} className="font-semibold text-base" onClick={handleHamburger}>
                                Fullstack
                            </Link>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Link href={"/"} className="font-semibold text-xl" onClick={handleHamburger}>
                    Artikel
                </Link>
                <Link href={"/"} className="font-semibold text-xl" onClick={handleHamburger}>
                    Lainnya
                </Link>

                <div className="absolute top-6 right-6" onClick={handleHamburger}>
                    <ImCross />
                </div>
            </div>

            {/* logo */}
            <Link href={"/"} className="hidden md:flex gap-6 items-center">
                <h2 className="font-semibold">Web Academy</h2>
            </Link>

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
                            <NavigationMenuTrigger className={pathname === "/kategori" ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-50" : ""}>Video</NavigationMenuTrigger>
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

                        {/* article */}
                        <NavigationMenuItem>
                            <Link href={"/artikel"} legacyBehavior passHref>
                                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${pathname === "/tentang" ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-50" : ""}`}>Artikel</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        {/* add video */}
                        <NavigationMenuItem>
                            <Link href={"https://forms.gle/L5T9XAqSQ6khPLUN6"} legacyBehavior passHref>
                                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${pathname === "/tentang" ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-50" : ""}`}>Tambahkan Video</NavigationMenuLink>
                            </Link>
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
