import {
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography,
} from "@mui/material";

const users = [

    {
        id: 1,
        name: "Ravi",
        email: "ravi@gmail.com",
        role: "Admin"
    },

    {
        id: 2,
        name: "Sai",
        email: "sai@gmail.com",
        role: "User"
    },

    {
        id: 3,
        name: "John",
        email: "john@gmail.com",
        role: "Manager"
    }

];

function UserTable() {

    return (

        <>

            <Typography
                variant="h4"
                gutterBottom
            >
                Users
            </Typography>

            <Paper>

                <Table>

                    <TableHead>

                        <TableRow>

                            <TableCell>ID</TableCell>

                            <TableCell>Name</TableCell>

                            <TableCell>Email</TableCell>

                            <TableCell>Role</TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {
                            users.map((user) => (

                                <TableRow key={user.id}>

                                    <TableCell>{user.id}</TableCell>

                                    <TableCell>{user.name}</TableCell>

                                    <TableCell>{user.email}</TableCell>

                                    <TableCell>{user.role}</TableCell>

                                </TableRow>

                            ))
                        }

                    </TableBody>

                </Table>

            </Paper>

        </>

    )

}

export default UserTable;