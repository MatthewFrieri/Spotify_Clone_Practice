import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <span className="flex justify-center items-center my-10">
        <h1 className="text-8xl font-semibold">MyMusic</h1>
        <img className="w-2/5" src="/logo.png" />
      </span>
      <Link href="/dash">
        <ArrowRightIcon className="w-20" />
      </Link>
    </div>
  );
}
