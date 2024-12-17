import Image from "next/image";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Tools from "./components/Tools";
import {
  AiPersonaObject,
  ImageAiOptions,
  botOptions,
  codeOptions,
  voiceOptions,
  writingOptions,
} from "@/utils/constants/objects";
import BoxComponent from "./components/BoxComponent";
import StickyComponent from "./components/StickyComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div
        className="w-full bg-[url('/background-image-earth-landing.png')] bg-cover bg-center bg-no-repeat relative overflow-hidden"
        data-aos="fade-down"
      >
        <Hero />
        <div className="bg-gradient-to-b from-transparent to-[#16161b] inset-x-0 h-40 absolute bottom-0 w-full z-10" />
      </div>
      <section className="max-w-[1400px] w-full mx-auto p-2.5 sm:p-4">
        <div id="ai-search" className="mt-20">
          <div className="w-full flex sm:items-center flex-col">
            <div className="absolute h-[900px] sm:w-[150px] bg-orange-700 left-[-250px] blur-[250px] rounded" />
            <div>
              <Image
                src="/slash.png"
                alt="Slashes"
                height={300}
                width={600}
                draggable={false}
                className="md:w-[40%] max-w-[300px] md:max-w-none object-cover h-[70px] absolute left-0 -translate-y-1 select-none"
                data-aos="slide-right"
              />
              <h1
                className="relative z-10 sm:text-center uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text"
                data-aos="zoom-in"
              >
                Ai search engine
              </h1>
              <Image
                src="/slash.png"
                alt="Slashes"
                height={300}
                width={600}
                draggable={false}
                className="md:w-[40%] max-w-[300px] md:max-w-none object-cover h-[70px] absolute right-0 -translate-y-14 hidden md:block select-none"
                data-aos="slide-left"
              />
            </div>
            <p
              className="text-sm text-gray-300 text-left sm:text-center max-w-3xl mt-6 leading-relaxed"
              data-aos="fade-up"
            >
              Unleash the power of AI with our intelligent search engine.
              Experience precise, personalized, and faster search results,
              revolutionizing the way you browse.
            </p>
          </div>
          <div className="w-full mt-5 sm:mt-10" data-aos="zoom-in-up">
            <Image
              src="/landing/ai-search.gif"
              alt="Search Ai"
              width={1000}
              height={600}
              className="rounded-lg sm:rounded-3xl mx-auto shadow-2xl shadow-[#313030]"
            />
          </div>
        </div>
        <div id="ai-chat" className="mt-28" data-aos="fade-up">
          <div className="absolute h-[900px] w-[70px] sm:w-[150px] bg-[#2463C1] right-[-250px] blur-[250px] rounded" />
          <div
            className="w-full flex items-center gap-3"
            data-aos="slide-right"
          >
            <Image
              src="/slash.png"
              alt="Slashes"
              height={300}
              width={600}
              draggable={false}
              className="w-[300px] object-cover h-[70px] absolute left-0 translate-y-2"
            />
            <h1 className="relative z-10 uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text">
              AI Chatbots
            </h1>
            <div className="h-[3px] max-w-4xl translate-y-1.5 bg-gradient-to-r from-gray-600 via-gray-800/50 to-transparent flex-1" />
          </div>
		  <div 
						className="flex flex-col-reverse xl:flex-row mb-5 gap-5 mt-10"
						data-aos="fade-up"
					>
						<div 
							className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-5 mt-4 xl:mt-0"
							data-aos="zoom-in-right"
						>
							{botOptions.slice(0, 2).map((option, index) => (
								<BoxComponent
									key={index}
									option={option}
									index={index}
									isFullWidth={true}
									data-aos="flip-left"
								/>
							))}
						</div>
						<div 
							className="w-full h-72 relative"
							data-aos="zoom-in-left"
						>
							<Image
								src="/gifs/process.gif"
								alt="process-image"
								fill
								sizes=""
								className="object-cover max-w-"
							/>
						</div>
					</div>
          <div data-aos="zoom-in-right" className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {botOptions.slice(2).map((option, index) => (
              <BoxComponent option={option} index={index} isFullWidth={true} />
            ))}
          </div>
          <div className="flex sm:justify-center mt-5">
            <button className="px-7 py-3.5 ring-1 ring-gray-200 hover:ring-transparent transition duration-300 hover:bg-primary-red rounded-xl">
              Explore AI ChatBots
            </button>
          </div>
        </div>
		<div id="ai-images" className="mt-12 sm:mt-32" data-aos="fade-up">
  <div className="absolute h-[900px] w-[70px] sm:w-[150px] bg-[#369933] left-[-250px] blur-[250px] rounded animate-pulse" />
  <div className="flex flex-col lg:flex-row gap-5 sm:gap-10" data-aos="slide-right">
    <div className="w-full flex lg:hidden items-center gap-3">
      <h1
        className="uppercase text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text"
        data-aos="zoom-in"
      >
        Ai images
      </h1>
      <div
        className="h-[3px] max-w-xl bg-gradient-to-r from-gray-500 via-gray-700/50 to-transparent flex-1"
        data-aos="fade-right"
      />
    </div>
    <div className="relative w-full" data-aos="zoom-in">
      <Image
        src="/gifs/man-visualization.gif"
        alt="visualization"
        width={900}
        height={600}
        className="rounded-lg sm:rounded-3xl h-full w-full shadow-2xl shadow-[#2c2c2c] object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
    <div className="w-full">
      <div className="w-full hidden lg:flex items-center gap-3" data-aos="zoom-in">
        <h1 className="uppercase text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
          Ai images
        </h1>
        <div className="h-[3px] max-w-xl bg-gradient-to-r from-gray-500 via-gray-700/50 to-transparent flex-1" />
      </div>
      <div className="w-full" data-aos="fade-up">
        <div
          className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-rows-1 xl:grid-cols-2 gap-5 mt-5 sm:mt-10"
          data-aos="zoom-in-right"
        >
          {ImageAiOptions.slice(0, 2).map((option, index) => (
            <BoxComponent option={option} index={index} isFullWidth={true} />
          ))}
        </div>
        <div className="mt-5" data-aos="fade-left">
          {ImageAiOptions.slice(2).map((option, index) => (
            <BoxComponent option={option} index={index} isFullWidth={true} />
          ))}
        </div>
        <div className="w-full mt-10" data-aos="fade-up">
          <button className="text-sm font-semibold ring-1 ring-gray-200 hover:ring-transparent transition duration-300 hover:bg-primary-red px-6 py-3.5 rounded-lg hover:scale-105">
            Explore AI Image tools
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="ai-writing" className="mt-28" data-aos="fade-up">
  <div className="absolute h-[900px] w-[70px] sm:w-[150px] bg-[#27ACB2] right-[-250px] blur-[250px] rounded animate-pulse" />
  <div className="w-full flex items-center gap-3" data-aos="fade-right">
    <Image
      src="/slash.png"
      alt="Slashes"
      height={300}
      width={600}
      draggable={false}
      className="w-[300px] object-cover h-[70px] absolute left-0 translate-y-2"
    />
    <h1 className="relative z-10 uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text">
      AI Writing
    </h1>
    <div className="h-[3px] max-w-4xl translate-y-1.5 bg-gradient-to-r from-gray-600 via-gray-800/50 to-transparent flex-1" />
  </div>
  <div className="flex flex-col-reverse lg:flex-row gap-5 mt-10">
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5" data-aos="zoom-in-right">
      {writingOptions.slice(0, 2).map((option, index) => (
        <BoxComponent option={option} index={index} isFullWidth={true} />
      ))}
    </div>
    <div className="w-full relative sm:!max-h-[300px]" data-aos="zoom-in-left">
      <div className="bg-gradient-to-tl from-primary-red via-primary-yellow/40 to-transparent p-[3px] w-full rounded-3xl">
        <div className="bg-black w-full h-full rounded-3xl">
          <Image
            src="/landing/ai-writing.gif"
            alt="Writing Ai"
            width={900}
            height={600}
            className="rounded-3xl w-full shadow-2xl shadow-[#2c2c2c] sm:!max-h-[300px] transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-5" data-aos="fade-up">
    {writingOptions.slice(2).map((option, index) => (
      <BoxComponent option={option} index={index} isFullWidth={true} />
    ))}
  </div>
  <div className="w-full flex sm:justify-center mt-10" data-aos="zoom-in">
    <button className="text-sm font-semibold ring-1 ring-gray-200 hover:ring-transparent transition duration-300 hover:bg-primary-red px-6 py-3.5 rounded-lg hover:scale-105">
      Explore AI Writing Tools
    </button>
  </div>
