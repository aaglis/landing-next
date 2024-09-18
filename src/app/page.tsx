import Image from "next/image";
import Logo from "./components/logo";
import MainImage from "../../public/main.svg";
import { User, MapPin, Server } from 'lucide-react'
import "./globals.css"

export default function Home() {
  return (
    <div className="flex flex-col max-w-8xl my-0 mx-auto">
      <header className="py-12 flex justify-between items-center">
        <Logo />
        <nav className="flex gap-10 text-gray-700">
          <a href="">About</a>
          <a href="">Features</a>
          <a href="">Pricing</a>
          <a href="">Testmonials</a>
          <a href="">Help</a>
        </nav>
        <div className="flex items-center gap-8 font-medium">
          <a href=""><button>Sign In</button></a>
          <a href=""><button className="w-36 h-11 rounded-3xl border border-red-500 text-red-500">Sign Up</button></a>
        </div>
      </header>
      <main className="pt-16">
        <section className="flex items-center justify-center">
          <div className="flex flex-col gap-10 justify-start max-w-2xl">
            <h1 className="text-6xl leading-snug text-slate-900 font-bold">Want anything to be easy with <span className="font-black">LaslesVPN</span></h1>
            <p className="text-lg leading-loose text-slate-600">Provide a network for all your needs with easse and fun using <span className="font-bold">LaslesVPN</span> discover interesting features from us</p>
            <button className="w-60 h-14 rounded-xl font-bold text-white bg-red-500">Get Started</button>
          </div>
          <div>
            <Image src={MainImage} alt="" className="max-w-4xl"/>
          </div>
        </section>
        <section className="flex max-w-6xl pt-32 m-auto  justify-center gap-80">
          <div className="flex justfy-center gap-6">
            <User className="box-content w-8 h-8 p-4 rounded-full bg-red-100 text-red-600"></User>
            <div>
              <p className="font-bold text-xl text-slate-900">90+</p>
              <p className="text-zinc-600">Users</p>
            </div>
          </div>
          <div className="flex justfy-center gap-6">
            <MapPin className="box-content w-8 h-8 p-4 rounded-full bg-red-100 text-red-600"></MapPin>
            <div>
              <p className="font-bold text-xl text-slate-900">30+</p>
              <p className="text-zinc-600">Locations</p>
            </div>
          </div>
          <div className="flex justfy-center gap-6">
            <Server className="box-content w-8 h-8 p-4 rounded-full bg-red-100 text-red-600"></Server>
            <div>
              <p className="font-bold text-xl text-slate-900">50+</p>
              <p className="text-zinc-600">Servers</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
