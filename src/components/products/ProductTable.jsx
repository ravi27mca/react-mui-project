import {
    Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Box, Button, TextField, Dialog, DialogTitle,
    DialogContent, DialogActions, FormControl, InputLabel, Select,
    MenuItem, Switch, IconButton
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FormControlLabel from "@mui/material/FormControlLabel";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState } from "react";

function ProductTable() {
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [status, setStatus] = useState(true);
    const [editingProduct, setEditingProduct] = useState(null);
    const [products, setProducts] = useState([
        {
            id: 1,
            productName: "iPhone 16",
            category: "Mobile",
            price: 80000,
            status: "Active",
        },
        {
            id: 2,
            productName: "Dell Laptop",
            category: "Laptop",
            price: 65000,
            status: "Active",
        },
        {
            id: 3,
            productName: "Samsung Monitor",
            category: "Electronics",
            price: 12000,
            status: "Inactive",
        },
    ]);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    const handleSave = () => {
        const newProduct = {
            id: products.length + 1,
            productName: productName,
            category: category,
            price: price,
            status: status ? "Active" : "Inactive"
        };
        setProducts([...products, newProduct]);
        setOpen(false);
        setProductName("");
        setCategory("");
        setPrice("");
        setStatus(true);
        setSnackbarMessage("Product Added Successfully");
        setSnackbarOpen(true);
    };
    const handleEdit = (product) => {
        setEditingProduct(product);
        setProductName(product.productName);
        setCategory(product.category);
        setPrice(product.price);
        setStatus(product.status);
        setOpen(true);
    };
    const handleUpdate = () => {
        const updatedProducts = products.map((product) =>
            product.id === editingProduct.id
                ? {
                    ...product,
                    product: productName,
                    category: category,
                    price: price,
                    status: status
                }
                : product
        );
        setProducts(updatedProducts);
        setOpen(false);
        setEditingProduct(null);
        setProductName("");
        setCategory("");
        setPrice("");
        setStatus("");
        setSnackbarMessage("Product Updated Successfully");
        setSnackbarOpen(true);
    };

    const handleDelete = (id) => {
        setDeleteId(id);
        setDeleteOpen(true);
    };

    const confirmDelete = () => {
        const updatedProducts = products.filter(
            (product) => product.id !== deleteId
        );
        setProducts(updatedProducts);
        setDeleteOpen(false);
        setDeleteId(null);
        setSnackbarMessage("Product Deleted Successfully");
        setSnackbarOpen(true);
    };
    return (
        <>
            <Typography variant="h4" gutterBottom>
                Products
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
                    Add Product
                </Button>
                <TextField
                    label="Search Product"
                    size="small"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Box>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Product</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products
                            .filter((product) =>
                                product.productName
                                    .toLowerCase()
                                    .includes(search.toLowerCase())
                            )
                            .map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell>{product.id}</TableCell>
                                    <TableCell>{product.productName}</TableCell>
                                    <TableCell>{product.category}</TableCell>
                                    <TableCell>₹{product.price}</TableCell>
                                    <TableCell>{product.status}</TableCell>
                                    <TableCell align="center">
                                        <IconButton color="primary">
                                            <IconButton
                                                color="primary"
                                                onClick={() => handleEdit(product)}
                                            >
                                                <EditIcon />
                                            </IconButton>
                                        </IconButton>
                                        <IconButton
                                            color="error"
                                            onClick={() => handleDelete(product.id)}
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
                open={deleteOpen}
                onClose={() => setDeleteOpen(false)}
            >
                <DialogTitle>
                    Delete Product
                </DialogTitle>
                <DialogContent>
                    Are you sure you want to delete this product?
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => setDeleteOpen(false)}
                    >
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
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
            >
                <DialogTitle>
                    {editingProduct ? "Edit Product" : "Add Product"}
                </DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        label="Product Name"
                        margin="normal"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                    <FormControl
                        fullWidth
                        margin="normal"
                    >
                        <InputLabel>
                            Category
                        </InputLabel>
                        <Select
                            value={category}
                            label="Category"
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <MenuItem value="Mobile">
                                Mobile
                            </MenuItem>
                            <MenuItem value="Laptop">
                                Laptop
                            </MenuItem>
                            <MenuItem value="Electronics">
                                Electronics
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        fullWidth
                        label="Price"
                        margin="normal"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={status}
                                onChange={(e) => setStatus(e.target.checked)}
                            />
                        }
                        label={status ? "Active" : "Inactive"}
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
                        onClick={editingProduct ? handleUpdate : handleSave}
                    >
                        {editingProduct ? "Update" : "Save"}
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
            >
                <Alert
                    severity="success"
                    variant="filled"
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </>
    );
}

export default ProductTable;