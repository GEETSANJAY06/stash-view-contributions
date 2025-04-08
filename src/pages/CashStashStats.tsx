
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ContributionChart from "@/components/ContributionChart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Helper function to generate random contribution data
const generateContributionData = () => {
  const data: number[][] = [];
  
  // Generate data for 52 weeks (1 year)
  for (let week = 0; week < 52; week++) {
    const weekData: number[] = [];
    
    // Generate data for 7 days in each week
    for (let day = 0; day < 7; day++) {
      // Random value between 0 and 4
      const value = Math.floor(Math.random() * 5);
      weekData.push(value);
    }
    
    data.push(weekData);
  }
  
  return data;
};

// Sample data for this year and last year
const thisYearData = generateContributionData();
const lastYearData = generateContributionData();

// Sample statistics data
const statisticsData = {
  totalSavings: "$12,450.75",
  monthlyAverage: "$1,037.56",
  topDay: "Wednesday",
  streakDays: 14,
  yearlyGrowth: "8.2%"
};

const CashStashStats = () => {
  const [selectedYear, setSelectedYear] = useState<"thisYear" | "lastYear">("thisYear");

  return (
    <div className="min-h-screen bg-finmate-dark">
      <Navbar />
      <div className="container px-4 md:px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <Link to="/" className="text-finmate-blue hover:underline mb-2 inline-block">
              &larr; Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">Cash Stash Stats</h1>
            <p className="text-gray-300 mt-2">
              Track your savings and spending habits over time with detailed visualizations
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-[#1E2435] border-none text-white">
            <CardHeader>
              <CardTitle>Total Savings</CardTitle>
              <CardDescription className="text-gray-300">Current balance</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-finmate-blue">{statisticsData.totalSavings}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#1E2435] border-none text-white">
            <CardHeader>
              <CardTitle>Monthly Average</CardTitle>
              <CardDescription className="text-gray-300">Savings per month</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-finmate-blue">{statisticsData.monthlyAverage}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#1E2435] border-none text-white">
            <CardHeader>
              <CardTitle>Current Streak</CardTitle>
              <CardDescription className="text-gray-300">Consecutive saving days</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-finmate-blue">{statisticsData.streakDays} days</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#1E2435] border-none text-white mb-8">
          <CardHeader>
            <CardTitle>Savings Activity</CardTitle>
            <CardDescription className="text-gray-300">Your saving contributions over time</CardDescription>
            <div className="pt-4">
              <Tabs defaultValue="thisYear" onValueChange={(value) => setSelectedYear(value as any)}>
                <TabsList className="bg-[#131722]">
                  <TabsTrigger value="thisYear">This Year</TabsTrigger>
                  <TabsTrigger value="lastYear">Last Year</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent>
            <ContributionChart 
              data={selectedYear === "thisYear" ? thisYearData : lastYearData} 
            />
          </CardContent>
        </Card>

        <Card className="bg-[#1E2435] border-none text-white">
          <CardHeader>
            <CardTitle>Savings Insights</CardTitle>
            <CardDescription className="text-gray-300">Key metrics about your saving habits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-[#131722] rounded-lg">
                <h3 className="text-gray-300 mb-2">Top Saving Day</h3>
                <p className="text-xl font-medium">{statisticsData.topDay}</p>
              </div>
              <div className="p-4 bg-[#131722] rounded-lg">
                <h3 className="text-gray-300 mb-2">Yearly Growth</h3>
                <p className="text-xl font-medium text-green-500">{statisticsData.yearlyGrowth}</p>
              </div>
              <div className="p-4 bg-[#131722] rounded-lg">
                <h3 className="text-gray-300 mb-2">Consistency Score</h3>
                <p className="text-xl font-medium">8.4/10</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CashStashStats;
