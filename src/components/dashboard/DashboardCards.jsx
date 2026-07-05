import {
    Card,
    CardContent,
    Typography,
    Box,
    Avatar,
} from "@mui/material";

function DashboardCard({
    title,
    value,
    icon,
    color,
}) {
    return (
        <Card
            elevation={5}
            sx={{
                transition: "0.3s",

                "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 8,
                },
            }}
        >
            <CardContent>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >

                    <Typography
                        variant="h6"
                        color="text.secondary"
                    >
                        {title}
                    </Typography>

                    <Avatar
                        sx={{
                            bgcolor: color,
                        }}
                    >
                        {icon}
                    </Avatar>

                </Box>

                <Typography
                    variant="h4"
                    mt={3}
                    fontWeight="bold"
                >
                    {value}
                </Typography>

            </CardContent>
        </Card>
    );
}

export default DashboardCard;