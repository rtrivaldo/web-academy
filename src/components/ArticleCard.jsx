import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";

import { FaChevronRight } from "react-icons/fa";

export default function ArticleCard({ title, description, image, category, duration, truncate }) {
    return (
        <div className="">
            <div className="w-full h-[200px] bg-gray-50 rounded overflow-hidden">
                <Image src={image} alt="" width={1280} height={720} className="h-full object-cover" />
            </div>

            <div className="mt-4">
                <h4 className="text-sm font-semibold">
                    <Badge className={"px-2 py-1 rounded-sm mr-2"}>{category}</Badge> {duration} menit baca
                </h4>

                <h2 className={`mt-2 text-lg font-bold ${truncate ? "md:truncate" : ""}`}>{title}</h2>
                <p className={`mt-2 text-sm md:truncate ${truncate ? "md:truncate" : ""}`}>{description}</p>

                <Link href={"https://medium.com/@bjprajapati381/10-advanced-javascript-tricks-you-dont-know-f1929e40703d"} target="_blank" className="mt-6 w-max text-sm flex gap-2 items-center group">
                    Baca
                    <FaChevronRight className="size-3 group-hover:translate-x-1 transition-all duration-300 ease-out" />
                </Link>
            </div>
        </div>
    );
}
