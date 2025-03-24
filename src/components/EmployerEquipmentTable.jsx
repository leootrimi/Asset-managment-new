import * as React from 'react';
import {
  Box, Table, TableBody, TableCell, TableContainer,
  TableHead, TablePagination, TableRow, Paper, Typography,
  IconButton, Tooltip
} from '@mui/material';
import TableSortLabel from '@mui/material/TableSortLabel';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

const rows = [
  { id: 1, name: 'Laptop', type: "Macbook M1", price: 1123.7, tag: "MT-010-00", Serial: 4.3 },
  { id: 2, name: 'Monitor', type: "Dell", price: 125.0, tag: "MT-010-01", Serial: 4.9 },
  { id: 3, name: 'Mouse', type: "Logitech", price: 16.0, tag: "MT-010-02", Serial: 6.0 },
  { id: 4, name: 'Headphones', type: "Samsung", price: 66.0, tag: "MT-010-03", Serial: 4.0 },
  { id: 1, name: 'Laptop', type: "Macbook M2", price: 2123.7, tag: "MT-010-00", Serial: 4.3 },
  { id: 2, name: 'Monitor', type: "Asus", price: 125.0, tag: "MT-010-01", Serial: 4.9 },
  { id: 3, name: 'Mouse', type: "Logitech", price: 16.0, tag: "MT-010-02", Serial: 6.0 },
  { id: 4, name: 'Headphones', type: "Apple", price: 66.0, tag: "MT-010-03", Serial: 4.0 },
];

const headCells = [
  { id: 'name', label: 'Equipment', numeric: false },
  { id: 'type', label: 'Type', numeric: true },
  { id: 'price', label: 'Price', numeric: true },
  { id: 'tag', label: 'Tag', numeric: true },
  { id: 'Serial', label: 'Serial No.', numeric: true },
];

export default function EmployerEquipmentTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('type');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }}>
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">Equipment Table</Typography>
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-label="enhanced table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    align={headCell.numeric ? 'right' : 'left'}
                  >
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : 'asc'}
                      onClick={(event) => handleRequestSort(event, headCell.id)}
                    >
                      {headCell.label}
                      {orderBy === headCell.id ? (
                        <Box component="span" sx={visuallyHidden}>
                          {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                ))}
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .sort((a, b) => {
                  if (orderBy === 'name') {
                    return order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
                  }
                  return order === 'asc' ? a[orderBy] - b[orderBy] : b[orderBy] - a[orderBy];
                })
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow
                    key={row.id}
                    hover
                    sx={{
                      backgroundColor: index % 2 === 0 ? '#fafafa' : 'white',
                      '&:hover': { backgroundColor: '#e0f7fa' },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.type}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">{row.tag}</TableCell>
                    <TableCell align="right">{row.Serial}</TableCell>
                    <TableCell align="right">
                      <Tooltip title="Delete">
                        <IconButton>
                          <DeleteIcon color="error" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
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
