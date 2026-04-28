import { colleges } from "@/data/colleges";

export default function CollegePage({
  params,
}: {
  params: { id: string };
}) {
  const college = colleges.find((c) => c.id === params.id);

  if (!college) return <div className="p-8">College not found</div>;

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">{college.name}</h1>
      <p>{college.location}</p>
      <p>Fees: {college.fees}</p>
      <p>Placement: {college.placement}</p>

      <h2 className="text-2xl mt-5 font-bold">Courses</h2>

      <ul className="mt-2">
        {college.courses.map((course, i) => (
          <li key={i}>• {course}</li>
        ))}
      </ul>
    </div>
  );
}