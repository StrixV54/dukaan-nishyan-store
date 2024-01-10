import { LuClipboardList } from "react-icons/lu";
import { AiOutlineAppstore } from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
import Marketing from "../assets/marketing.png";
import Analytics from "../assets/analytics.png";
import Payments from "../assets/payments.png";
import Tools from "../assets/navbar.png";
import Discounts from "../assets/discounts.png";
import Audience from "../assets/audience.png";
import Appearance from "../assets/appearance.png";
import Plugins from "../assets/plugins.png";
import LogoImg from "../assets/Image.png";
import { FaChevronDown } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { CiWallet } from "react-icons/ci";

export default function Sidebar() {
  return (
    <div className="w-[312px] bg-[#1E2640] p-[10px] text-white h-[100vh] flex flex-col">
      <div className="flex flex-row gap-3 text-center p-2 justify-between">
        <img
          alt="logo"
          src={LogoImg}
          className="h-[45px] w-[45px] cursor-pointer"
        ></img>
        <div className="flex flex-col ml-2 text-[1rem] flex-1 text-start">
          <span>Nishyan</span>
          <a href="/" className=" text-[0.8rem] underline underline-offset-2">
            Visit Store
          </a>
        </div>
        <FaChevronDown className="m-auto cursor-pointer" />
      </div>
      <ul className="p-2 mt-2 text-[1rem]">
        <li className="flex pl-2 py-2 items-center gap-3 cursor-pointer hover:bg-white/10">
          <GoHome className="text-[1.4rem] opacity-60" /> Home
        </li>
        <li className="flex pl-2 py-2 items-center gap-3 cursor-pointer hover:bg-white/10">
          <LuClipboardList className="text-[1.4rem] opacity-60" /> Order
        </li>
        <li className="flex pl-2 py-2 items-center gap-3 cursor-pointer hover:bg-white/10">
          <AiOutlineAppstore className="text-[1.4rem] opacity-60" /> Products
        </li>
        <li className="flex pl-2 py-2 items-center gap-3 cursor-pointer hover:bg-white/10">
          <FiTruck className="text-[1.4rem] opacity-60" /> Delivery
        </li>
        <li className="flex pl-2 py-2 items-center gap-3 cursor-pointer hover:bg-white/10">
          <img src={Marketing} className="text-[1.4rem]" /> Marketing
        </li>
        <li className="flex pl-2 py-2 items-center gap-3 cursor-pointer hover:bg-white/10">
          <img src={Analytics} className="text-[1.4rem]" /> Analytics
        </li>
        <li className="flex pl-2 py-2 items-center gap-3 cursor-pointer hover:bg-white/10">
          <img src={Payments} className="text-[1.4rem] opacity-60" /> Payments
        </li>
        <li className="flex pl-2 py-2 items-center gap-3 cursor-pointer hover:bg-white/10">
          <img src={Tools} className="text-[1.4rem]" /> Tools
        </li>
        <li className="flex pl-2 py-2 items-center gap-3 cursor-pointer hover:bg-white/10">
          <img src={Discounts} className="text-[1.4rem]" /> Discounts
        </li>
        <li className="flex pl-2 py-2 items-center gap-3 cursor-pointer hover:bg-white/10">
          <img src={Audience} className="text-[1.4rem]" /> Audience
        </li>
        <li className="flex pl-2 py-2 items-center gap-3 cursor-pointer hover:bg-white/10">
          <img src={Appearance} className="text-[1.4rem]" /> Appearence
        </li>
        <li className="flex pl-2 py-2 items-center gap-3 cursor-pointer hover:bg-white/10">
          <img src={Plugins} className="text-[1.4rem]" /> Plugins
        </li>
      </ul>
      <div className="mt-auto bg-white/10 p-2 m-2 rounded flex items-center gap-3">
        <div className="h-[35px] w-[35px] rounded-md bg-white/5 shadow-md flex items-center justify-center">
          <CiWallet className="text-white text-[1.6rem]" />
        </div>
        <div className="flex flex-col">
          <div className=" text-[0.8rem]">Available Credits</div>
          <div className="">222.10</div>
        </div>
      </div>
    </div>
  );
}
