import ResearchAreas from "./ResearchAreas";

export default async function page() {
  const response = await fetch("http://127.0.0.1:5000/research-areas");
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }
  const researchAreas = await response.json();
  return <ResearchAreas researchAreas={researchAreas} />;
}
