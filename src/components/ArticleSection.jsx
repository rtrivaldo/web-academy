import Link from "next/link";
import { Badge } from "./ui/badge";
import { FaChevronRight } from "react-icons/fa";
import { Button } from "./ui/button";

export default function ArticleSection() {
    return (
        <div className="mt-20 md:mt-40 max-w-screen-xl mx-auto">
            {/* headings */}
            <h4 className="font-semibold text-sm md:text-lg hidden md:block">Artikel</h4>
            <h1 className="mt-2 text-2xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">Sumber Daya Web Programming</h1>
            <p className="mt-4 md:mt-6 text-sm md:text-base text-center md:text-left">Temukan tips, trik, dan tutorial web programming terbaru</p>

            <div className="mt-10 flex flex-col md:flex-row gap-10 md:gap-20">
                {/* artikel 1 */}
                <div className="md:w-1/3">
                    <div className="w-full h-[200px] bg-gray-50"></div>

                    <div className="mt-4">
                        <h4 className="text-sm font-semibold">
                            <Badge className={"px-2 py-1 rounded-sm mr-2"}>Kategori</Badge> 5 menit baca
                        </h4>

                        <h2 className="mt-2 text-lg font-bold">Panduan Belajar HTML untuk Pemula</h2>
                        <p className="mt-2 text-sm">Pelajari dasar-dasar HTML dengan mudah dan cepat</p>

                        <Link href={"/"} className="mt-6 w-max text-sm flex gap-2 items-center group">
                            Baca
                            <FaChevronRight className="size-3 group-hover:translate-x-1 transition-all duration-300 ease-out" />
                        </Link>
                    </div>
                </div>

                {/* artikel 2 */}
                <div className="md:w-1/3">
                    <div className="w-full h-[200px] bg-gray-50"></div>

                    <div className="mt-4">
                        <h4 className="text-sm font-semibold">
                            <Badge className={"px-2 py-1 rounded-sm mr-2"}>Kategori</Badge> 5 menit baca
                        </h4>

                        <h2 className="mt-2 text-lg font-bold">Panduan Belajar HTML untuk Pemula</h2>
                        <p className="mt-2 text-sm">Pelajari dasar-dasar HTML dengan mudah dan cepat</p>

                        <Link href={"/"} className="mt-6 w-max text-sm flex gap-2 items-center group">
                            Baca
                            <FaChevronRight className="size-3 group-hover:translate-x-1 transition-all duration-300 ease-out" />
                        </Link>
                    </div>
                </div>

                {/* artikel 3 */}
                <div className="md:w-1/3">
                    <div className="w-full h-[200px] bg-gray-50"></div>

                    <div className="mt-4">
                        <h4 className="text-sm font-semibold">
                            <Badge className={"px-2 py-1 rounded-sm mr-2"}>Kategori</Badge> 5 menit baca
                        </h4>

                        <h2 className="mt-2 text-lg font-bold">Panduan Belajar HTML untuk Pemula</h2>
                        <p className="mt-2 text-sm">Pelajari dasar-dasar HTML dengan mudah dan cepat</p>

                        <Link href={"/"} className="mt-6 w-max text-sm flex gap-2 items-center group">
                            Baca
                            <FaChevronRight className="size-3 group-hover:translate-x-1 transition-all duration-300 ease-out" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-16 flex justify-center">
                <Link href={""}>
                    <Button variant={"outline"} className="text-base px-4 lg:p-6">
                        Lihat Semua
                    </Button>
                </Link>
            </div>
        </div>
    );
}
