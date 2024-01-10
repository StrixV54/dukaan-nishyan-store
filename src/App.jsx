import LogoImg from "./assets/Image.png";
import { FaChevronDown } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { BsQuestionCircle } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

function App() {
  return (
    <div className="w-full flex h-full flex-row">
      <div className="w-[312px] bg-[#1E2640] p-[10px] text-white h-[100vh]">
        <div className="flex flex-row gap-2 text-center p-2 justify-between">
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
          <li className="flex pl-2 py-2 items-center gap-2 cursor-pointer hover:bg-white/10">
            <GoHome className="text-[1.4rem]" /> Home
          </li>
          <li className="flex pl-2 py-2 items-center gap-2 cursor-pointer hover:bg-white/10">
            <GoHome className="text-[1.4rem]" /> Order
          </li>
          <li className="flex pl-2 py-2 items-center gap-2 cursor-pointer hover:bg-white/10">
            <GoHome className="text-[1.4rem]" /> Products
          </li>
          <li className="flex pl-2 py-2 items-center gap-2 cursor-pointer hover:bg-white/10">
            <GoHome className="text-[1.4rem]" /> Delivery
          </li>
          <li className="flex pl-2 py-2 items-center gap-2 cursor-pointer hover:bg-white/10">
            <GoHome className="text-[1.4rem]" /> Marketing
          </li>
          <li className="flex pl-2 py-2 items-center gap-2 cursor-pointer hover:bg-white/10">
            <GoHome className="text-[1.4rem]" /> Analytics
          </li>
          <li className="flex pl-2 py-2 items-center gap-2 cursor-pointer hover:bg-white/10">
            <GoHome className="text-[1.4rem]" /> Tools
          </li>
          <li className="flex pl-2 py-2 items-center gap-2 cursor-pointer hover:bg-white/10">
            <GoHome className="text-[1.4rem]" /> Discounts
          </li>
          <li className="flex pl-2 py-2 items-center gap-2 cursor-pointer hover:bg-white/10">
            <GoHome className="text-[1.4rem]" /> Audience
          </li>
          <li className="flex pl-2 py-2 items-center gap-2 cursor-pointer hover:bg-white/10">
            <GoHome className="text-[1.4rem]" /> Appearence
          </li>
          <li className="flex pl-2 py-2 items-center gap-2 cursor-pointer hover:bg-white/10">
            <GoHome className="text-[1.4rem]" /> Plugins
          </li>
        </ul>
      </div>
      <div className="flex flex-col w-full bg-[#FAFAFA]">
        <div className="navbar flex flex-row w-full bg-white h-[68px] shadow-sm justify-between items-center px-8">
          <div className="gap-6">
            <span>Payments</span>
            <div className="flex justify-center items-center gap-2 text-[0.8rem]">
              <BsQuestionCircle />
              How it works
            </div>
          </div>
          <div className="p-2 bg-[#f6f6f6] rounded-md">
            <FiSearch className="opacity-[60%] mx-2" />
            <input
              className=" bg-transparent shadow-sm"
              placeholder="Search features, tutorials, etc."
            />
          </div>
          <div></div>
        </div>
        <div className="m-8">
          <h6 className="mb-6 text-[1.3rem] font-semibold">Overview</h6>
          <div className="w-full flex flex-row gap-4">
            <div className="bg-white shadow-sm p-4 border-radius-2 flex-1">
              <div className="text-[0.9rem] mb-2">Online orders</div>
              <div className="text-[1.8rem] font-semibold">231</div>
            </div>
            <div className="bg-white shadow-sm p-4 border-radius-2 flex-1">
              <div className="text-[0.9rem] mb-2">Amount received</div>
              <div className="text-[1.8rem] font-semibold">₹23,92,312.19</div>
            </div>
          </div>
        </div>
        <div className="m-8">
          <h1 className="mb-6 text-[1.3rem] font-semibold">
            Transactions | This Month
          </h1>
          <div className="w-full flex flex-row gap-4">
            <div className="bg-white shadow-sm p-3 rounded flex-1">
              <div className="flex flex-row mb-3">
                <div className="p-2 border border-[#cccccc] rounded-md flex items-center">
                  <FiSearch className="opacity-[60%] mx-2" />
                  <input
                    className=" bg-transparent shadow-sm"
                    placeholder="Search by order ID..."
                  />
                </div>
              </div>
              <table className="table-auto w-full">
                <thead className="bg-gray-200 text-[1rem]">
                  <tr>
                    <th className="text-left pl-3 font-light rounded-s-md py-2">
                      Order ID
                    </th>
                    <th className="text-left pl-3 font-light  py-2">
                      Order date
                    </th>
                    <th className="text-right pr-3 font-light  py-2">
                      Order amount
                    </th>
                    <th className="text-right pr-3 font-light rounded-e-md py-2">
                      Transaction fees
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(8)].map((_x, ind) => (
                    <tr key={ind} className="border-b-[2px]">
                      <td className="py-2 pl-2">
                        <a className="text-blue-700">#281209</a>
                      </td>
                      <td className="pl-3">7 July, 2023</td>
                      <td className="text-right pr-3">₹1278.23</td>
                      <td className="text-right pr-3">₹22</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-2 mt-2 w-full items-center justify-center flex">
                <button className="px-2 py-1 border border-slate-400 rounded">
                  Previous
                </button>
                {[
                  "1",
                  "...",
                  "10",
                  "11",
                  "12",
                  "13",
                  "14",
                  "15",
                  "16",
                  "17",
                  "18",
                ].map((x, ind) => {
                  if (x === "10") {
                    return (
                      <div
                        key={ind}
                        className="w-[35px] h-[35px] justify-center items-center flex bg-blue-600 text-white rounded"
                      >
                        {x}
                      </div>
                    );
                  } else {
                    return (
                      <div key={ind} className="p-2">
                        {x}
                      </div>
                    );
                  }
                })}
                <button>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
