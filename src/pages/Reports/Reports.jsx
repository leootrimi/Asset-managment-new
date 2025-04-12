import React from "react";
import CalendarChart from "./Components/CalendarChart";
import RoundedChart from "./Components/RoundedChart";
import RoundedChartSecond from "./Components/RoundedChartSecond";
import LineChart from "./Components/LineChart";
import data from './ExampleData'
import { roundedChartData, roundedChartDataSecond } from '/src/pages/Reports/RoundedChartData.js';
import lineChartData from "./LineChartData";
import { PrinterIcon } from "@heroicons/react/24/outline";


export default function Reports() {
    return (
        <div className="space-y-4 p-2">
            <div className="flex justify-between">
                <h1 className="font-medium text-xl">Reports of collected items</h1>
                <button
                    type="button"
                    className="rounded-full flex items-center space-x-2 bg-indigo-600 py-2.5 px-3  text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    <PrinterIcon className="size-5" />
                    <h6>Print page</h6>
                </button>
            </div>
            <div className="w-full border-t border-gray-300" />
            <h1 className="font-medium text-gray-500">Equipments assigned for a year</h1>
            <CalendarChart data={data} />
            <div className="w-full border-t border-gray-300" />
            <h1 className="font-medium text-gray-500">Equipments assigned for a year</h1>
            <div className="flex flex-col sm:flex-row">
                <RoundedChart data={roundedChartData} />
                <RoundedChartSecond data={roundedChartDataSecond} />
            </div>
            <div className="w-full border-t border-gray-300" />
            <h1 className="font-medium text-gray-500">Ranking equipments</h1>
            <LineChart data={lineChartData} />
        </div>
    );
};