</div>

<div id="ai-voice" className="mt-14 sm:mt-28" data-aos="fade-up">
  <div
    className="absolute h-[400px] w-[125px] sm:w-[250px] bg-blue-700 left-[-250px] blur-[250px] rounded"
    data-aos="zoom-in"
    data-aos-duration="1500"
  />
  <div
    className="w-full flex sm:items-center flex-col"
    data-aos="fade-down"
    data-aos-duration="1200"
  >
    <div>
      <Image
        src="/slash.png"
        alt="Slashes"
        height={300}
        width={600}
        draggable={false}
        className="md:w-[40%] max-w-[300px] md:max-w-none object-cover h-[70px] absolute left-0 -translate-y-1 select-none"
        data-aos="fade-right"
        data-aos-duration="1000"
      />
      <h1
        className="relative z-10 sm:text-center uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        AI Voice
      </h1>
      <Image
        src="/slash.png"
        alt="Slashes"
        height={300}
        width={600}
        draggable={false}
        className="md:w-[40%] max-w-[300px] md:max-w-none object-cover h-[70px] absolute right-0 -translate-y-14 hidden md:block select-none"
        data-aos="fade-left"
        data-aos-duration="1000"
      />
    </div>
  </div>
  <div
    className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-20"
    data-aos="zoom-in-up"
    data-aos-duration="1000"
  >
    {voiceOptions.map((option, index) => (
      <BoxComponent option={option} index={index} isFullWidth={true} />
    ))}
  </div>
