import type { Metadata } from 'next';
import Image, { StaticImageData } from 'next/image';
import ImageEsai1 from '../../../public/images/essay01.jpg';
import ImageEsai2 from '../../../public/images/essay02.jpeg';
import ImageEsai3 from '../../../public/images/essay03.jpg';

export const metadata: Metadata = {
  title: "Esai",
  description: "Halaman Esai.",
  openGraph: {
    images: "https://example.com/default-image.jpg",
    url: "https://example.com",
  },
};

type EssayItemProps = {
  imageSrc: StaticImageData;
  title: string;
  excerpt: string;
  url: string;
};

function EssayItem({ imageSrc, title, excerpt, url }: EssayItemProps) {
  return (
    <li className="bg-gray-100 border border-zinc-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="w-full h-auto overflow-hidden rounded-t-xl">
          <Image src={imageSrc} alt={`Gambar untuk ${title}`} className="object-cover w-full h-48" />
        </div>
        <div className="px-6 py-3">
          <div className="font-bold text-lg mb-2">{title}</div>
          <p className="text-gray-700 text-base">{excerpt}</p>
          <div className="mt-4 flex justify-end">
            <span className="inline-block text-blue-600 text-sm font-medium hover:underline">
              Baca Selengkapnya
            </span>
          </div> 
        </div>
      </a>
    </li>
  );
}

export default function Essays({metadata}: any) {
  return (
    <div className="mt-6 px-8 mb-16">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800">Esai</h1>
        <p className="text-base mt-6 text-zinc-600">
          Berikut adalah beberapa daftar artikel esai yang telah saya tulis.
        </p>
      </header>
      <div className="mt-6">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-8">
        <EssayItem
            imageSrc={ImageEsai1}
            title="Etika dalam Kecerdasan Buatan"
            excerpt="Seiring berkembangnya AI, muncul pula pertanyaan tentang batasan etika. Apakah mesin boleh membuat keputusan untuk manusia?"
            url="https://example.com"
          />
          <EssayItem
            imageSrc={ImageEsai2}
            title="Keamanan Siber: Ancaman Nyata di Era Digital"
            excerpt="Dengan semakin banyak data pribadi tersimpan online, keamanan siber bukan lagi pilihan, tapi keharusan mutlak."
            url="https://example.com"
          />
          <EssayItem
            imageSrc={ImageEsai3}
            title="Low-Code dan No-Code: Masa Depan Pengembangan Aplikasi?"
            excerpt="Platform low-code/no-code memungkinkan siapa saja membuat aplikasi tanpa latar belakang coding. Tapi, apakah ini menggantikan developer?"
            url="https://example.com"
          />
        </ul>
      </div>
    </div>
  );
}
