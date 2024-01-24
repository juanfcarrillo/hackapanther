import CodeSection from "./components/CodeSection/CodeSection";
import ExerciseSection from "./components/ExerciseSection";

export default function ExercisePage({ params } : {params: {exerciseId: string}}) {
  return (
    <main className="flex min-h-0 max-h-[100%]">
      <ExerciseSection />
      <CodeSection />
    </main>
  );
}
