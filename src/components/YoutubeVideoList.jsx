import Image from "next/image";
import Link from "next/link";

export default function YoutubeVideoList({ title, data, className = "" }) {
    return (
        <>
            <h4 className={`${className} text-xl md:text-2xl font-semibold`}>{title}</h4>
            <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
                {data.items.map((data) => {
                    const videoId = data.snippet.resourceId.videoId;
                    const thumbnail = data.snippet.thumbnails.maxres.url;
                    const title = data.snippet.title;
                    const channelName = data.snippet.videoOwnerChannelTitle;
                    return (
                        <Link href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank">
                            <div className="bg-white rounded-md overflow-hidden">
                                <Image src={thumbnail} alt="" width={1280} height={720} className="w-full h-full object-cover" />
                            </div>

                            <h4 className="mt-4 font-semibold md:truncate">{title}</h4>
                            <p className="mt-2 text-sm text-neutral-400">{channelName}</p>
                        </Link>
                    );
                })}
            </div>
        </>
    );
}
