import SectionOne from "./components/SectionOne/SectionOne";
import SectionTwo from "./components/SectionTwo/SectionTwo";

export default function Home() {
  return (
    <main>
      <SectionOne />
      <SectionTwo />
      <p className="text-center mt-10">Next Component</p>
    </main>
  );
}
