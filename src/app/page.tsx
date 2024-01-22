import CodeSection from "../components/CodeSection/CodeSection";
import ExerciseSection from "../components/ExerciseSection";

export default function Home() {
  return (
    <main className="flex max-h-[100%]">
      <ExerciseSection />
      <CodeSection />
    </main>
  );
}
