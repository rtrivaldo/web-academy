import Link from "next/link";
import ParticlesBackground from "./ParticlesBackground";
import ShimmerButton from "./magicui/shimmer-button";
import Marquee from "./magicui/marquee";

export default function HeroSection() {
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center pt-20 md:pt-32">
            <div className="text-center">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold max-w-screen-md lg:max-w-screen-lg mx-auto">Temukan Video Pembelajaran Web Programming Terbaik</h1>
                <p className="mt-6 max-w-screen-sm mx-auto text-sm md:text-base">Situs web ini mengumpulkan video-video YouTube pembelajaran web programming yang dikelompokkan berdasarkan kategori seperti HTML, CSS, JavaScript, React, dan Next.js.</p>
            </div>

            <Link href={"/"}>
                <ShimmerButton className="shadow-2xl mt-6">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 ">Mulai Sekarang</span>
                </ShimmerButton>
            </Link>

            <div className="relative mt-32 w-full">
                <Marquee pauseOnHover className="[--duration:20s]">
                    <div className="w-full rounded-md overflow-hidden">
                        <div className="w-[200px] h-[120px] md:w-[300px] md:h-[160px] bg-white"></div>
                    </div>
                    <div className="w-full rounded-md overflow-hidden">
                        <div className="w-[200px] h-[120px] md:w-[300px] md:h-[160px] bg-blue-400"></div>
                    </div>
                </Marquee>

                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    <div className="w-full rounded-md overflow-hidden">
                        <div className="w-[200px] h-[120px] md:w-[300px] md:h-[160px] bg-white"></div>
                    </div>
                    <div className="w-full rounded-md overflow-hidden">
                        <div className="w-[200px] h-[120px] md:w-[300px] md:h-[160px] bg-blue-400"></div>
                    </div>
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-slate-950"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-slate-950"></div>
            </div>

            <ParticlesBackground />
        </div>
    );
}
