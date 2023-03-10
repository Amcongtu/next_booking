import React, { useState, useEffect } from "react";
import style from "@/styles/Layout_main/Header_Main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
  faEarthAmerica,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useRouter } from 'next/router';
function Header({ list }) {
  const router = useRouter()
  useEffect(() => {
    const handleClickOutSide = () => {
      setIsOpenDate(false);
      setIsOpenOtions(false);
    };
    window.addEventListener("mousedown", handleClickOutSide);
    return () => window.removeEventListener("mousedown", handleClickOutSide);
  }, []);
  const [isOpenDate, setIsOpenDate] = useState(false);
  const [isOpenOtions, setIsOpenOtions] = useState(false);
  const handleSetOpenDate = (e) => {
    e.stopPropagation();
    setIsOpenDate(!isOpenDate);
    setIsOpenOtions(false);
  };
  const handleSetOpenOptions = (e) => {
    e.stopPropagation();
    setIsOpenOtions(!isOpenOtions);
    setIsOpenDate(false);
  };
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const handleSearch = ()=>{
    
  }
  return (
    <div className="bg-[#003B95]">
      <div className="flex flex-col gap-4">
        <div className="root_container">
          <div className="flex items-center gap-6 py-4">
            <div className="px-4 py-1 flex items-center gap-2 hover:bg-[rgba(255,255,255,0.2)] cursor-pointer duration-200 text-white rounded-full border border-white bg-[#00224F] brightness-150">
              <FontAwesomeIcon icon={faBed} />
              <span>Accommodation</span>
            </div>
            <div className="px-4 py-1 flex items-center gap-2 hover:bg-[rgba(255,255,255,0.2)] cursor-pointer duration-200 text-white rounded-full ">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flight</span>
            </div>
            <div className="px-4 py-1 flex items-center gap-2 hover:bg-[rgba(255,255,255,0.2)] cursor-pointer duration-200 text-white rounded-full ">
              <FontAwesomeIcon icon={faEarthAmerica} />
              <span>Flight + Hotel</span>
            </div>
            <div className="px-4 py-1 flex items-center gap-2 hover:bg-[rgba(255,255,255,0.2)] cursor-pointer duration-200 text-white rounded-full ">
              <FontAwesomeIcon icon={faCar} />
              <span>Car</span>
            </div>
            <div className="px-4 py-1 flex items-center gap-2 hover:bg-[rgba(255,255,255,0.2)] cursor-pointer duration-200 text-white rounded-full ">
              <FontAwesomeIcon icon={faLocation} />
              <span>Vist location</span>
            </div>
            <div className="px-4 py-1 flex items-center gap-2 hover:bg-[rgba(255,255,255,0.2)] cursor-pointer duration-200 text-white rounded-full ">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Taxi</span>
            </div>
          </div>
        </div>
       {list && (
             <div className="relative">
             <div className="root_container relative z-20">
               <div className="text-white flex flex-col justify-center gap-6 py-[100px]">
                 <div className="text-[32px] font-bold">
                   Find a motel Suitable for yourself
                 </div>
                 <div className="text-[20px]">
                   The vacation is easy to place but it is difficult to leave
                 </div>
                 <div className="p-2 rounded-md bg-cyan-500 w-[200px] text-center hover:bg-cyan-200 hover:text-black duration-200 active:scale-90">
                   Find a cool place
                 </div>
               </div>
             </div>
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent z-10"></div>
             <img
               src="https://jes.edu.vn/wp-content/uploads/2019/05/68184730.jpg"
               alt=""
               className="absolute top-0 left-0 w-full h-full object-cover"
             />
             <div className={style.headerSearch}>
               <div className={style.headerSearchItem}>
                 <FontAwesomeIcon icon={faBed} className={style.headerIcon} />
                 <input
                   type="text"
                   placeholder="Where are you going?"
                   className={`${style.headerSearchInput}  text-gray-400`}
                 />
               </div>
               <div className={style.headerSearchItem}>
                 <FontAwesomeIcon
                   onClick={() => setIsOpenDate(!isOpenDate)}
                   icon={faCalendarDays}
                   className={`${style.headerIcon} cursor-pointer pr-[8px] mr-[-6px]`}
                 />
                 <span
                   onMouseDown={(e) => handleSetOpenDate(e)}
                   className={`${style.headerSearchText} cursor-pointer select-none`}
                 >
                   {format(date[0].startDate, "MM/dd/yyy")} to{" "}
                   {format(date[0].endDate, "MM/dd/yyy")}{" "}
                 </span>
                 {isOpenDate && (
                   <div
                     onMouseDown={(e) => e.stopPropagation()}
                     className={`${style.date} z-100`}
                   >
                     <DateRange
                       editableDateInputs={true}
                       onChange={(item) => setDate([item.selection])}
                       moveRangeOnFirstSelection={false}
                       ranges={date}
                     />
                   </div>
                 )}
               </div>
               <div className={style.headerSearchItem}>
                 <FontAwesomeIcon
                   onMouseDown={(e) => handleSetOpenOptions(e)}
                   icon={faPerson}
                   className={`${style.headerIcon} cursor-pointer p-[12px] mr-[-10px]`}
                 />
                 <span
                   onMouseDown={(e) => handleSetOpenOptions(e)}
                   className={`${style.headerSearchText} select-none cursor-pointer py-[12px]`}
                 >{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                 {isOpenOtions && (
                   <div
                     className={style.options}
                     onMouseDown={(e) => e.stopPropagation()}
                   >
                     <div className={style.optionItem}>
                       <span className={style.optionText}>Adult</span>
                       <div className={style.optionCounter}>
                         <button
                           disabled={options.adult <= 1}
                           className={style.optionCounterButton}
                           onClick={() => handleOption("adult", "d")}
                         >
                           -
                         </button>
                         <span className={style.optionCounterNumber}>
                           {options.adult}
                         </span>
                         <button
                           className={style.optionCounterButton}
                           onClick={() => handleOption("adult", "i")}
                         >
                           +
                         </button>
                       </div>
                     </div>
                     <div className={style.optionItem}>
                       <span className={style.optionText}>Children</span>
                       <div className={style.optionCounter}>
                         <button
                           disabled={options.children <= 0}
                           className={style.optionCounterButton}
                           onClick={() => handleOption("children", "d")}
                         >
                           -
                         </button>
                         <span className={style.optionCounterNumber}>
                           {options.children}
                         </span>
                         <button
                           className={style.optionCounterButton}
                           onClick={() => handleOption("children", "i")}
                         >
                           +
                         </button>
                       </div>
                     </div>
                     <div className={style.optionItem}>
                       <span className={style.optionText}>Room</span>
                       <div className={style.optionCounter}>
                         <button
                           disabled={options.room <= 1}
                           className={style.optionCounterButton}
                           onClick={() => handleOption("room", "d")}
                         >
                           -
                         </button>
                         <span className={style.optionCounterNumber}>
                           {options.room}
                         </span>
                         <button
                           className={style.optionCounterButton}
                           onClick={() => handleOption("room", "i")}
                         >
                           +
                         </button>
                       </div>
                     </div>
                   </div>
                 )}
               </div>
               <div className={style.headerSearchItem}>
                 <button className={style.headerBtn} onClick={handleSearch}>Search</button>
               </div>
             </div>
           </div>
       )}
      </div>
    </div>
  );
}
export default Header;

{
  /* <div className={style.headerSearch}>
  -
  <div className={style.headerSearchItem}>
    <FontAwesomeIcon icon={faBed} className={style.headerIcon} />
    <input
      type="text"
      placeholder="Where are you going?"
      className={`${style.headerSearchInput}  text-gray-400`}
    />
  </div>
  <div className={style.headerSearchItem}>
    <FontAwesomeIcon
      onClick={() => setIsOpenDate(!isOpenDate)}
      icon={faCalendarDays}
      className={`${style.headerIcon} cursor-pointer pr-[8px] mr-[-6px]`}
    />
    <span
      onMouseDown={(e) => handleSetOpenDate(e)}
      className={`${style.headerSearchText} cursor-pointer select-none`}
    >
      {format(date[0].startDate, "MM/dd/yyy")} to{" "}
      {format(date[0].endDate, "MM/dd/yyy")}{" "}
    </span>
    {isOpenDate && (
      <div
        onMouseDown={(e) => e.stopPropagation()}
        className={`${style.date} z-100`}
      >
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
        />
      </div>
    )}
  </div>
  <div className={style.headerSearchItem}>
    <FontAwesomeIcon
      onMouseDown={(e) => handleSetOpenOptions(e)}
      icon={faPerson}
      className={`${style.headerIcon} cursor-pointer p-[12px] mr-[-10px]`}
    />
    <span
      onMouseDown={(e) => handleSetOpenOptions(e)}
      className={`${style.headerSearchText} select-none cursor-pointer py-[12px]`}
    >{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
    {isOpenOtions && (
      <div className={style.options} onMouseDown={(e) => e.stopPropagation()}>
        <div className={style.optionItem}>
          <span className={style.optionText}>Adult</span>
          <div className={style.optionCounter}>
            <button
              disabled={options.adult <= 1}
              className={style.optionCounterButton}
              onClick={() => handleOption("adult", "d")}
            >
              -
            </button>
            <span className={style.optionCounterNumber}>{options.adult}</span>
            <button
              className={style.optionCounterButton}
              onClick={() => handleOption("adult", "i")}
            >
              +
            </button>
          </div>
        </div>
        <div className={style.optionItem}>
          <span className={style.optionText}>Children</span>
          <div className={style.optionCounter}>
            <button
              disabled={options.children <= 0}
              className={style.optionCounterButton}
              onClick={() => handleOption("children", "d")}
            >
              -
            </button>
            <span className={style.optionCounterNumber}>
              {options.children}
            </span>
            <button
              className={style.optionCounterButton}
              onClick={() => handleOption("children", "i")}
            >
              +
            </button>
          </div>
        </div>
        <div className={style.optionItem}>
          <span className={style.optionText}>Room</span>
          <div className={style.optionCounter}>
            <button
              disabled={options.room <= 1}
              className={style.optionCounterButton}
              onClick={() => handleOption("room", "d")}
            >
              -
            </button>
            <span className={style.optionCounterNumber}>{options.room}</span>
            <button
              className={style.optionCounterButton}
              onClick={() => handleOption("room", "i")}
            >
              +
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
  <div className={style.headerSearchItem}>
    <button className={style.headerBtn}>Search</button>
  </div>
</div> */
}
