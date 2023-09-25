import { getCases } from "@/sanity/sanity-utils";

export default async function sanity() {
  const cases = await getCases();

  return (
    <div className="ml-[10rem] flex flex-col">
      <h1>My Cases</h1>
      <div className="border">
        {cases.map((cases) => (
          <div key={cases._id}>{cases.bg}</div>
        ))}
      </div>
    </div>
  );
}