</div>

<div id="ai-codes" className="mt-14 sm:mt-28" data-aos="fade-up">
  <div
    className="absolute h-[900px] w-[150px] bg-[#726761] right-[-250px] blur-[250px] rounded"
    data-aos="zoom-in"
    data-aos-duration="1500"
  />
  <div className="w-full flex items-center flex-col">
    <div className="w-full flex items-center gap-3">
      <Image
        src="/slash.png"
        alt="Slashes"
        height={300}
        width={600}
        draggable={false}
        className="w-[300px] object-cover h-[70px] absolute left-0 translate-y-2"
        data-aos="fade-right"
        data-aos-duration="1000"
      />
      <h1
        className="relative z-10 uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        AI Codes
      </h1>
      <div
        className="h-[3px] max-w-4xl translate-y-1.5 bg-gradient-to-r from-gray-600 via-gray-800/50 to-transparent flex-1"
        data-aos="fade-left"
        data-aos-duration="1000"
      />
    </div>
    <div
      className="flex flex-col xl:flex-row gap-10 mt-20 relative"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <StickyComponent data-aos="slide-right" />
      <div className="w-full">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          data-aos="zoom-in-right"
        >
          {codeOptions.slice(0, 4).map((option, index) => (
            <BoxComponent
              option={option}
              index={index}
              isFullWidth={true}
            />
          ))}
        </div>
        <div
          className="mt-6"
          data-aos="zoom-in-left"
        >
          {codeOptions.slice(4).map((option, index) => (
            <BoxComponent
              option={option}
              index={index}
              isFullWidth={true}
            />
          ))}
        </div>
        <div className="w-full mt-10" data-aos="fade-up">
          <button className="text-sm font-semibold  ring-1 ring-gray-200 hover:ring-transparent transition duration-300 hover:bg-primary-red px-6 py-3.5 rounded-lg">
            Explore AI Codes
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

      </section>
   
	  <div
  id="ai-personalized"
  className="sm:mt-14 pt-14 pb-14 relative w-full"
  data-aos="fade-up"
