import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { FaChevronRight } from "react-icons/fa";

export default async function RecommendedVideoSection() {
    const API_KEY = process.env.API_KEY;
    const videoId = "T1TR-RGf2Pw";
    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${API_KEY}&id=${videoId}`);

    const data = await response.json();

    return (
        <div className="mt-20 md:mt-40 max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
                <div className="md:w-1/2">
                    <div className="rounded-md overflow-hidden relative">
                        <Image src={data.items[0].snippet.thumbnails.maxres.url} alt={""} width={1280} height={720} />
                    </div>
                </div>

                <div className="md:w-1/2">
                    <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold">Nikmati Pengalaman Belajar Laravel 11</h1>
                    <p className="mt-6 text-sm lg:text-base">Raih kesempatan untuk meningkatkan keterampilan coding Anda dengan Laravel 11 melalui koleksi video pembelajaran terlengkap dan terstruktur. Baik Anda seorang pemula yang ingin memahami dasar-dasar Laravel maupun developer berpengalaman yang ingin memperdalam pengetahuan.</p>

                    <Link href={"https://www.youtube.com/playlist?list=PLFIM0718LjIW1Xb7cVj7LdAr32ATDQMdr"} className="block mt-10">
                        <Button variant={"outline"} className="rounded-sm flex items-center gap-2 lg:text-base px-4 lg:p-6 w-full md:w-auto group">
                            Mulai Belajar <FaChevronRight className="size-3 group-hover:translate-x-1 transition-all duration-300 ease-out" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
