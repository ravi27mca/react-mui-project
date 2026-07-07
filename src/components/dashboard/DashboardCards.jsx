import { Grid } from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

import StatCard from "./StatCard";

function DashboardCards() {
    return (
        <Grid container spacing={3}>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <StatCard
                    title="Users"
                    value="120"
                    icon={<PeopleIcon fontSize="large" color="primary" />}
                    color="#1976d2"
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <StatCard
                    title="Products"
                    value="85"
                    icon={<InventoryIcon fontSize="large" color="success" />}
                    color="green"
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <StatCard
                    title="Orders"
                    value="230"
                    icon={<ShoppingCartIcon fontSize="large" color="warning" />}
                    color="orange"
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <StatCard
                    title="Revenue"
                    value="₹8,50,000"
                    icon={<CurrencyRupeeIcon fontSize="large" color="error" />}
                    color="red"
                />
            </Grid>

        </Grid>
    );
}

export default DashboardCards;