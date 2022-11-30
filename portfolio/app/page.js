import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="container mx-auto grid h-screen place-items-center overscroll-none">
      <div className="grid h-screen place-items-center">
        <h1 className="text-5xl from-zinc-700	 font-bold text-center lg:text-9xl m-0">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Welcome
          </span>
          <br />
          <span className="text-5xl lg:text-7xl">
            to project.SITE
          </span>
        </h1>
        <p className="text-center">scroll down to see projects</p>
      </div>
    </div>
  );
};

export default Home;
