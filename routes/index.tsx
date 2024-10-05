import { useSignal } from "@preact/signals";
import Dashboard from "./../components/dashboard.tsx";

export default function Home() {
  const count = useSignal(5);
  return (
    <div class="px-4 py-1 mx-auto bg-sky-100">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-xl font-bold">Welcome to IS</h1>
        <Dashboard></Dashboard>
        </div>
    </div>
  );
}
