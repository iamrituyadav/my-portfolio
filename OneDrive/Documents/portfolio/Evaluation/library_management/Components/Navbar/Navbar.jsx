import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
        <button className="history">History</button>
        <button className="drama">Drama</button>
        <button className="fiction">Fiction</button>
        <button className="thriller">Thriller</button>
        <button className="mythodology">Mythodology</button>
      </div>
    </>
  );
};
