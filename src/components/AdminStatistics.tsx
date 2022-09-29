import { Stack, Typography } from "@mui/material";
import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Box } from "@mui/system";

const AdminStatistics = () => {
  return (
    <Stack
      spacing={2}
      sx={{
        p: "16px",
        border: "1px solid rgba(0,0,0,0.2)",
        borderRadius: "10px",
        mt: "16px",
      }}
    >
      <Typography variant="h5">Statistics</Typography>
      <Typography variant="body1">Total 48.5% growth 😎 this month</Typography>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" spacing={2} alignItems="center">
          <TrendingUpIcon
            sx={{
              background: "purple",
              color: "white",
              height: "50px",
              width: "50px",
              padding: "4px",
              borderRadius: "5px",
            }}
          />
          <Box>
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", color: "#777777" }}
            >
              Sales
            </Typography>
            <Typography variant="body1">245K</Typography>
          </Box>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <TrendingUpIcon
            sx={{
              background: "green",
              color: "white",
              height: "50px",
              width: "50px",
              padding: "4px",
              borderRadius: "5px",
            }}
          />
          <Box>
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", color: "#777777" }}
            >
              Customers
            </Typography>
            <Typography variant="body1">245K</Typography>
          </Box>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <TrendingUpIcon
            sx={{
              background: "orange",
              color: "white",
              height: "50px",
              width: "50px",
              padding: "4px",
              borderRadius: "5px",
            }}
          />
          <Box>
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", color: "#777777" }}
            >
              Products
            </Typography>
            <Typography variant="body1">245K</Typography>
          </Box>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <TrendingUpIcon
            sx={{
              background: "skyblue",
              color: "white",
              height: "50px",
              width: "50px",
              padding: "4px",
              borderRadius: "5px",
            }}
          />
          <Box>
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", color: "#777777" }}
            >
              Revenue
            </Typography>
            <Typography variant="body1">245K</Typography>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AdminStatistics;
