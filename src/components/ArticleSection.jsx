import Link from "next/link";
import { Badge } from "./ui/badge";
import { FaChevronRight } from "react-icons/fa";
import { Button } from "./ui/button";
import Image from "next/image";
import ArticleCard from "./ArticleCard";

export default function ArticleSection() {
    return (
        <div className="mt-20 md:mt-40 max-w-screen-xl mx-auto">
            {/* headings */}
            <h4 className="font-semibold text-sm md:text-lg hidden md:block">Artikel</h4>
            <h1 className="mt-2 text-2xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">Sumber Daya Web Programming</h1>
            <p className="mt-4 md:mt-6 text-sm md:text-base text-center md:text-left">Temukan tips, trik, dan tutorial web programming terbaru</p>

            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20">
                {article.map((article) => (
                    <ArticleCard title={article.title} description={article.description} image={article.image} category={article.category} duration={article.duration} />
                ))}
            </div>

            <div className="mt-16 flex justify-center">
                <Link href={"/artikel"}>
                    <Button variant={"outline"} className="text-base px-4 lg:p-6">
                        Lihat Semua
                    </Button>
                </Link>
            </div>
        </div>
    );
}

const article = [
    { title: "10 Advanced JavaScript Tricks You Don’t Know", description: "Enhance your coding skills with these lesser-known JavaScript techniques.", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*PQ2O_-QPWPELuYctLu0o0Q.jpeg", category: "JavaScript", duration: 8 },
    { title: "Why and how you should rate-limit your API", description: "Protect yourself and your users.", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*72XkP8P-ARRI833bCYdC7g.png", category: "API", duration: 5 },
    { title: "CSS Position Sticky - How It Really Works!", description: "CSS position sticky has really good browser support, yet most developers aren’t using it.", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*vv_brCwJNVFsBHQEfYC7zQ.png", category: "CSS", duration: 5 },
];
