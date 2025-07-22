import CodeSnippets from "../components/code-snippets";
import { getGeneralStats } from "../services/endpointRequests";
import { useSuspenseQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";


const Dashboard = () => {

  const { data: generalStats } = useSuspenseQuery({
    queryKey: ["generalStats"],
    queryFn: getGeneralStats,
    select: (res) => res.stats,
  });


  const stats = [
    {
      title: "Total API Calls",
      value: generalStats.total_calls,
    },
    {
      title: "Total Projects",
      value: generalStats.total_projects,
    },
    {
      title: "Total Tokens Used",
      value: `${generalStats.total_tokens}PAT`,
    },
    {
      title: "Total Monthly Cost",
      value: `$${generalStats.total_cost.toFixed(2)}`,
    },
  ];

  const { user } = useAuth();

  return (
    <section>
      <div>
        <h1 className="text-4xl font-semibold mb-6">Welcome, <span className="capitalize">{user.name.split(' ')[0]}</span></h1>
        {/* <p className="text-sm text-gray-500 mt-1">
          Here is your Tokari Core Dashboard. Start Integrating AI into your
          projects.
        </p> */}
      </div>

      <div className="grid sm:grid-cols-4 gap-5 mt-3">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="w-full shadow-xl border border-black p-8 py-10
                 flex flex-col gap-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-none"
          >
            <h2>{stat.title}</h2>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Code Snippet */}
      <div className="shadow-xl">
        <CodeSnippets 
        project={{
          api_key: "Your api key here",
          origin: "https://your-domain.com"
        }}
         />
      </div>
    </section>
  );
};

export default Dashboard;
