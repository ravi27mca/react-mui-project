import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import DashboardCard from "../components/dashboard/DashboardCards";

import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

function Dashboard() {

    return (

        <>

            <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
            >
                Dashboard
            </Typography>

            <Grid container spacing={3}>

                <Grid size={{ xs: 12, md: 3 }}>
                    <DashboardCard
                        title="Users"
                        value="1250"
                        icon={<PeopleIcon />}
                        color="#1976d2"
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                    <DashboardCard
                        title="Products"
                        value="320"
                        icon={<InventoryIcon />}
                        color="#2e7d32"
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                    <DashboardCard
                        title="Orders"
                        value="890"
                        icon={<ShoppingCartIcon />}
                        color="#ed6c02"
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                    <DashboardCard
                        title="Revenue"
                        value="₹12,50,000"
                        icon={<CurrencyRupeeIcon />}
                        color="#9c27b0"
                    />
                </Grid>

            </Grid>

        </>

    );

}

export default Dashboard;