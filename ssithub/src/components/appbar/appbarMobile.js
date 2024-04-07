import { IconButton } from "@mui/material";
import { AppbarContainer,AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { useUIContext } from "../../context/ui";
import Actions from "./actions";

export default function AppbarMobile ({matches}){
    const {setDrawerOpen}=useUIContext();
    return(
        <AppbarContainer>
            <IconButton onClick={()=>setDrawerOpen(true)}>
                <MenuIcon/>
                
            </IconButton>
            <AppbarHeader textAlign={"center"} variant="h4" >
                SSITHUB
            </AppbarHeader>
            <IconButton>
            <PersonIcon/>
            </IconButton>
        </AppbarContainer>
    );
}