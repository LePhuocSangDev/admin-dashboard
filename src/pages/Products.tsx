import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { AccountCircle, DeleteOutline, Search } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

interface Column {
  id: "id" | "title" | "action" | "status" | "price" | "image";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
  renderCell?: (value: string) => void;
}

const columns: readonly Column[] = [
  { id: "id", label: "ID", minWidth: 170 },
  { id: "image", label: "IMAGE", minWidth: 100 },
  { id: "title", label: "TITLE", minWidth: 100 },
  {
    id: "price",
    label: "PRICE($)",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "action",
    label: "ACTION",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
    renderCell: (params) => {
      return (
        <>
          <RouterLink to={"/product/:123"}>
            <button className="productListEdit">Edit</button>
          </RouterLink>
          <DeleteOutline className="productListDelete" />
        </>
      );
    },
  },
  {
    id: "status",
    label: "STATUS",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  id: string;
  image: string;
  status: string;
  price: number;
  title: string;
  action: number;
}

function createData(
  title: string,
  image: string,
  id: string,
  status: string,
  action: number,
  price: number
): Data {
  return { title, image, id, status, action, price };
}

const rows = [
  createData(
    "Camera",
    "https://images.unsplash.com/photo-1662640657011-84cab8b5418c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "13456",
    "pending",
    123,
    50
  ),
  createData(
    "Camera",
    "https://images.unsplash.com/photo-1662640657011-84cab8b5418c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "134567",
    "pending",
    123,
    50
  ),
  createData(
    "Camera",
    "https://images.unsplash.com/photo-1662640657011-84cab8b5418c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "13456",
    "pending",
    123,
    50
  ),
  createData(
    "Camera",
    "https://images.unsplash.com/photo-1662640657011-84cab8b5418c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "13456",
    "pending",
    123,
    50
  ),
  createData(
    "Camera",
    "https://images.unsplash.com/photo-1662640657011-84cab8b5418c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "13456",
    "pending",
    123,
    50
  ),
  createData(
    "Camera",
    "https://images.unsplash.com/photo-1662640657011-84cab8b5418c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "13456",
    "pending",
    123,
    50
  ),
  createData(
    "Camera",
    "https://images.unsplash.com/photo-1662640657011-84cab8b5418c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "13456",
    "pending",
    123,
    50
  ),
  createData(
    "Camera",
    "https://images.unsplash.com/photo-1662640657011-84cab8b5418c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "13456",
    "pending",
    123,
    50
  ),
  createData(
    "Camera",
    "https://images.unsplash.com/photo-1662640657011-84cab8b5418c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "13456",
    "pending",
    123,
    50
  ),
  createData(
    "Camera",
    "https://images.unsplash.com/photo-1662640657011-84cab8b5418c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "13456",
    "pending",
    123,
    50
  ),
  createData(
    "Camera",
    "https://images.unsplash.com/photo-1662640657011-84cab8b5418c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "13456",
    "pending",
    123,
    50
  ),
];

export default function Products() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Product - Management
      </Typography>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px",
          }}
        >
          <Button
            variant="contained"
            component={RouterLink}
            to="/product/create"
            size="small"
            color="success"
          >
            Create Product
          </Button>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <SearchIcon
              sx={{
                color: "black",
                mr: "4px",
              }}
            ></SearchIcon>

            <TextField id="input-with-sx" label="Search" variant="standard" />
          </Box>
        </Box>

        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align="center"
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow
                    key={row.title}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">
                      <img
                        src={row.image}
                        alt=""
                        style={{ width: "100%", height: "10vh" }}
                      />
                    </TableCell>
                    <TableCell align="center">{row.title}</TableCell>
                    <TableCell align="center">{row.price}</TableCell>
                    <TableCell align="center">{row.status}</TableCell>
                    <TableCell align="center">
                      <Button
                        component={RouterLink}
                        to="/product/:id"
                        variant="contained"
                        size="small"
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        sx={{ ml: "4px" }}
                      >
                        X
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
