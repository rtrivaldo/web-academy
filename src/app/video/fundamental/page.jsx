import ParticlesBackground from "@/components/ParticlesBackground";
import YoutubeVideoList from "@/components/YoutubeVideoList";

export default async function Fundamental() {
    const API_KEY = process.env.API_KEY;

    /* playlistId dari Belajar HTML Dasar WPU */
    const playlistIdHtml = "PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F";

    /* fetching data dari Youtube API */
    const htmlResponse = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=${playlistIdHtml}&part=snippet&maxResults=50`, { next: { revalidate: 86400 * 7 } });
    const htmlData = await htmlResponse.json();

    /* playlistId dari Belajar CSS Dasar WPU */
    const playlistIdCss = "PLFIM0718LjIUBrbm6Gdh6k7ZUvPIAZm7p";

    /* fetching data dari Youtube API */
    const cssResponse = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=${playlistIdCss}&part=snippet&maxResults=50`, { next: { revalidate: 86400 * 7 } });
    const cssData = await cssResponse.json();

    /* playlistId dari Belajar JavaScript Dasar WPU */
    const playlistIdJs = "PLFIM0718LjIWXagluzROrA-iBY9eeUt4w";

    /* fetching data dari Youtube API */
    const jsResponse = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=${playlistIdJs}&part=snippet&maxResults=50`, { next: { revalidate: 86400 * 7 } });
    const jsData = await jsResponse.json();

    return (
        <main className="px-6 md:px-10 h-max relative">
            <div className="mt-20 md:mt-32 max-w-screen-xl mx-auto">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Fundamentals</h1>

                <YoutubeVideoList title="HTML Dasar" data={htmlData} className="mt-4 md:mt-6" />

                <YoutubeVideoList title="CSS Dasar" data={cssData} className="mt-10" />

                <YoutubeVideoList title="JavaScript Dasar" data={jsData} className="mt-10" />
            </div>

            <ParticlesBackground />
        </main>
    );
}
