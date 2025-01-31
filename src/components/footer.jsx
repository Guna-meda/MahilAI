export default function Footer() {
  return (
    <footer className="bg-[#130726] text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        <div>
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="text-gray-400 mt-2">📧 Email: .......@mahilai.com</p>
          <p className="text-gray-400">📞 Phone: +91 xxxxx xxxxx</p>
          <p className="text-gray-400">📍 Bangalore, India</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Follow Us</h2>
          <div className="flex justify-center md:justify-start gap-4 mt-3">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        <p>© 2025 Mahilai. All rights reserved.</p>
      </div>
    </footer>
  );
}
