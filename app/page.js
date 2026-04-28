import Link from "next/link";
import { colleges } from "@/data/colleges";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">CollegeHub</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {colleges.map((college) => (
          <div key={college.id} className="border p-4 rounded-xl shadow">
            <h2 className="text-xl font-bold">{college.name}</h2>
            <p>{college.location}</p>
            <p>{college.fees}</p>
            <p>⭐ {college.rating}</p>

            <Link href={`/college/${college.id}`}>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>

      <Link href="/compare">
        <button className="mt-8 bg-green-600 text-white px-5 py-2 rounded">
          Compare Colleges
        </button>
      </Link>
    </div>
  );
}