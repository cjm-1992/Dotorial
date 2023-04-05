import React from "react";
import "./login.css";
import DatDota from "../../imgs/logos/datdota.png";
import Dotabuff from "../../imgs/logos/dotabuff.png";
import Liquipedia from "../../imgs/logos/liquipedia.png";
import Opendota from "../../imgs/logos/opendota.png";
import Build from "../../imgs/about.jpg";
import Games from "../../imgs/games.jpg";
import Profile from "../../imgs/profile.jpg";
import Footer from "../../components/footer/footer.jsx";
import TopNavPub from "../../components/topnav/topnavpub.jsx";
{
  /*import UI from "../../imgs/UI.jpg";*/
}

function About() {
  return (
    <section>
    <TopNavPub/>
      <div class="relative isolate overflow-hidden bg-gray-900/30 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <h1 class="mb-4 text-4xl font-extrabold leading-none text-center tracking-tight text-white md:text-5xl lg:text-6xl">
          WHAT IS DOTORIAL?
        </h1>
        <p class="mb-8 mx-72 text-lg font-normal text-center text-gray-400  sm:px-16 lg:text-xl xl:px-48">
          Dotorial looks to offer its users a comprehensive portal to get the
          latest DOTA 2 tips, tricks and builds to enable you to improve your
          gameplay, and in turn increase your ranking along the way.
        </p>

        <div class="mx-auto px-4 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-20">
          <span class=" text-xl font-semibold uppercase text-gray-400">FEATURED IN</span>
          <div class="mt-8 flex flex-wrap items-center justify-center text-gray-500 sm:justify-between">
            <a>
              <img class="w-50 h-12" src={DatDota} />
            </a>
            <a>
              <img class="w-50 h-12" src={Dotabuff} />
            </a>
            <a>
              <img class="w-50 h-12" src={Liquipedia} />
            </a>
            <a>
              <img class="w-50 h-12" src={Opendota} />
            </a>
          </div>
        </div>
      </div>

      {/* SECTION 1*/}
      <div class="relative isolate overflow-hidden bg-gray-900/10 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div class="absolute inset-0 -z-10 overflow-hidden"></div>
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="lg:max-w-lg">
                <p class="text-base font-semibold leading-7 text-white">
                  Hero Builds
                </p>
                <h1 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  A Better Understanding
                </h1>
                <p class="mt-6 text-xl leading-8 text-gray-700">
                  The world of DOTA offers a wide combination of item builds
                  across 124 different heroes. With our website, we collate
                  those builds for you to ensure you stay at the cutting edge of
                  DOTA 2.
                </p>
              </div>
            </div>
          </div>
          <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={Build}
              alt=""
            />
          </div>
          <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  Our hero guides are collated from a range of professional
                  players, all of which are updated to highlight the very best
                  builds across professional series and PUB games. We ensure our
                  hero guides provide you with the correct information to allow
                  you to focus completely on your gameplay instead of worrying
                  which items and talents are the best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SECTION 2*/}
      <div class="relative isolate overflow-hidden bg-gray-900/30 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div class="absolute inset-0 -z-10 overflow-hidden"></div>
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div class="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="lg:max-w-lg">
                <p class="text-base font-semibold leading-7 text-white">
                  DPC Circuit
                </p>
                <h1 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Professional Scene at your Fingertips
                </h1>
                <p class="mt-6 text-xl leading-8 text-gray-700">
                  With the DOTA 2 Pro Circuit constantly in full swing, with all
                  roads leading to the prestigious "The International", we bring
                  you all the latest news regarding the DPC across the six
                  regions represented.
                </p>
              </div>
            </div>
          </div>
          <div class="-ml-8 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={Games}
              alt=""
            />
          </div>
          <div class="lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  Here you'll find VODs of previous games, results, and the
                  ability to look at information such as the pick/ban phase,
                  hero and item builds. With this information at the tip of your
                  fingers, you'll be able to tailor your own gameplay to that of
                  the professional scene, arming you with the knowledge
                  collected by the very best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SECTION 3*/}
      <div class="relative isolate overflow-hidden bg-gray-900/10 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div class="absolute inset-0 -z-10 overflow-hidden"></div>
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="lg:max-w-lg">
                <p class="text-base font-semibold leading-7 text-white">
                  Personal Profile
                </p>
                <h1 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Follow your journey
                </h1>
                <p class="mt-6 text-xl leading-8 text-gray-700">
                  Making a Dotorial account will give you access to our tailor
                  made UI, allowing you to follow your DOTA 2 journey as you
                  gain MMR and climb through the rankings. Harnessing the power
                  of statistics, you'll have a greater understanding of your
                  strengths and weaknesses.
                </p>
              </div>
            </div>
          </div>
          <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={Profile}
              alt=""
            />
          </div>
          <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  Making use of the DOTA 2 API, you will be able to discect your
                  every step. From detailed game information through to an MMR
                  tracker, Dotorial aims to ensure you are able to understand
                  your strengths and weaknesses, allowing you to improve in the
                  quickest way possible. Furthermore, you'll be able to track
                  your win/loss ratio, and your success on any given hero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
    
  );
}

export default About;
