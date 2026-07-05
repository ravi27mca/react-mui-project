import {
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography,
    Box,
    Button,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions, Snackbar, Alert, Pagination
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { IconButton } from "@mui/material";
import { useState } from "react";

// const users = [

//     {
//         id: 1,
//         name: "Ravi",
//         email: "ravi@gmail.com",
//         role: "Admin"
//     },

//     {
//         id: 2,
//         name: "Sai",
//         email: "sai@gmail.com",
//         role: "User"
//     },

//     {
//         id: 3,
//         name: "John",
//         email: "john@gmail.com",
//         role: "Manager"
//     }

// ];

function UserTable() {
    const [open, setOpen] = useState(false);
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Ravi",
            email: "ravi@gmail.com",
            role: "Admin",
        },
        {
            id: 2,
            name: "Sai",
            email: "sai@gmail.com",
            role: "User",
        },
        {
            id: 3,
            name: "John",
            email: "john@gmail.com",
            role: "Manager",
        },
    ]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);
    const [search, setSearch] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [roleError, setRoleError] = useState("");
    const [page, setPage] = useState(1);

    const handleSave = () => {
        setNameError("");
        setEmailError("");
        setRoleError("");

        let isValid = true;

        if (name.trim() === "") {
            setNameError("Name is required");
            isValid = false;
        }

        if (email.trim() === "") {
            setEmailError("Email is required");
            isValid = false;
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Enter a valid email");
            isValid = false;
        }

        if (role.trim() === "") {
            setRoleError("Role is required");
            isValid = false;
        }

        if (!isValid) return;

        if (isEdit) {

            const updatedUsers = users.map((user) =>

                user.id === editId
                    ? {
                        ...user,
                        name,
                        email,
                        role,
                    }
                    : user
            );

            setUsers(updatedUsers);
            setMessage("User Updated Successfully");
            setSnackbarOpen(true);

        } else {

            const newUser = {
                id: users.length + 1,
                name,
                email,
                role,
            };

            setUsers([...users, newUser]);
            setMessage("User Added Successfully");
            setSnackbarOpen(true);
        }

        setOpen(false);

        setIsEdit(false);

        setEditId(null);

        setName("");
        setEmail("");
        setRole("");
    };
    const handleDelete = (id) => {

        const updatedUsers = users.filter((user) => user.id !== id);

        setUsers(updatedUsers);
        setMessage("User Deleted Successfully");
        setSnackbarOpen(true);

    };
    const handleEdit = (user) => {

        setIsEdit(true);

        setEditId(user.id);

        setName(user.name);

        setEmail(user.email);

        setRole(user.role);

        setOpen(true);

    };
    const rowsPerPage = 5;
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;


    return (

        <>

            <Typography
                variant="h4"
                gutterBottom
            >
                Users
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
                    Add User
                </Button>

                <TextField
                    label="Search User"
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

                            <TableCell>Name</TableCell>

                            <TableCell>Email</TableCell>

                            <TableCell>Role</TableCell>
                            <TableCell align="center">Actions</TableCell>



                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {
                            users
                                .filter((user) =>
                                    user.name.toLowerCase().includes(search.toLowerCase())
                                ).slice(startIndex, endIndex)
                                .map((user) => (

                                    <TableRow key={user.id}>

                                        <TableCell>{user.id}</TableCell>

                                        <TableCell>{user.name}</TableCell>

                                        <TableCell>{user.email}</TableCell>

                                        <TableCell>{user.role}</TableCell>
                                        <TableCell align="center">
                                            <IconButton
                                                color="primary"
                                                onClick={() => handleEdit(user)}
                                            >
                                                <EditIcon />
                                            </IconButton>

                                            <IconButton
                                                color="error"
                                                onClick={() => handleDelete(user.id)}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>

                                    </TableRow>

                                ))
                        }

                    </TableBody>
                    <Dialog
                        open={open}
                        onClose={() => setOpen(false)}
                    >

                        <DialogTitle>

                            {isEdit ? "Edit User" : "Add User"}

                        </DialogTitle>

                        <DialogContent>

                            <TextField
                                fullWidth
                                label="Name"
                                margin="normal"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                error={Boolean(nameError)}
                                helperText={nameError}
                            />

                            <TextField
                                fullWidth
                                label="Email"
                                margin="normal"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={Boolean(emailError)}
                                helperText={emailError}
                            />
                            <TextField
                                fullWidth
                                label="Role"
                                margin="normal"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                error={Boolean(roleError)}
                                helperText={roleError}
                            />

                        </DialogContent>

                        <DialogActions>

                            <Button
                                variant="contained"
                                onClick={handleSave}
                            >
                                {isEdit ? "Update" : "Save"}
                            </Button>

                        </DialogActions>

                    </Dialog>

                </Table>

            </Paper>
            <Box
                mt={3}
                display="flex"
                justifyContent="center"
            >

                <Pagination
                    count={Math.ceil(users.length / rowsPerPage)}
                    page={page}
                    color="primary"
                    onChange={(event, value) => setPage(value)}
                />

            </Box>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
            >
                <Alert
                    severity="success"
                    variant="filled"
                    onClose={() => setSnackbarOpen(false)}
                >
                    {message}
                </Alert>
            </Snackbar>

        </>

    )

}

export default UserTable;