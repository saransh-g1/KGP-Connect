import JobCard from "@/components/jobboard/JobCard";
import { Job } from "@/types";
import Sidebar from "@/components/Sidebar";
import Header from "../../../components/Nav";

export default async function JobBoard() {
  const res = await fetch("/api/jobboard", {
    method: "GET",
  });
  const jobs = await res.json();
  console.log(jobs);

  return (
    <>
      <div className="flex pl-40 py-3 bg-gray-100">
        <Header />
        <div className="hidden lg:block w-60 min-w-[240px]">
          <Sidebar />
        </div>
        <div className="mt-16 ml-8">
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-start ml-7 gap-6 p-6">
              {jobs ??
                jobs.map((job: Job) => <JobCard key={job.id} {...job} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";
