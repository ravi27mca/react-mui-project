import { Card, CardContent, Typography, Box } from "@mui/material";

function StatCard({ title, value, icon, color }) {
    return (
        <Card
            sx={{
                borderRadius: 3,
                boxShadow: 3,
                height: 170,
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
                    {icon}
                </Box>
                <Typography
                    variant="h3"
                    mt={4}
                    sx={{ color }}
                >
                    {value}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default StatCard;