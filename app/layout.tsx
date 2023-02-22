import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import "../styles/style.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Image
          src="/logo.png"
          width={40}
          height={40}
          className="mx-auto"
          alt={"logo"}
        />
        <Link href ="/">
        <h1 className="text-3xl bg text-white font-bold p-2">Kii'rb Blogger</h1>
        </Link>
        <section className="section">
          <p className="marquee text-styling bg-gray-700 rounded">💻 Selamat datang di blog saya ✌</p>
        </section>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <h3>Designed by <span className="text-indigo-900">Rizki Rb</span></h3>
      </div>
    </footer>
  );

  return (
    <html>
      <head />
      <body>
        <div className="mx-auto  max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
