import Head from 'next/head';
import paintings from '../data/paintings.json';
import GalleryImage from '../components/GalleryImage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Teddy Wilson</title>
        <meta name="description" content="Artist based in Brooklyn, New York" />
      </Head>
      <main className="px-8 md:px-32 py-8 md:py-12 text-left">
        <header className="mb-8 md:mb-16">
          <h1 className="text-2xl font-semibold mb-4">Teddy Wilson</h1>
          <p className="text-sm text-gray-900">Artist based in Brooklyn, New York</p>
          <p className="text-sm">
            <a href="mailto:hello@teddywilson.me" className="underline">
              hello@teddywilson.me
            </a>
          </p>
        </header>

        <section className="flex flex-col items-start">
          {paintings.map((painting) => (
            <GalleryImage key={painting.filename} painting={painting} />
          ))}
        </section>

        <div className="mb-12 mt-2" style={{ width: '100%', maxWidth: '128px' }}>
          <img src={`/drawings/laying-guy.jpg`} />
        </div>
      </main>
    </>
  );
}
