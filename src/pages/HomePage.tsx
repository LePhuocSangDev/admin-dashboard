import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import AdminStatistics from "../components/AdminStatistics";
import Chart from "../components/Chart";
import Widget from "../components/Widget";

const HomePage = () => {
  return (
    <>
      <Stack spacing={2}>
        <AdminStatistics />
        <Stack direction="row" spacing={2}>
          <Widget />
          <Widget />
          <Widget />
        </Stack>
      </Stack>
      <Chart />
    </>
  );
};

export default HomePage;
