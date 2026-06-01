import DashboardLayout from "@/components/dashboard-layout";

const tasks = [
  { id: 1, title: "Follow up with John Smith", due: "2024-01-20", priority: "High", status: "Pending", assignee: "Jane Doe" },
  { id: 2, title: "Send proposal to Tech Solutions", due: "2024-01-21", priority: "Medium", status: "In Progress", assignee: "Mike Johnson" },
  { id: 3, title: "Schedule demo with Global Industries", due: "2024-01-22", priority: "Low", status: "Pending", assignee: "Sarah Wilson" },
  { id: 4, title: "Prepare quarterly report", due: "2024-01-25", priority: "High", status: "Pending", assignee: "Alex Brown" },
  { id: 5, title: "Call Acme Corp for check-in", due: "2024-01-19", priority: "Medium", status: "Completed", assignee: "John Doe" },
];

export default function TasksPage() {
  return (
    <DashboardLayout>
      <div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Tasks</h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Add Task</button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
            />
          </div>

          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Task</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assignee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Priority</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {tasks.map((task) => (
                <tr key={task.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">{task.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{task.assignee}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{task.due}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      task.priority === "High" ? "bg-red-100 text-red-800" :
                      task.priority === "Medium" ? "bg-amber-100 text-amber-800" :
                      "bg-green-100 text-green-800"
                    }`}>
                      {task.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      task.status === "Completed" ? "bg-green-100 text-green-800" :
                      task.status === "In Progress" ? "bg-blue-100 text-blue-800" :
                      "bg-gray-100 text-gray-800"
                    }`}>
                      {task.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}