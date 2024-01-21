import CodeSection from "./components/CodeSection";
import ExerciseSection from "./components/ExerciseSection";
import NavBar from "./components/NavBar";



export default function Home() {
  return (
    <main className="flex max-h-[100%]">
        <ExerciseSection />
        <CodeSection />
    </main>
  );
}
