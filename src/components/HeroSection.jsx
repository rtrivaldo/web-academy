import Link from "next/link";
import ShimmerButton from "./magicui/shimmer-button";
import Marquee from "./magicui/marquee";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default async function HeroSection() {
    const marqueeData = await fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?key=AIzaSyCoUXFn6VXOkikrXzyXjl8tcRvluTJU_Hc&playlistId=PLYH1y5BwRZwEMp8OfYks106HmdCWm7uxx&part=snippet", { next: { revalidate: 86400 * 7 } });

    const data = await marqueeData.json();

    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center pt-20 md:pt-32">
            {/* headings */}
            <div className="text-center">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold max-w-screen-md lg:max-w-screen-lg mx-auto">Temukan Video Pembelajaran Web Programming Terbaik</h1>
                <p className="mt-6 max-w-screen-sm mx-auto text-sm md:text-base">Situs web ini mengumpulkan video-video YouTube pembelajaran web programming yang dikelompokkan berdasarkan kategori seperti HTML, CSS, JavaScript, React, dan Next.js.</p>
            </div>

            {/* button */}
            <Link href={"/"}>
                <ShimmerButton className="shadow-2xl mt-6">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 ">Mulai Sekarang</span>
                </ShimmerButton>
            </Link>

            <div className="relative mt-32 w-full">
                {/* slider to left */}
                <Marquee pauseOnHover className="[--duration:80s]">
                    {/* mapping card from web academy hero playlist */}
                    {data.items.map((data) => {
                        const thumbnail = data.snippet.thumbnails.maxres.url;
                        const videoId = data.snippet.resourceId.videoId;

                        return (
                            <Link href={`https://www.youtube.com/watch?v=${videoId}`} key={data.id} className="w-full rounded-md overflow-hidden">
                                <div className="w-[200px] h-[120px] md:w-[300px] md:h-[160px] relative">
                                    <div className="w-full h-full absolute inset-y-0 bg-black/40 hover:bg-black/15 dark:bg-black/50 dark:hover:bg-black/30 transition-all duration-300 ease-out">
                                        <div className="w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-300 ease-out">
                                            <FaPlay className="size-6 text-white" />
                                        </div>
                                    </div>
                                    <Image src={thumbnail} alt="" width={1280} height={720} />
                                </div>
                            </Link>
                        );
                    })}
                </Marquee>

                {/* slider to right */}
                <Marquee reverse pauseOnHover className="[--duration:80s]">
                    {/* mapping card from web academy hero playlist */}
                    {data.items.map((data) => {
                        const thumbnail = data.snippet.thumbnails.maxres.url;
                        const videoId = data.snippet.resourceId.videoId;

                        return (
                            <Link href={`https://www.youtube.com/watch?v=${videoId}`} key={data.id} className="w-full rounded-md overflow-hidden">
                                <div className="w-[200px] h-[120px] md:w-[300px] md:h-[160px] relative">
                                    <div className="w-full h-full absolute inset-y-0 bg-black/40 hover:bg-black/15 dark:bg-black/50 dark:hover:bg-black/30 transition-all duration-300 ease-out">
                                        <div className="w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-300 ease-out">
                                            <FaPlay className="size-6 text-white" />
                                        </div>
                                    </div>
                                    <Image src={thumbnail} alt="" width={1280} height={720} />
                                </div>
                            </Link>
                        );
                    })}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-slate-950"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-slate-950"></div>
            </div>
        </div>
    );
}
