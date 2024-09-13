import Logo from "./components/logo";
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
      <main>
        <div className="text-wrapper">
          <h1>Want anything to be easy with <span>LaslesVPN</span></h1>
          <p>Provide a network for all your needs with easse and fun using <span>LaslesVPN</span></p>
          <button>Get Started</button>
        </div>
      </main>
    </div>
  );
}
