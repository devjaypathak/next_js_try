import Link from "next/link";

export default function TopBar() {
  return (
    <div className="p-3 fixed top-0 left-0 right-0">
      <div className="container mx-auto">
        <div className="flex items-center p-3 justify-between">
          <div className="text-2xl font-bold">
            Auto{" "}
            <span className="text-purple-600 p-2 bg-purple-100">Forms</span>
          </div>
          <Link href={"/login_in"} className="text-purple-800 font-bold">
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
}
