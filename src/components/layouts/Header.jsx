function Header() {
  return (
    <header className="py-9 sticky top-0 z-10 bg-gray-900">
      <div className="container mx-auto px-5 flex justify-between items-start md:items-center">
        <div className="logo">
          <a href="index.html" className="font-normal text-xl hover:text-[#d851d4]">
            Serendale
          </a>
        </div>
        <nav className="flex flex-col md:flex-row items-center md:justify-between md:w-full">
          <ul className="flex flex-col md:flex-row gap-7 font-thin md:mx-auto">
            <li>
              <a href="index.html" className="hover:border-b border-[#d851d4]">
                Smart Contracts
              </a>
            </li>
            <li>
              <a href="index.html" className="hover:border-b border-[#dc20ff]">
                Services
              </a>
            </li>
            <li>
              <a href="index.html" className="hover:border-b border-[#d851d4]">
                Solutions
              </a>
            </li>
            <li>
              <a href="index.html" className="hover:border-b border-[#d851d4]">
                Roadmap
              </a>
            </li>
            <li>
              <a href="index.html" className="hover:border-b border-[#d851d4]">
                Whitepaper
              </a>
            </li>
          </ul>
          <div className="social-links flex gap-3 mt-7 md:mt-0">
            <a href="index.html">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="index.html">
              <i class="fa-brands fa-discord"></i>
            </a>
            <a href="index.html">
              <i class="fa-brands fa-reddit"></i>
            </a>
            <a href="index.html">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Header;
