const Navbar = () => {
  return (
    <nav className="relative w-full bg-transparent shadow-md z-50 py-10 px-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a className="flex items-center gap-2">
          <img
            src="\mahillogo.jpg"
            alt="Logo"
            className="w-12 h-12 rounded-full"
          />
          <div className="text-white text-xl font-bold tracking-wide"  style={{
                textShadow: "0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)",
              }}>MahilAI</div>
        </a>
        <div className="flex space-x-6">
          <a className="text-white text-lg px-4 py-2 rounded-full transition-all duration-300 hover:bg-white hover:text-[#121212]" href="#">Home</a> 
          <a className=" text-white text-lg px-4 py-2 rounded-full transition-all duration-300 hover:bg-white hover:text-[#121212]" href="/">About</a> 
          <a className="text-white text-lg px-4 py-2 rounded-full transition-all duration-300 hover:bg-white hover:text-[#121212]">Events</a> 
          <a className="text-white text-lg px-4 py-2 rounded-full transition-all duration-300 hover:bg-white hover:text-[#121212]">Contact</a> 

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
