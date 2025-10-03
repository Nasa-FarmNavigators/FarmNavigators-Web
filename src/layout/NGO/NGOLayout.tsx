import { Outlet } from "react-router-dom";
import NGOSidebar from "./NGOSidebar";
import NGOHeader from "./NGOHeader";

export default function NGOLayout() {
  return (
    <div className="flex h-screen bg-gray-50">
      <NGOSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        <NGOHeader />
        
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}