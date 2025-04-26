import programmingVideo from '../assets/programming.mp4';
import machineVideo from '../assets/machine.mp4';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Empowering Ideas with <br />
        <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
          Full-Stack Development & AI Solutions
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md"
        >
          Contact Us
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          About Us
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 h-[500px] border border-blue-700 shadow-sm shadow-blue-400 mx-2 my-4"
        >
          <source src={programmingVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 h-[500px] border border-blue-700 shadow-sm shadow-blue-400 mx-2 my-4"
        >
          <source src={machineVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
