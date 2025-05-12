"use client"

import { useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"

const teamData = [
  { name: "Engineering", employees: 42, color: "#3b82f6" },
  { name: "Marketing", employees: 18, color: "#10b981" },
  { name: "Sales", employees: 24, color: "#f59e0b" },
  { name: "Design", employees: 16, color: "#8b5cf6" },
  { name: "Product", employees: 12, color: "#ec4899" },
  { name: "Customer Support", employees: 20, color: "#6366f1" },
]

const departmentData = [
  { name: "Technology", value: 58, color: "#3b82f6" },
  { name: "Operations", value: 32, color: "#10b981" },
  { name: "Business", value: 42, color: "#f59e0b" },
  { name: "Creative", value: 28, color: "#8b5cf6" },
]

const growthData = [
  { month: "Jan", employees: 110 },
  { month: "Feb", employees: 115 },
  { month: "Mar", employees: 118 },
  { month: "Apr", employees: 125 },
  { month: "May", employees: 132 },
  { month: "Jun", employees: 138 },
  { month: "Jul", employees: 142 },
  { month: "Aug", employees: 145 },
  { month: "Sep", employees: 148 },
  { month: "Oct", employees: 152 },
  { month: "Nov", employees: 158 },
  { month: "Dec", employees: 162 },
]

const teamCompositionData = [
  {
    month: "Jan",
    Engineering: 38,
    Marketing: 15,
    Sales: 20,
    Design: 12,
    Product: 10,
    "Customer Support": 15,
  },
  {
    month: "Feb",
    Engineering: 38,
    Marketing: 16,
    Sales: 21,
    Design: 13,
    Product: 10,
    "Customer Support": 17,
  },
  {
    month: "Mar",
    Engineering: 39,
    Marketing: 16,
    Sales: 22,
    Design: 14,
    Product: 10,
    "Customer Support": 17,
  },
  {
    month: "Apr",
    Engineering: 40,
    Marketing: 17,
    Sales: 22,
    Design: 15,
    Product: 11,
    "Customer Support": 18,
  },
  {
    month: "May",
    Engineering: 41,
    Marketing: 17,
    Sales: 23,
    Design: 15,
    Product: 11,
    "Customer Support": 19,
  },
  {
    month: "Jun",
    Engineering: 42,
    Marketing: 18,
    Sales: 24,
    Design: 16,
    Product: 12,
    "Customer Support": 20,
  },
]

const skillsData = [
  {
    subject: "Technical",
    Engineering: 9,
    Marketing: 4,
    Sales: 3,
    Design: 7,
    Product: 8,
    fullMark: 10,
  },
  {
    subject: "Communication",
    Engineering: 6,
    Marketing: 9,
    Sales: 10,
    Design: 7,
    Product: 8,
    fullMark: 10,
  },
  {
    subject: "Creativity",
    Engineering: 7,
    Marketing: 8,
    Sales: 5,
    Design: 10,
    Product: 7,
    fullMark: 10,
  },
  {
    subject: "Leadership",
    Engineering: 7,
    Marketing: 6,
    Sales: 8,
    Design: 5,
    Product: 9,
    fullMark: 10,
  },
  {
    subject: "Teamwork",
    Engineering: 8,
    Marketing: 7,
    Sales: 8,
    Design: 8,
    Product: 8,
    fullMark: 10,
  },
]

const ReportsPage = () => {
  const [dateRange, setDateRange] = useState("last6Months")

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Team Analytics</h1>
            <p className="text-gray-500 mt-1">Comprehensive overview of team performance and distribution</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="last30Days">Last 30 Days</option>
              <option value="last3Months">Last 3 Months</option>
              <option value="last6Months">Last 6 Months</option>
              <option value="lastYear">Last Year</option>
              <option value="allTime">All Time</option>
            </select>
            <button className="bg-blue-600 text-white rounded-md px-4 py-2 text-sm hover:bg-blue-700 transition-colors">
              Export
            </button>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Team Distribution Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">Team Distribution</h2>
            <p className="text-sm text-gray-500 mb-4">Number of employees across different teams</p>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={teamData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      border: "1px solid #f0f0f0",
                      borderRadius: "4px",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="employees" name="Employees" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Department Breakdown Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">Department Breakdown</h2>
            <p className="text-sm text-gray-500 mb-4">Distribution of employees by department</p>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {departmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [`${value} employees`, "Count"]}
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      border: "1px solid #f0f0f0",
                      borderRadius: "4px",
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Employee Growth Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">Employee Growth</h2>
            <p className="text-sm text-gray-500 mb-4">Monthly employee count over the past year</p>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={growthData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={["dataMin - 10", "dataMax + 10"]} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      border: "1px solid #f0f0f0",
                      borderRadius: "4px",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="employees"
                    name="Total Employees"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Team Composition Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">Team Composition Over Time</h2>
            <p className="text-sm text-gray-500 mb-4">Changes in team sizes over the past 6 months</p>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={teamCompositionData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      border: "1px solid #f0f0f0",
                      borderRadius: "4px",
                    }}
                  />
                  <Legend />
                  <Area type="monotone" dataKey="Engineering" stackId="1" stroke="#3b82f6" fill="#3b82f6" />
                  <Area type="monotone" dataKey="Marketing" stackId="1" stroke="#10b981" fill="#10b981" />
                  <Area type="monotone" dataKey="Sales" stackId="1" stroke="#f59e0b" fill="#f59e0b" />
                  <Area type="monotone" dataKey="Design" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" />
                  <Area type="monotone" dataKey="Product" stackId="1" stroke="#ec4899" fill="#ec4899" />
                  <Area type="monotone" dataKey="Customer Support" stackId="1" stroke="#6366f1" fill="#6366f1" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Skills Distribution Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6 md:col-span-2">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">Skills Distribution by Team</h2>
            <p className="text-sm text-gray-500 mb-4">Average skill ratings across different teams</p>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 10]} />
                  <Radar name="Engineering" dataKey="Engineering" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                  <Radar name="Marketing" dataKey="Marketing" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                  <Radar name="Sales" dataKey="Sales" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
                  <Radar name="Design" dataKey="Design" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
                  <Radar name="Product" dataKey="Product" stroke="#ec4899" fill="#ec4899" fillOpacity={0.6} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      border: "1px solid #f0f0f0",
                      borderRadius: "4px",
                    }}
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportsPage
