import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function Footer() {
    return (
        <div className="mt-32 mb-10 max-w-screen-xl mx-auto">
            <p className="text-sm text-neutral-400 font-semibold">
                Built by{" "}
                <Link href={"https://www.linkedin.com/in/rivaldo-tandoko/"} className="underline underline-offset-4">
                    Rivaldo Tandoko
                </Link>
                . The source code is available on{" "}
                <Link href={"https://github.com/rtrivaldo/web-academy"} className="underline underline-offset-4">
                    Github
                </Link>
                .
            </p>

            <div className="mt-3 flex gap-3 text-neutral-400 text-xl">
                <Link href={"https://github.com/rtrivaldo"}>
                    <FaGithub />
                </Link>
                <Link href={"https://www.linkedin.com/in/rivaldo-tandoko/"}>
                    <FaLinkedin />
                </Link>
                <Link href={"mailto:rtrivaldo05@gmail.com"}>
                    <MdOutlineAlternateEmail />
                </Link>
            </div>
        </div>
    );
}
