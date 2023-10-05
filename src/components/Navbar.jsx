import logo from "../assets/images/Frame.png";
const Navbar = () => {
  return (
    <div className="flex items-center gap-4 mt-4">
      <div className="mx-10">
        <img src={logo} alt="" />
      </div>
      <div>
        {" "}
        <input
          className="bg-transparent border rounded-md py-1 px-4 text-white mx-5"
          type="text"
          placeholder="Search your Destination"
        />
      </div>
      <div className="text-white flex gap-4 mx-32">
        <p>News</p>
        <p>Destination</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
      <div className="ml-80">
        <button className="bg-yellow-500 py-1 px-4 rounded-lg font-semibold">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
