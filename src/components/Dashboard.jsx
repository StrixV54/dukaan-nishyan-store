import Overview from "./Overview";
import Transaction from "./Transaction";

export default function Dashboard() {
  return (
    <div className="flex flex-col overflow-scroll">
      <Overview />
      <Transaction />
    </div>
  );
}
