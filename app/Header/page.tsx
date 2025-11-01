import Profile from "@/app/Profile";
import Stats from "@/app/Stats";

export default async function Header() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/profile`);
  const profile = await response.json();
  return (
    <header className="text-white py-12 relative">
      {/* BG elements */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] blur-[100px] -z-10"></div>
      <div className="absolute top-0 right-0 w-[700px] h-full rounded-full bg-gradient-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-[20%] w-[500px] h-full rounded-full bg-gradient-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] blur-[100px] -z-10"></div>
      <Profile profile={profile} />
      {/* Stats */}
      <Stats />
    </header>
  );
}
