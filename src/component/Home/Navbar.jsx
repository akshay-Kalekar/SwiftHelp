const Navbar = () => {
  return (
    <div className="flex items-center justify-center  px-4 py-2 bg-white border">
      <div className="flex items-center mr-1">
        <li className="dropdown">
          <a className="mr-2 font-bold">About Donation ▼</a>
          <div className="dropdown-content">
            <a href="#">Place 1</a>
            <a href="#">Place 2</a>
            <a href="#">Place 3</a>
          </div>
        </li>
        <li className="dropdown">
          <a className="mr-2 font-bold">Research and Advocac ▼</a>
          <div className="dropdown-content">
            <a href="#">Place 1</a>
            <a href="#">Place 2</a>
            <a href="#">Place 3</a>
          </div>
        </li>
        <li className="dropdown">
          <a className="mr-2 font-bold">Support Us ▼</a>
          <div className="dropdown-content">
            <a href="#">Place 1</a>
            <a href="#">Place 2</a>
            <a href="#">Place 3</a>
          </div>
        </li>
        <li className="dropdown">
          <a className="mr-2 font-bold">About Us ▼</a>
          <div className="dropdown-content">
            <a href="#">Place 1</a>
            <a href="#">Place 2</a>
            <a href="#">Place 3</a>
          </div>
        </li>
        <li className="dropdown">
          <a className="mr-2 font-bold">News and Stories ▼</a>
          <div className="dropdown-content">
            <a href="#">Place 1</a>
            <a href="#">Place 2</a>
            <a href="#">Place 3</a>
          </div>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
