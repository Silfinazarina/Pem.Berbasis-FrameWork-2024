import { Metadata } from "next";
import Image from "next/image";
import ProfileImage from "../../public/images/profile.jpg";

export const metadata: Metadata = {
  title: "Tentang Saya",
  description: "Halaman tentang saya.",
  openGraph: {
    images: "https://example.com/default-image.jpg",
    url: "https://example.com",
  },
};

export default function Home({metadata}: any) {
  return (
    <div className="mt-16 px-6 md:px-8 max-w-5xl mx-auto text-zinc-800">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-2">Tentang Saya</h1>
        <p className="text-base text-zinc-500">
          Perkenalkan, saya Silfi Nazarina — seorang mahasiswa yang passionate
          di bidang pengembangan web modern.
        </p>
      </header>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-sm">
          <Image
            src={ProfileImage}
            alt="Foto Silfi"
            fill
            className="object-cover items-star justify-center"
          />
        </div>

        <div className="text-base space-y-4 max-w-xl">
          <p>
            Saya merupakan mahasiswa{" "}
            <strong>Teknik Informatika D4 di Polinema</strong> yang tertarik
            pada dunia
            <span className="text-grey-600 font-medium">
              {" "}
              <strong>frontend development</strong>
            </span>
            , khususnya menggunakan framework modern seperti React dan Next.js.
          </p>

          <p>
            Selain itu, saya juga memiliki ketertarikan pada{" "}
            <span className="text-grey-600">
              <strong>UI/UX design</strong>
            </span>{" "}
            karena percaya bahwa teknologi seharusnya tidak hanya berfungsi,
            tetapi juga menyenangkan untuk digunakan.
          </p>

          <div className="pt-2 border-t border-zinc-200">
            <p className="text-sm text-zinc-500">Temui saya di:</p>
            <div className="flex gap-4 mt-2 mb-5">
              <a
                href="https://example.com"
                target="_blank"
                className="text-blue-600 hover:underline text-sm"
              >
                GitHub
              </a>
              <a
                href="https://example.com"
                target="_blank"
                className="text-blue-600 hover:underline text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
