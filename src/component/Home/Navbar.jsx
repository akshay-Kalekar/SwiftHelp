import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="flex items-center justify-center  px-4 py-2 bg-white border">
      <div className="flex items-center mr-1 justify-between">
      <details className="dropdown">
  <summary className="m-1 ">About Donation</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li>
    <Link to='/blog'>

      <a>Blog</a>
    </Link>
      </li>
  </ul>
</details>
<details className="dropdown">
  <summary className="m-1 ">Research and advocates </summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li>Place 1</li>
  </ul>
</details><details className="dropdown">
  <summary className="m-1 ">Support Us</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li>Place 1</li>
  </ul>
</details><details className="dropdown">
  <summary className="m-1 ">About Us </summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li>Place 1</li>
  </ul>
</details>
<details className="dropdown">
  <summary className="m-1 ">News and Stories </summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li>Place 1</li>
  </ul>
</details>
      </div>
    </div>
  );
};

export default Navbar;
