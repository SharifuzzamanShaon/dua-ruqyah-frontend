import Categories from "@/components/Categories";
import MainMenuBar from "@/components/MainMenuBar";

export default function Home() {
  return (
    <div className="flex w-full h-screen">
      <div className="grid grid-cols-12 gap-4 w-full">
        <div className="col-span-12 sm:col-span-1 bg-gray-100 text-center">
          <MainMenuBar />
        </div>
        <div className="col-span-12 sm:col-span-2 bg-gray-300 my-5">
          DUA PAGE
          <Categories></Categories>
        </div>
        <div className="col-span-12 sm:col-span-6 bg-gray-400">50%</div>
        <div className="col-span-12 sm:col-span-2 bg-gray-600">20% fvef</div>
      </div>
    </div>
  );
}
