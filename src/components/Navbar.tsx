import { Link } from "react-router-dom";
import logoUrl from "../assets/companyLogo.svg";
import profileUrl from "../assets/profileLogo.svg";
// import plusIcon from "../assets/plus.svg"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-16 px-4 bg-white">
      <div className="svg_logo">
        <Link className="border-none outline-none" to="/">
          <img src={logoUrl} alt="NxtWave Icon" loading="lazy" />
        </Link>
      </div>
      <div className="flex items-center gap-8">
        <Link className="border-none outline-none" to="/add-resource">
          <button className="bg-green-500 hover:bg-green-600 text-white rounded text-sm py-1.5 px-3 border-transparent outline-transparent">
            ADD ITEM
          </button>
        </Link>
        <button className="mr-2 border-transparent outline-transparent">
          <img src={profileUrl} alt="NxtWave Icon" loading="lazy" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
