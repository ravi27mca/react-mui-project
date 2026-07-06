import {
    Typography,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from "@mui/material";

const products = [
    {
        id: 1,
        name: "iPhone 16",
        category: "Mobile",
        price: 80000,
        status: "Active",
    },
    {
        id: 2,
        name: "Dell Laptop",
        category: "Laptop",
        price: 65000,
        status: "Active",
    },
    {
        id: 3,
        name: "Samsung Monitor",
        category: "Electronics",
        price: 12000,
        status: "Inactive",
    },
];

function ProductTable() {
    return (
        <>
            <Typography variant="h4" gutterBottom>
                Products
            </Typography>

            <Paper>

                <Table>

                    <TableHead>

                        <TableRow>

                            <TableCell>ID</TableCell>
                            <TableCell>Product</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Status</TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {products.map((product) => (

                            <TableRow key={product.id}>

                                <TableCell>{product.id}</TableCell>

                                <TableCell>{product.name}</TableCell>

                                <TableCell>{product.category}</TableCell>

                                <TableCell>₹{product.price}</TableCell>

                                <TableCell>{product.status}</TableCell>

                            </TableRow>

                        ))}

                    </TableBody>

                </Table>

            </Paper>
        </>
    );
}

export default ProductTable;