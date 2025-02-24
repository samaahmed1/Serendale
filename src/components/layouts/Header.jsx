import { Link } from "react-router";
function Header() {
  return (
    <header className="py-9 sticky top-0 z-10 bg-gray-900">
      <div className="container mx-auto px-5 flex justify-between items-start md:items-center">
        <div className="logo">
          <Link to="/" className="font-normal text-xl hover:text-[#d851d4]">
            Serendale
          </Link>
        </div>
        <nav className="flex flex-col md:flex-row items-center md:justify-between md:w-full">
          <ul className="flex flex-col md:flex-row gap-7 font-thin md:mx-auto">
            <li>
              <Link to="/" className="hover:border-b border-[#d851d4]">
                Smart Contracts
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:border-b border-[#dc20ff]">
                Services
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:border-b border-[#d851d4]">
                Solutions
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:border-b border-[#d851d4]">
                Roadmap
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:border-b border-[#d851d4]">
                Whitepaper
              </Link>
            </li>
          </ul>
          <div className="social-links flex gap-3 mt-7 md:mt-0">
            <Link to="/">
              <i class="fa-brands fa-github"></i>
            </Link>
            <Link to="/">
              <i class="fa-brands fa-discord"></i>
            </Link>
            <Link to="/">
              <i class="fa-brands fa-reddit"></i>
            </Link>
            <Link to="/">
              <i class="fa-brands fa-twitter"></i>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Header;
