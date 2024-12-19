import { useSession } from "next-auth/react";
import { useTheme } from "../components/ThemeContext"; // Import useTheme(custom) hook
import PaginationTable from "@/components/Pagination";
import { useRouter } from "next/router";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  CategoryScale,
  Legend,
  LinearScale,
  PointElement,
  LineElement,
  Decimation
} from "chart.js";
import Button from "../components/Button";
// import DataTable from "@/components/pagination";
import { generateMockData } from "../data/mockData";
import { useState } from "react";
import { toggle } from "@nextui-org/theme";

ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Decimation);

const Dashboard = () => {
  const router = useRouter();
  const { data: session } = useSession(); // Access session data
  const { theme, toggleTheme } = useTheme(); // Access theme and toggle function
  const [isDispChart, setIsDispChart] = useState(false)

  const totalPoints = 100;
  // Generate mock data
  const mockData = generateMockData(totalPoints);

  const chart_data = {
    labels: mockData.labels,
    datasets: [
      {
        label: "Sales",
        data: mockData.data,
        borderColor: "rgba(75,192,192,255)",
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          color: theme === "dark" ? "#ffffff" : "#000000",
        },
      },
      y: {
        grid: {
          color: theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          color: theme === "dark" ? "#ffffff" : "#000000",
        },
      },
    },
    plugins: {
      Decimation: {
        enabled: true,
        algorithm: 'lttb', // 'lttb' (Largest Triangle Three Buckets) is efficient for large datasets
        samples: 500, // Number of data points to keep
      },
      legend: {
        labels: {
          color: theme === "dark" ? "#ffffff" : "#000000",
        },
      },
      tooltip: {
        titleColor: theme === "dark" ? "#ffffff" : "#000000",
        bodyColor: theme === "dark" ? "#ffffff" : "#000000",
      },
    },
  };

  const handleSignOut = () => {
    router.push("/login");
  };

  const toggleDisp = () => {
    setIsDispChart(isDispChart ? false : true);
  };

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div
        className={`w-full max-w-4xl p-6 border rounded-lg shadow-lg ${
          theme === "dark" ? "text-white border-gray-700" : "text-black border-gray-300"
        }`}
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          Welcome, {session.user.email || "Guest"}!
        </h1>
        {
          isDispChart ?
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
            <div className="w-full h-[400px]">
              <Line data={chart_data} options={chartOptions} />
            </div>
          </div> 
          :
          <PaginationTable />
        }
        <div className="flex justify-center gap-4">
          <Button text="Toggle Theme" onClick={toggleTheme} />
          <Button text="Sign Out" onClick={handleSignOut} style="bg-red-500 text-white" />
          <Button text={ isDispChart ? "See Employees" : "See Chart"} onClick={toggleDisp} style="bg-green-800 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
