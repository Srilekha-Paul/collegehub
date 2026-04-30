import Link from "next/link";
import {
  Star,
  MapPin,
  TrendingUp,
  IndianRupee,
  ArrowLeft,
} from "lucide-react";

const colleges = [
  {
    id: "1",
    name: "IIT Delhi",
    location: "Delhi",
    fees: "₹2,00,000",
    rating: 4.9,
    placement: "95%",
    about:
      "IIT Delhi is one of India’s premier engineering institutes known for innovation, research, and world-class placements.",
    courses: ["B.Tech", "M.Tech", "MBA", "PhD"],
    reviews: [
      "Amazing campus life and placements.",
      "Top faculty and strong coding culture.",
    ],
  },
  {
    id: "2",
    name: "Jadavpur University",
    location: "Kolkata",
    fees: "₹20,000",
    rating: 4.7,
    placement: "88%",
    about:
      "Jadavpur University is highly respected for engineering, arts, and science education with affordable fees.",
    courses: ["B.Tech", "M.Tech", "BA", "MA"],
    reviews: [
      "Best ROI college in India.",
      "Excellent academics and reputation.",
    ],
  },
];

export default function CollegeDetail({
  params,
}: {
  params: { id: string };
}) {
  const college = colleges.find((c) => c.id === params.id);

  if (!college) {
    return (
      <main className="min-h-screen bg-[#050816] text-white p-10">
        <h1 className="text-4xl font-bold">College Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      {/* Navbar */}
      <div className="border-b border-white/10 px-8 py-5 flex justify-between items-center">
        <Link href="/">
          <button className="flex gap-2 items-center text-gray-300 hover:text-white">
            <ArrowLeft size={18} /> Back
          </button>
        </Link>

        <h1 className="text-2xl font-bold text-blue-500">CollegeHub</h1>
      </div>

      {/* Hero */}
      <section className="px-8 py-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h1 className="text-5xl font-bold">{college.name}</h1>

          <p className="flex gap-2 items-center text-gray-400 mt-4">
            <MapPin size={18} /> {college.location}
          </p>

          <p className="text-gray-300 mt-6 max-w-3xl leading-7">
            {college.about}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="px-8 grid md:grid-cols-3 gap-6">
        <Card
          icon={<IndianRupee className="text-green-400" />}
          title="Fees"
          value={college.fees}
        />

        <Card
          icon={<Star className="text-yellow-400" />}
          title="Rating"
          value={college.rating.toString()}
        />

        <Card
          icon={<TrendingUp className="text-blue-400" />}
          title="Placement"
          value={college.placement}
        />
      </section>

      {/* Main Content */}
      <section className="px-8 py-12 grid md:grid-cols-3 gap-8">
        {/* Left */}
        <div className="md:col-span-2 space-y-8">
          {/* Courses */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-5">Courses Offered</h2>

            <div className="grid grid-cols-2 gap-4">
              {college.courses.map((course, i) => (
                <div
                  key={i}
                  className="bg-blue-600/20 border border-blue-500 rounded-xl p-4"
                >
                  {course}
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-5">Student Reviews</h2>

            <div className="space-y-4">
              {college.reviews.map((review, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300"
                >
                  ⭐ {review}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          <div className="sticky top-10 bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">Take Next Step</h2>

            <button className="w-full bg-blue-600 py-3 rounded-xl hover:bg-blue-700">
              Apply Now
            </button>

            <button className="w-full mt-4 bg-green-600 py-3 rounded-xl hover:bg-green-700">
              Compare College
            </button>
          </div>

          {/* Similar */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">Similar Colleges</h2>

            <div className="space-y-3 text-gray-300">
              <p>NIT Trichy</p>
              <p>IIT Bombay</p>
              <p>BITS Pilani</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Card({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <div>{icon}</div>
      <p className="text-gray-400 mt-3">{title}</p>
      <h3 className="text-3xl font-bold mt-1">{value}</h3>
    </div>
  );
}