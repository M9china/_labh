"use client";
import { IProfile } from "./ProfileDto";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export const ProfilePage: React.FC<IProfile> = ({ image, name, email }) => {
  const router = useRouter();

  return (
    <div className="pt-[5rem] bg-white text-black px-4">
      <button
        onClick={() => router.push("/collection")}
        className="flex rounded text-black cursor-pointer items-center"
      >
        <ArrowLeftIcon className="h-4 w-4 font-semibold mr-2" />
        <span className="text-md font-semibold">Profile details</span>
      </button>
      <div className="bg-gray-200 rounded-t-lg px-4 py-2 mt-5">
        <Image
          className="rounded-full h-16 w-16"
          src={image}
          width={1500}
          height={1500}
          alt="profile image"
        />
      </div>
      <div className="p-4 text-gray-800 rounded shadow-sm">
        <div className="flex items-center space-x-2">
          <p className="font-semibold">Email: </p>
          <p>{email}</p>
        </div>
        <div className="flex items-center space-x-2">
          {" "}
          <p className="font-semibold">Full name: </p>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};
