import Link from "next/link";
import ViewData from "./components/ViewData";
import CommonButton from "./components/CommonButton";

export default function Home() {
  return (
    <div className="space-y-3 mt-5">
      <div className="my-5">
        <Link href="/create">
          <CommonButton label="Create Data" />
        </Link>
      </div>

      <ViewData />
    </div>
  );
}
