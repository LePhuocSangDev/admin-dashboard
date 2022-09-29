import { Box } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { UserData } from "../Data";

export default function Chart() {
  return (
    <Box sx={{ width: "90%", margin: "auto" }}>
      <h3 className="chartTitle">Chart</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={UserData}>
          <XAxis dataKey="year" stroke="#5550bd" />
          <Line type="monotone" dataKey="userGain" stroke="#5550bd" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
