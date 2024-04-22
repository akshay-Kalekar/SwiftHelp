import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const SearchBar = () => {
  const { loginWithRedirect,logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log("State : ",user)
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div className="flex flex-row items-center justify-between px-4 py-2 bg-white-200">
      <div id="searchflexbox" className="flex items-center">
        <input
          id="searchbox"
          type="text"
          placeholder="Search..."
          className="px-3 py-1 mr-0  border border-gray-400 focus:outline-none focus:border-blue-500"
        />
        <button className="px-4 py-1 bg-white-500 text-white border-black  m-x-0">
          <i className="fas fa-search mr-2"></i>
        </button>
      </div>

      <div className="text-4xl font-bold font-new">Swift Help</div>

      <div className="flex items-center">
        <button
          id="fundraisebtn"
          className="px-4 py-1 mr-2 text-black  hover:bg-white hover:border-blue-500 hover:border-solid hover:border hover:rounded-lg"
        >
          Fundraise
        </button>
        { isAuthenticated ?
          <>
         <Link to={'/signup'}>
         <button
           id="donatebtn"
           className="px-4 py-1 bg-orange-500 text-black  hover:bg-white hover:border-blue-500 hover:border-solid hover:border hover:rounded-lg"
           >
           Donate
         </button>
         </Link>
          <button
          className="px-4 py-1 ml-2 bg-orange-500 text-black  hover:bg-white hover:border-blue-500 hover:border-solid hover:border hover:rounded-lg"
         onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
             Log Out
   </button>
   </>
   : 

        <button
          id="donatebtn"
          
          className="px-4 py-1 bg-orange-500 text-black  hover:bg-white hover:border-blue-500 hover:border-solid hover:border hover:rounded-lg"
          onClick={() => loginWithRedirect()}
          >
          Donate
        </button>
       

        }
         
      </div>
    </div>
    
  );
};

export default SearchBar;
