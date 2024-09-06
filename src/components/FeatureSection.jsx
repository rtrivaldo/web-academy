import { FaCube } from "react-icons/fa";

export default function FeatureSection() {
    return (
        <div className="max-w-screen-xl mx-auto mt-20 mb-20 relative overflow-hidden">
            <div className="flex gap-20">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold w-1/2">Cari dan tonton video pembelajaran web programming sekarang</h1>
                <p className="w-1/2 text-sm md:text-base">Situs web ini memungkinkan pengguna untuk dengan mudah mencari video-video pembelajaran web programming yang mereka inginkan. Pengguna dapat memilih kategori yang diinginkan dan menemukan video-video yang relevan dengan cepat dan efisien.</p>
            </div>

            <div className="mt-32 flex justify-between gap-32">
                <div className="">
                    <FaCube className="size-6" />
                    <h4 className="mt-6 text-xl font-semibold">Temukan video Berdasarkan Kategori</h4>
                    <p className="mt-2 text-sm">Pilih kategori yang Anda minati dan temukan video-video yang sesuai dengan kebutuhan Anda.</p>

                    <p className="mt-6 text-sm">Cari</p>
                </div>
                <div className="">
                    <FaCube className="size-6" />
                    <h4 className="mt-6 text-xl font-semibold">Temukan video Berdasarkan Kategori</h4>
                    <p className="mt-2 text-sm">Pilih kategori yang Anda minati dan temukan video-video yang sesuai dengan kebutuhan Anda.</p>

                    <p className="mt-6 text-sm">Cari</p>
                </div>
                <div className="">
                    <FaCube className="size-6" />
                    <h4 className="mt-6 text-xl font-semibold">Temukan video Berdasarkan Kategori</h4>
                    <p className="mt-2 text-sm">Pilih kategori yang Anda minati dan temukan video-video yang sesuai dengan kebutuhan Anda.</p>

                    <p className="mt-6 text-sm">Cari</p>
                </div>
            </div>
        </div>
    );
}
