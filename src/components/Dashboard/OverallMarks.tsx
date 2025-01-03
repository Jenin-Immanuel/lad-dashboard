"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import { FaGraduationCap } from "react-icons/fa";

const data = [
  { semester: "Sem 1", marks: 85 },
  { semester: "Sem 2", marks: 78 },
  { semester: "Sem 3", marks: 92 },
  { semester: "Sem 4", marks: 88 },
  { semester: "Sem 5", marks: 75 },
  { semester: "Sem 6", marks: 82 },
  { semester: "Sem 7", marks: 90 },
  { semester: "Sem 8", marks: 86 },
];

const average = data.reduce((acc, curr) => acc + curr.marks, 0) / data.length;

export const OverallMarks = () => {
  return (
    <div className="bg-white col-span-12 overflow-hidden rounded border border-stone-300">
      <div className="px-4 pt-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FaGraduationCap /> Overall Semester Performance
        </h3>
      </div>

      <div className="h-64 px-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="semester" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="marks" fill="#8884d8" name="Marks (%)" />
            <ReferenceLine y={average} stroke="red" strokeDasharray="3 3" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
