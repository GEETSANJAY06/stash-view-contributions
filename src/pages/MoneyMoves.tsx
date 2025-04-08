
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { Area, AreaChart, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { month: 'Jan', amount: 40 },
  { month: 'Feb', amount: 50 },
  { month: 'Mar', amount: 60 },
  { month: 'Apr', amount: 110 },
  { month: 'May', amount: 105 },
  { month: 'Jun', amount: 110 },
  { month: 'Jul', amount: 120 },
  { month: 'Aug', amount: 150 },
  { month: 'Sep', amount: 180 },
];

const expenseData = [
  { category: "College", amount: 800 },
  { category: "Rent", amount: 700 },
  { category: "Food", amount: 300 },
  { category: "Transport", amount: 150 },
];

const MoneyMoves = () => {
  return (
    <div className="min-h-screen bg-finmate-dark">
      <Navbar />
      <div className="container px-4 md:px-6 py-8">
        <Link to="/" className="text-finmate-blue hover:underline mb-2 inline-block">
          &larr; Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Money Moves</h1>
        
        <div className="bg-white text-black p-8 rounded-lg max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-4xl font-bold text-gray-900">Budget Planner</h2>
            <button className="text-blue-500 text-3xl">+</button>
          </div>
          
          <p className="text-lg text-gray-700 mb-10">Set your monthly income, tracck expenses, and manage savings.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Monthly Income Card */}
            <Card className="p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Monthly Income</h3>
              <p className="text-3xl font-bold text-right">$ 2,000</p>
            </Card>
            
            {/* Spending by Category Card */}
            <Card className="p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Spending by Category</h3>
              <div className="h-40">
                {expenseData.map((item, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">{item.category}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div 
                        className="bg-[#8c7af6] h-4 rounded-full" 
                        style={{ width: `${(item.amount / 800) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>0</span>
                  <span>200</span>
                  <span>400</span>
                  <span>600</span>
                  <span>800</span>
                </div>
              </div>
            </Card>
            
            {/* Expenses Card */}
            <Card className="p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Expenses</h3>
              <div className="space-y-3">
                {expenseData.map((expense, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{expense.category}</span>
                    <span className="font-semibold">${expense.amount}</span>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Monthly Savings Card */}
            <Card className="p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Monthly Savings</h3>
              <div className="h-40 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <Area 
                      type="monotone" 
                      dataKey="amount" 
                      stroke="#8c7af6" 
                      fillOpacity={1} 
                      fill="url(#colorAmount)" 
                    />
                    <XAxis hide={true} />
                    <YAxis hide={true} />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="absolute bottom-0 left-0 text-sm text-gray-500">
                  Savings goal
                </div>
              </div>
            </Card>
            
            {/* Monthly Savings Summary Card */}
            <Card className="p-6 shadow-sm border lg:col-span-2">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Monthly Savings</h3>
                <span className="text-xl font-bold">$50</span>
              </div>
              <div className="h-40 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Area 
                      type="monotone" 
                      dataKey="amount" 
                      stroke="#8c7af6" 
                      fillOpacity={1} 
                      fill="url(#colorSavings)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="absolute bottom-0 right-0 text-sm text-gray-500">
                  Months
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyMoves;
