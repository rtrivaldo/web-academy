import Link from "next/link";

import { FaChevronRight, FaRegFileAlt, FaYoutube } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";

export default function FeatureSection() {
    return (
        <div className="mt-20 md:mt-32 max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 md:gap-20">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center md:text-left md:w-1/2">Cari dan tonton video pembelajaran web programming sekarang</h1>
                <p className="text-sm md:text-base text-center md:text-left md:w-1/2">Situs web ini memungkinkan pengguna untuk dengan mudah mencari video-video pembelajaran web programming yang mereka inginkan. Pengguna dapat memilih kategori yang diinginkan dan menemukan video-video yang relevan dengan cepat dan efisien.</p>
            </div>

            <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-20 lg:gap-32">
                <div className="">
                    <FiLayers className="size-6" />
                    <h4 className="mt-6 text-xl font-semibold">Temukan Video Berdasarkan Kategori</h4>
                    <p className="mt-2 text-sm md:min-h-14">Pilih kategori yang Anda minati dan temukan video-video yang sesuai dengan kebutuhan Anda.</p>

                    <Link href={"/"} className="mt-6 w-max text-sm flex gap-2 items-center group">
                        Cari
                        <FaChevronRight className="size-3 group-hover:translate-x-1 transition-all duration-300 ease-out" />
                    </Link>
                </div>

                <div className="">
                    <FaYoutube className="size-6" />
                    <h4 className="mt-6 text-xl font-semibold">Video Terbaru</h4>
                    <p className="mt-2 text-sm md:min-h-14">Tetap up-to-date dengan konten video terbaru yang kami tambahkan setiap hari.</p>

                    <Link href={"/"} className="mt-6 w-max text-sm flex gap-2 items-center group">
                        Tonton
                        <FaChevronRight className="size-3 group-hover:translate-x-1 transition-all duration-300 ease-out" />
                    </Link>
                </div>

                <div className="">
                    <FaRegFileAlt className="size-6" />
                    <h4 className="mt-6 text-xl font-semibold">Baca Artikel Terbaru</h4>
                    <p className="mt-2 text-sm md:min-h-14">Temukan tips & trik dari para ahli untuk mendukung perjalanan belajarmu dengan membaca artikel-artikel terbaru tentang pengembangan web.</p>

                    <Link href={"/"} className="mt-6 w-max text-sm flex gap-2 items-center group">
                        Baca
                        <FaChevronRight className="size-3 group-hover:translate-x-1 transition-all duration-300 ease-out" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
