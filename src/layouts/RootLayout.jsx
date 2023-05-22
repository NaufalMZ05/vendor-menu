import SideBar from "./sidebar/SideBar";
import TopBar from "./sidebar/TopBar";

function RootLayout({ children }) {
  return (
    <div className="relative flex">
      <TopBar />
      <div className="flex flex-1">
        <SideBar />
        <main className="max-w-full flex-1 mt-[7rem] ml-[2rem]">
          {children}
        </main>
      </div>
    </div>
  );
}

export default RootLayout;
