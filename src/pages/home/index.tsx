import { Categories } from "../../components/Categories";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-blend-multiply bg-no-repeat bg-cover bg-center bg-chuck">
        <div className="flex justify-center">
          <h1 className="text-6xl font-bold text-slate-600 p-4">
            Chuck Norris Jokes
          </h1>
        </div>
        <div>
          <Categories />
        </div>
      </div>
    </>
  );
}
