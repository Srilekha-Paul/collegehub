import { colleges } from "@/data/colleges";

export default async function CollegePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const college = colleges.find((entry) => entry.id === id);

  if (!college) {
    return <div className="p-8">College not found</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">{college.name}</h1>
      <p>{college.location}</p>
      <p>Fees: {college.fees}</p>
      <p>Placement: {college.placement}</p>

      <h2 className="mt-5 text-2xl font-bold">Courses</h2>

      <ul className="mt-2">
        {college.courses.map((course, index) => (
          <li key={index}>- {course}</li>
        ))}
      </ul>
    </div>
  );
}
