import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function Footer() {
    return (
        <div className="mt-32 mb-10 px-6 md:px-10 border-t dark:border-neutral-400/20">
            <div className="mt-10 max-w-screen-xl mx-auto flex justify-between items-center">
                {/* credits */}
                <p className="text-sm text-neutral-500 dark:text-neutral-400 font-semibold">
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

                <div className="mt-3 flex gap-4 text-neutral-500 dark:text-neutral-400 text-xl">
                    {/* github link */}
                    <Link href={"https://github.com/rtrivaldo"}>
                        <FaGithub />
                    </Link>

                    {/* linkedin link */}
                    <Link href={"https://www.linkedin.com/in/rivaldo-tandoko/"}>
                        <FaLinkedin />
                    </Link>

                    {/* gmail link */}
                    <Link href={"mailto:rtrivaldo05@gmail.com"}>
                        <MdOutlineAlternateEmail />
                    </Link>
                </div>
            </div>
        </div>
    );
}
