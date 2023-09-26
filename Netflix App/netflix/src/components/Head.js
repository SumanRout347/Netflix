import React, { useEffect, useState } from "react";
import { addUser, removeUser } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { signOut } from "firebase/auth";
import { VscAccount } from "react-icons/vsc";
import { BsFillPencilFill } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { onAuthStateChanged } from "firebase/auth";
import { IoMdNotifications } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { setLanguage, toggleSearch } from "../redux/gptSlice";
import { languages, logo } from "../utils/constants";
import { AiFillHome } from "react-icons/ai";

import { setToggleList } from "../redux/movieSlice";

const Head = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [showDropdown, setShowDropdown] = useState(false);
  const search = useSelector((store) => store.gpt.showGptSearch);
  const showList = useSelector((store) => store.movies.toggleList);

  const notifiedMovies = useSelector((store) => store.movies.notifiedMovies);
  const [notifyToggle, setNotifyToggle] = useState(false);

  const dropData = [
    {
      name: "Manage Profiles",
      img: <BsFillPencilFill className="w-full h-full" />,
    },
    {
      name: "Transfer Profile",
      img: <BsEmojiSmile className="w-full h-full" />,
    },
    { name: "Account", img: <VscAccount className="w-full h-full" /> },
    { name: "Help Centre", img: <BiHelpCircle className="w-full h-full" /> },
  ];

  const handleSignout = async () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAccount = () => {
    const find = dropData.find((val) => val.name === "Account");
    console.log(find);
    if (find) {
      navigate("/account");
    }
  };
  const handleList=()=>{
    dispatch(setToggleList())
    if(search){
      dispatch(toggleSearch())
    }
    
  }
  const handleSearch=()=>{
    dispatch(toggleSearch())
    if(showList){
      dispatch(setToggleList())
    }
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute bg-black z-[100] flex items-center justify-between w-screen">
      <div className="flex gap-2 sm:gap-6 sm:pl-10 pl-1 items-center">
        <img
          className="md:w-48 sm:w-40 w-20"
          src={logo}
          alt="logo"
        />
       {auth.currentUser && !search &&(
         <p onClick={handleList} className="text-white cursor-pointer md:text-2xl sm:text-xl text-xs">My List</p>
       )}
      </div>

      {auth.currentUser && (
        <div className="flex items-center">
          {search && (
            <select
              onChange={(e) => dispatch(setLanguage(e.target.value))}
              className="cursor-pointer rounded-md bg-gray-800 text-white py-1 px-4 sm:mr-8 mr-3 outline-none"
            >
              {languages.map((language) => (
                <option
                  className="cursor-pointer"
                  value={language.name}
                  key={language.name}
                >
                  {language.value}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleSearch}
            className="hidden md:flex text-white mr-8 bg-gray-800 hover:bg-zinc-500 py-1 px-4 rounded-md"
          >
            {search ? "Home" : "Search"}
          </button>
          {search ? (
            <AiFillHome
              onClick={handleSearch}
              className="text-white h-5 w-5 md:hidden sm:mr-8 mr-3  cursor-pointer"
            />
          ) : (
            <AiOutlineSearch
              onClick={handleSearch}
              className="text-white h-6 w-6 md:hidden sm:mr-8 mr-3  cursor-pointer"
            />
          )}

          <IoMdNotifications
            onClick={() => setNotifyToggle(!notifyToggle)}
            className="text-white h-6 w-6 sm:mr-8 mr-4 cursor-pointer"
          />
          {notifyToggle && (
            <>
              <BiSolidUpArrow className="text-white absolute lg:right-[130px] right-[80px] sm:right-[105px] top-[42px] md:right-[132px] md:top-[50px] lg:top-[62px]" />
              <div className="overflow-y-scroll b-2 border-t-white bg-black opacity-80 absolute z-[999] sm:top-[60px] sm:right-[108px] md:right-[132px] md:top-[63px] right-[76px] lg:right-[130px] lg:top-[80px] top-[53px] w-[300px] h-[300px]">
                {notifiedMovies.map((movie) => (
                  <div
                    key={movie.id}
                    className=" cursor-pointer hover:bg-gray-600"
                  >
                    <div className="flex mb-3 sm:ml-2 ml-4 mt-3 items-center gap-3 ">
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500" + movie.poster_path
                        }
                        alt="Movie"
                        className="w-20"
                      />
                      <p className="text-white font-bold">{movie.title}</p>
                    </div>
                    <hr className="text-whit" />
                  </div>
                ))}
              </div>
            </>
          )}
          <div className="group md:mr-10 mr-6">
            <div
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center sm:gap-3 gap-2 cursor-pointer"
            >
              <img
                src={user?.photoURL}
                alt=""
                className="md:w-8 md:h-8 w-5 h-5"
              />
              {showDropdown ? (
                <BiSolidUpArrow className="text-white w-3 h-2" />
              ) : (
                <BiSolidDownArrow className="text-white w-3 h-2" />
              )}
            </div>
            {showDropdown && (
              <BiSolidUpArrow className="absolute top-[40px] h-3 w-3 md:h-4 md:w-4 text-white right-[48px] md:top-[62px] md:right-[70px] " />
            )}
            {showDropdown && (
              <div className="absolute z-50 md:w-44 right-8 md:right-10 top-[60px] md:top-[81px] bg-black text-white">
                {dropData.map((data, i) => (
                  <div
                    className="p-3 hover:underline text-sm cursor-pointer flex items-center gap-3"
                    key={i}
                  >
                    <p className="w-[25px] h-[25px] text-gray-400">
                      {data.img}
                    </p>
                    <span onClick={handleAccount} className="text-xs">
                      {data.name}
                    </span>
                  </div>
                ))}
                <hr className="text-white pl-0 pr-0" />
                <p
                  onClick={handleSignout}
                  className="p-3 hover:underline  cursor-pointer flex justify-center text-xs"
                >
                  Sign out of Netflix
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Head;
