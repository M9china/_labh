import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import router from "next/router";

export default function Item() {
  return (
    <div className="pt-[5rem]">
      <button
        onClick={() => router.push("/collection")}
        className="flex rounded text-white bg-[#043673] hover:shadow-sm hover:shadow-[#917248] px-3 py-1 cursor-pointer items-center"
      >
        <ArrowLeftIcon className="h-4 w-4 font-semibold mr-2" />
        <span className="text-md mr-4">Back</span>
      </button>
    </div>
  );
}
