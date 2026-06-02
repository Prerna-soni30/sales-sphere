import DashboardLayout from "@/components/dashboard-layout";

const deals = [
  { id: 1, name: "Acme Corp - Enterprise Plan", stage: "Prospect", value: "$25,000", probability: "20%", closeDate: "2024-02-15", owner: "John Doe" },
  { id: 2, name: "Tech Solutions - Basic Plan", stage: "Proposal", value: "$8,500", probability: "60%", closeDate: "2024-02-10", owner: "Jane Smith" },
  { id: 3, name: "Global Industries - Premium", stage: "Negotiation", value: "$50,000", probability: "80%", closeDate: "2024-02-05", owner: "Mike Johnson" },
  { id: 4, name: "Startup Inc - Starter Plan", stage: "Closed Won", value: "$4,200", probability: "100%", closeDate: "2024-01-28", owner: "Sarah Williams" },
  { id: 5, name: "Digital Labs - Annual", stage: "Closed Lost", value: "$12,000", probability: "0%", closeDate: "2024-01-20", owner: "Alex Brown" },
];

const stages = ["Prospect", "Proposal", "Negotiation", "Closed Won", "Closed Lost"];

const getStageColor = (stage: string) => {
  return stage === "Prospect" ? "bg-blue-100 text-blue-800" :
         stage === "Proposal" ? "bg-amber-100 text-amber-800" :
         stage === "Negotiation" ? "bg-purple-100 text-purple-800" :
         stage === "Closed Won" ? "bg-green-100 text-green-800" :
         "bg-red-100 text-red-800";
};

export default function DealsPage() {
  return (
    <DashboardLayout>
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 gap-3">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Deals Pipeline</h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full sm:w-auto">Add Deal</button>
        </div>

        {/* Pipeline Summary - Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 mb-4 md:mb-6">
          {stages.map((stage) => (
            <div key={stage} className="bg-white dark:bg-gray-800 rounded-lg p-3 md:p-4 text-center shadow mobile-card">
              <p className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400">{stage}</p>
              <p className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {deals.filter(d => d.stage === stage).length}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deal Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stage</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Value</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Probability</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Close Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Owner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {deals.map((deal) => (
                  <tr key={deal.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100">{deal.name}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 text-xs rounded-full ${getStageColor(deal.stage)}`}>
                        {deal.stage}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right text-sm font-medium text-gray-900 dark:text-gray-100">{deal.value}</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-600 dark:text-gray-400">{deal.probability}</td>
                    <td className="px-4 py-3 text-right text-sm text-gray-600 dark:text-gray-400">{deal.closeDate}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{deal.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="block md:hidden">
            <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
              <p className="text-xs font-medium text-gray-500">Deals ({deals.length})</p>
            </div>
            <div className="p-4">
              {deals.map((deal) => (
                <div key={deal.id} className="mobile-table-row mb-3 last:mb-0">
                  <div className="mobile-table-cell">
                    <span className="text-xs font-medium text-gray-500">Deal</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{deal.name}</span>
                  </div>
                  <div className="mobile-table-cell">
                    <span className="text-xs font-medium text-gray-500">Stage</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${getStageColor(deal.stage)}`}>
                      {deal.stage}
                    </span>
                  </div>
                  <div className="mobile-table-cell">
                    <span className="text-xs font-medium text-gray-500">Value</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{deal.value}</span>
                  </div>
                  <div className="mobile-table-cell">
                    <span className="text-xs font-medium text-gray-500">Probability</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{deal.probability}</span>
                  </div>
                  <div className="mobile-table-cell">
                    <span className="text-xs font-medium text-gray-500">Close Date</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{deal.closeDate}</span>
                  </div>
                  <div className="mobile-table-cell">
                    <span className="text-xs font-medium text-gray-500">Owner</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{deal.owner}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}