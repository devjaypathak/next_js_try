import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="space-y-3">
          <div className="text-5xl flex items-center">
            Welcome to &nbsp;
            <span className="font-bold bg-purple-100 p-2 text-purple-600">
              Auto Forms
            </span>
          </div>
          <div className="text-gray-500 text-center text-lg">
            One place to create, manage and share your forms with your team.
          </div>
          <div className="flex gap-2 justify-center pt-5">
            <Link href={"/sign_up"} className="btn text-lg">
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
