import {
    ResponsiveContainer, BarChart, Bar, XAxis, YAxis,
    CartesianGrid, Tooltip,
} from "recharts";

import { Paper, Typography } from "@mui/material";

const data = [
    { month: "Jan", sales: 45 },
    { month: "Feb", sales: 70 },
    { month: "Mar", sales: 90 },
    { month: "Apr", sales: 60 },
    { month: "May", sales: 120 },
    { month: "Jun", sales: 95 },
];

function SalesChart() {
    return (
        <Paper sx={{ p: 3, mt: 4 }}>
            <Typography variant="h6" gutterBottom>
                Monthly Sales
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                        dataKey="sales"
                        fill="#1976d2"
                    />
                </BarChart>
            </ResponsiveContainer>
        </Paper>
    );
}

export default SalesChart;