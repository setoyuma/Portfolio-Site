import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { RxDiscordLogo } from "react-icons/rx";
import Image from "next/image";
import Seto from "../images/seto.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-gradient-to-tl from-blue-400 to-orange-400 via-emerald-200 animate-gradient-x overflow-hidden ">
        <Head>
          <title>Seto Yuma</title>
        </Head>

        <main className=" md:px-20 lg:px-40 dark:bg-gradient-to-r from-red-900 to-blue-900 via-purple-800 animate-gradient-x w-screen ">
          <section>
            <nav className=" py-10 mb-12 flex justify-between">
              <h1 className=" text-xl dark:text-white">Setoichi</h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=" cursor-pointer text-xl" />
                </li>
                <li>
                  <a
                    className=" animate-pulse bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 "
                    href="https://github.com/setoyuma" target={"_blank"}
                  >
                    Github
                  </a>
                </li>
              </ul>
            </nav>
            <div className="text-center p-10 ">
              <h2 className="  text-5xl py-2   text-white md:text-6xl">Seto Yuma</h2>
              <h3 className="text-2xl py-2 md:text-3xl dark:">Web Developer + Game Programmer</h3>
              <p className="text-md py-5 leading-8 md:text-xl max-w-xl mx-auto">
                Indie game developer working with pygame and unity taking a step
                into web development.
              </p>
            </div>

            <div className="relative bg-gradient-to-b from-teal-500 ">
              {/* <Image className="" src={Seto} /> */}
            </div>
          </section>

          <section>
            <div>
              <h3 className=" text-center text-3xl py-12 text-black">
                Skills I Have
              </h3>
              <p className="text-md leading-8 text-inherit text-center p-12">
                I have an intermediate to advanced understanding of how to build
                programs using python, javascript, react, tailwind, and nextjs. In
                python I have worked with libraries such as pandas, pygame, flask,
                and django. I am currently using c# in my unity development.
              </p>
            </div>
            <div className="lg:flex gap-10 p-10 text-center">
              
              <div className=" hover:shadow-2xl transition duration-300 flex-col justify-center text-center shadow-xl p-10  rounded-xl my-10">
                <Image src={design} width={100} height={100} />
                <h3 className=" text-lg font-medium">Designs</h3>
                <p className="py-2">Creating beutiful modern designs.</p>
                <h4 className=" py-4 text-slate-900">Design Tools I use</h4>
                <p className=" text-white py-1">Adobe Express</p>
                <p className=" text-white py-1">Aseprite</p>
                <p className=" text-white py-1">Turtle (python)</p>
                <p className=" text-white py-1">Tiled</p>
              </div>

              <div className=" hover:shadow-2xl transition duration-300 flex-col justify-center text-center shadow-xl p-10  rounded-xl my-10 ">
                <Image src={code} width={100} height={100} />
                <h3 className=" text-lg font-medium">Code</h3>
                <p className="py-2">Learning By Doing.</p>
                <h4 className=" py-4 text-slate-900">Development Tools I use</h4>
                <p className=" text-white py-1">React</p>
                <p className=" text-white py-1">Next js</p>
                <p className=" text-white py-1">Django</p>
                <p className=" text-white py-1">Tailwind</p>
              </div>
            </div>
          </section>
        <h4 className=" text-white text-center ">Contact Me</h4>
        <div className=" w-auto flex-col justify-center shadow-xl rounded py-10 hover:shadow-2xl transition duration-300 ">
          <div className="text-5xl flex justify-center gap-16 py-3 text-black dark:text-white">
            <a href="https://discord.gg/HeJ4dw5Xsy" target={"_blank"}>
              <RxDiscordLogo className="animate-bounce"/>
            </a>
          </div>
        </div>
        </main>
      </div>
    </div>
  );
}
