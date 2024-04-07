import {  ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import Actions from "./actions";

export default function AppbarDesktop ({matches}){

    
    return(
        <AppbarContainer>
            <AppbarHeader>
                SSITHUB
            </AppbarHeader>
            <MyList type="row">
                <ListItemText primary="Home" />
                <ListItemText primary="Events" />
                <ListItemText primary="Maps" />
                <ListItemText primary="About Us" />
            </MyList>
            <Actions matches={matches}/>
            </AppbarContainer>
    );
}