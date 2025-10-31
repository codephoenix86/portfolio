import Books from "./Books";
export default async function page() {
  const response = await fetch("http://localhost:5000/books");
  const data = await response.json();
  return (
    <section className="px-[8%] lg:px-[16%] py-15">
      <Books data={data} />
    </section>
  );
}
