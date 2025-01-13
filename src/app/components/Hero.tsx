const Hero = () => {
  return (
    <div className="flex min-h-screen bg-[#004AAD] pt-16 font-['Arial',_'Helvetica',_'Open_Sans',_sans-serif]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2 p-8">
          <div className="bg-[#E6F0FF] rounded-lg p-8 aspect-square max-w-md mx-auto">
            {/* Placeholder for illustration */}
            <div className="w-full h-full relative">
              <div className="absolute bottom-0 w-full">
                <div className="bg-[#90EE90] h-32 rounded-t-full"></div>
                <div className="bg-[#32CD32] h-24"></div>
              </div>
              <div className="absolute top-8 left-1/2 -translate-x-1/2">
                <div className="bg-white w-24 h-12 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Text */}
        <div className="w-full md:w-1/2 p-8 text-left">
          <h1 className="text-[#FF914D] text-6xl md:text-7xl font-bold leading-tight mb-8 tracking-tight">
            Healthcare,<br />
            Technology<br />
            & Business.
          </h1>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 text-lg font-semibold hover:bg-white hover:text-[#004AAD] transition-all tracking-wide">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero; 