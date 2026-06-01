'use client';

export function LineChart() {
  const data = [
    { month: "Jan", sales: 35 },
    { month: "Feb", sales: 42 },
    { month: "Mar", sales: 38 },
    { month: "Apr", sales: 45 },
    { month: "May", sales: 52 },
    { month: "Jun", sales: 48 },
  ];

  const maxValue = Math.max(...data.map(d => d.sales));

  return (
    <div className="h-64 relative">
      <div className="absolute inset-0 flex items-end justify-between px-2 pb-8">
        {data.map((item, index) => (
          <div key={item.month} className="flex flex-col items-center flex-1">
            <div 
              className="w-8 bg-gradient-to-t from-blue-500 to-indigo-400 rounded-t transition-all duration-500"
              style={{ height: `${(item.sales / maxValue) * 200}px` }}
            ></div>
            <span className="text-xs text-gray-500 mt-2">{item.month}</span>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200 dark:bg-gray-600"></div>
      <div className="absolute top-0 left-0 w-px h-full bg-gray-200 dark:bg-gray-600"></div>
    </div>
  );
}

export function BarChart() {
  const stages = [
    { name: "Prospect", deals: 12, color: "bg-blue-500" },
    { name: "Proposal", deals: 18, color: "bg-amber-500" },
    { name: "Negotiation", deals: 15, color: "bg-purple-500" },
    { name: "Closed Won", deals: 8, color: "bg-green-500" },
  ];

  const maxDeals = Math.max(...stages.map(s => s.deals));

  return (
    <div className="h-64 flex items-end justify-between px-4 pb-8 space-x-4">
      {stages.map((stage) => (
        <div key={stage.name} className="flex-1 flex flex-col items-center">
          <div className="w-full flex items-end justify-center h-56">
            <div 
              className={`${stage.color} rounded-t w-12 transition-all duration-500`}
              style={{ height: `${(stage.deals / maxDeals) * 200}px` }}
            ></div>
          </div>
          <span className="text-xs text-gray-500 mt-2 text-center">{stage.name}</span>
          <span className="text-xs font-medium text-gray-600">{stage.deals} deals</span>
        </div>
      ))}
    </div>
  );
}