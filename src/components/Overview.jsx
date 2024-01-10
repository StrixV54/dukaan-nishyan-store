const DownSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M2.27748 5.77748C2.61381 5.44114 3.14013 5.41057 3.511 5.68575L3.61726 5.77748L8 10.1598L12.3827 5.77748C12.7191 5.44114 13.2454 5.41057 13.6163 5.68575L13.7225 5.77748C14.0589 6.11381 14.0894 6.64013 13.8142 7.011L13.7225 7.11726L8.66989 12.1699C8.33355 12.5062 7.80724 12.5368 7.43636 12.2616L7.33011 12.1699L2.27748 7.11726C1.90751 6.74729 1.90751 6.14745 2.27748 5.77748Z"
      fill="#4D4D4D"
    />
  </svg>
);

export default function Overview() {
  return (
    <div className="m-8">
      <div className="mb-6 w-full flex flex-row justify-between p-2">
        <h6 className="text-[1.3rem] font-semibold">Overview</h6>
        <div className="border border-[#cccccc] bg-white rounded-md py-2 px-3 flex items-center gap-2 cursor-pointer">
          Last Month
          {DownSVG}
        </div>
      </div>
      <div className="w-full flex flex-row gap-4">
        <div className="bg-white shadow-sm px-6 py-6 rounded-md flex-1">
          <div className="text-[0.9rem] mb-2">Online orders</div>
          <div className="text-[1.8rem] font-semibold">231</div>
        </div>
        <div className="bg-white shadow-sm px-6 py-6 rounded-md flex-1">
          <div className="text-[0.9rem] mb-2">Amount received</div>
          <div className="text-[1.8rem] font-semibold">₹23,92,312.19</div>
        </div>
      </div>
    </div>
  );
}