>
  <div
    className="absolute h-[900px] w-[70px] sm:w-[150px] bg-yellow-700 left-[-250px] blur-[250px] rounded"
    data-aos="fade-right"
  />
  <div
    className="bg-gradient-to-r from-[#000] via-[#000]/80 to-[#000] absolute inset-0 z-[-1]"
    data-aos="fade-in"
  />
  <video
    className="w-full h-full absolute inset-0 object-cover z-[-2] hidden md:block"
    loop={true}
    autoPlay={true}
    data-aos="zoom-in"
  >
    <source
      src="/video/-17be-4cb0-88dd-864e300befea.mp4"
      type="video/mp4"
    />
  </video>
  <div
    className="w-full flex sm:items-center flex-col relative z-10"
    data-aos="fade-up"
  >
    <div>
      <Image
        src="/slash.png"
        alt="Slashes"
        height={300}
        width={600}
        draggable={false}
        className="md:w-[40%] max-w-[300px] md:max-w-none object-cover h-[70px] absolute left-0"
        data-aos="fade-left"
      />
      <h1
        className="relative z-10 sm:text-center ml-2 sm:ml-0 uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text"
        data-aos="fade-in"
      >
        AI Personalization
      </h1>
      <Image
        src="/slash.png"
        alt="Slashes"
        height={300}
        width={600}
        draggable={false}
        className="md:w-[40%] max-w-[300px] md:max-w-none object-cover h-[70px] absolute right-0 -translate-y-14 hidden md:block"
        data-aos="fade-right"
      />
    </div>
    <div
      className="mt-14 max-w-[1400px] mx-auto p-2.5 sm:p-4"
      data-aos="fade-up"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 :grid-cols-3 gap-5"   data-aos="zoom-in-left">
        {AiPersonaObject.map((option, index) => (
          <BoxComponent
            isFullWidth={true}
            option={option}
            index={index}
            isBorderShown={true}
            key={index}
            data-aos="zoom-in"
          />
        ))}
      </div>
    </div>
  </div>
</div>

<div
  id="create-your-own"
  className="sm:mt-28 max-w-[1300px] mx-auto p-2.5 sm:p-4"
  data-aos="fade-up"
>
  <div
    className="absolute h-[900px] w-[75px] sm:w-[150px] bg-primary-red right-[-250px] blur-[250px] rounded"
    data-aos="fade-left"
  />
  <div className="w-full flex items-center gap-3">
    <Image
      src="/slash.png"
      alt="Slashes"
      height={300}
      width={600}
      draggable={false}
      className="w-[300px] object-cover h-[70px] absolute left-0 translate-y-2"
      data-aos="fade-right"
    />
    <h1
      className="relative z-10 uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text"
      data-aos="fade-in"
    >
      Create Your own gpt
    </h1>
    <div
      className="h-[3px] max-w-4xl translate-y-1.5 bg-gradient-to-r from-gray-600 via-gray-800/50 to-transparent flex-1"
      data-aos="zoom-in"
    />
  </div>
  <div
    className="flex flex-col md:flex-row items-center gap-10 mt-12"
    data-aos="fade-up"
  >
    <p className="w-full text-white/70 text-sm sm:text-base">
      <span className="uppercase font-bold text-white">
        CREATE YOUR OWN GPT
      </span>{" "}
      <span className="leading-relaxed">
        is a powerful feature that enables users to develop their own customized AI models...
      </span>
    </p>
    <div
      className="bg-gradient-to-tl from-primary-red via-primary-yellow/40 to-transparent p-[1px] w-full rounded-2xl relative"
      data-aos="zoom-in"
    >
      <div className="w-full bg-black rounded-2xl min-h-[300px]">
        <Image
          src="/landing/floating-bot.gif"
          alt="floating-bot"
          height={100}
          width={300}
          className="rounded-2xl mx-auto h-52 object-cover sm:h-auto"
          draggable={false}
        />
      </div>
    </div>
  </div>
</div>

      <div id="ai-tools" className="w-full">
        <Tools />
        <div id="user-form" className="w-full flex flex-between">
          <h1 className="w-full text-center uppercase mt-4 text-lg sm:text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
            Ai tools
          </h1>
          <h1 className="w-full text-center uppercase mt-4 text-lg sm:text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
            Wolfram alpha
          </h1>
        </div>
      </div>
      <div className="w-full max-w-[1400px] mx-auto p-2.5 sm:p-4">
        <Contact message="Get a front-row seat to innovation. Subscribe to our newsletter today" />
      </div>
    </main>
  );
}
