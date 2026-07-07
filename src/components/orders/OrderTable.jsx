import { useState } from "react";
import {
    Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody,
    Box, Button, TextField, Chip, IconButton, Dialog, DialogTitle, DialogContent,
    DialogActions, Snackbar, Alert, Pagination
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function OrderTable() {
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    const [customer, setCustomer] = useState("");
    const [product, setProduct] = useState("");
    const [quantity, setQuantity] = useState("");
    const [status, setStatus] = useState("Pending");
    const [editingOrder, setEditingOrder] = useState(null);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [orders, setOrders] = useState([
        {
            id: 1001,
            customer: "Ravi",
            product: "iPhone 16",
            quantity: 2,
            total: 160000,
            status: "Delivered",
        },
        {
            id: 1002,
            customer: "Sai",
            product: "Dell Laptop",
            quantity: 1,
            total: 65000,
            status: "Pending",
        },
        {
            id: 1003,
            customer: "John",
            product: "Samsung Monitor",
            quantity: 3,
            total: 36000,
            status: "Cancelled",
        },
    ]);

    const getStatusColor = (status) => {
        switch (status) {
            case "Delivered":
                return "success";
            case "Pending":
                return "warning";
            case "Cancelled":
                return "error";
            default:
                return "default";
        }
    };
    const handleSave = () => {
        const newOrder = {
            id: orders.length + 1001,
            customer: customer,
            product: product,
            quantity: quantity,
            total: quantity * 50000,
            status: status
        };
        setOrders([...orders, newOrder]);
        setOpen(false);
        setCustomer("");
        setProduct("");
        setQuantity("");
        setStatus("Pending");
    };
    const handleEdit = (order) => {
        setEditingOrder(order);
        setCustomer(order.customer);
        setProduct(order.product);
        setQuantity(order.quantity);
        setStatus(order.status);
        setOpen(true);
    };
    const handleUpdate = () => {
        const updatedOrders = orders.map((order) =>
            order.id === editingOrder.id
                ? {
                    ...order,
                    customer: customer,
                    product: product,
                    quantity: quantity,
                    total: quantity * 50000,
                    status: status
                }
                : order
        );
        setOrders(updatedOrders);
        setOpen(false);
        setEditingOrder(null);
        setCustomer("");
        setProduct("");
        setQuantity("");
        setStatus("Pending");
    };
    const handleDelete = (id) => {
        setDeleteId(id);
        setDeleteOpen(true);
    };
    const confirmDelete = () => {
        const updatedOrders = orders.filter(
            (order) => order.id !== deleteId
        );
        setOrders(updatedOrders);
        setDeleteOpen(false);
        setDeleteId(null);
    };

    return (
        <>
            <Typography variant="h4" gutterBottom>
                Orders
            </Typography>

            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
            >
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => setOpen(true)}
                >
                    Add Order
                </Button>

                <TextField
                    label="Search Order"
                    size="small"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Box>

            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Order ID</TableCell>
                            <TableCell>Customer</TableCell>
                            <TableCell>Product</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {orders
                            .filter((order) =>
                                order.customer
                                    .toLowerCase()
                                    .includes(search.toLowerCase())
                            )
                            .map((order) => (
                                <TableRow key={order.id}>
                                    <TableCell>{order.id}</TableCell>

                                    <TableCell>{order.customer}</TableCell>

                                    <TableCell>{order.product}</TableCell>

                                    <TableCell>{order.quantity}</TableCell>

                                    <TableCell>₹{order.total}</TableCell>

                                    <TableCell>
                                        <Chip
                                            label={order.status}
                                            color={getStatusColor(order.status)}
                                        />
                                    </TableCell>

                                    <TableCell align="center">
                                        <IconButton
                                            color="primary"
                                            onClick={() => handleEdit(order)}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton
                                            color="error"
                                            onClick={() => handleDelete(order.id)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </Paper>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle>
                    {editingOrder ? "Edit Order" : "Add Order"}
                </DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        label="Customer"
                        margin="normal"
                        value={customer}
                        onChange={(e) => setCustomer(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Product"
                        margin="normal"
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        type="number"
                        label="Quantity"
                        margin="normal"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Status"
                        margin="normal"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        onClick={editingOrder ? handleUpdate : handleSave}
                    >
                        {editingOrder ? "Update" : "Save"}
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={deleteOpen}
                onClose={() => setDeleteOpen(false)}
            >
                <DialogTitle>
                    Delete Order
                </DialogTitle>
                <DialogContent>
                    Are you sure you want to delete this order?
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteOpen(false)}>
                        Cancel
                    </Button>
                    <Button
                        color="error"
                        variant="contained"
                        onClick={confirmDelete}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default OrderTable;