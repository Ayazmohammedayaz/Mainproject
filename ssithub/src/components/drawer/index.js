import { Divider, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { styled } from "@mui/system";
import { useUIContext } from "../../context/ui";
import { DrawerCloseButton } from "../../styles/appbar";
import CloseIcon from '@mui/icons-material/Close';

const MiddleDivider = styled((props) => (
    <Divider variant="middle" {...props} />
))``;
export default function AppDrawer(){

    const { drawerOpen, setDrawerOpen } = useUIContext();
    const lightenColor = (color, percent) => {
        // Convert color to RGB format
        let rgb = color.substring(1).match(/.{2}/g).map((hex) => parseInt(hex, 16));
      
        // Adjust each RGB component to make the color lighter
        rgb = rgb.map((component) => Math.round(component * (1 + percent)));
      
        // Convert back to hex format
        const hex = rgb.map((component) => {
          const hexComponent = component.toString(16);
          return hexComponent.length === 1 ? '0' + hexComponent : hexComponent;
        });
      
        return `#${hex.join('')}`;
      };
    return(
        <>
{drawerOpen && (
  <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
    <CloseIcon
      className="testing"
      sx={{
        fontSize: "2.5rem",
        color: lightenColor("#CCCCCC", 0.09)
      }}
    />
  </DrawerCloseButton>
)}
        <Drawer open={drawerOpen}>
            
            <List>
                <ListItemButton>
                    <ListItemText>Home</ListItemText>
                </ListItemButton>
                <MiddleDivider/>
                <ListItemButton>
                    <ListItemText>Events</ListItemText>
                </ListItemButton>
                <MiddleDivider/>
                <ListItemButton>
                    <ListItemText>Maps</ListItemText>
                </ListItemButton>
                <MiddleDivider/>
                <ListItemButton>
                    <ListItemText>About</ListItemText>
                </ListItemButton>
                <MiddleDivider/>  
            </List>
        </Drawer>
        </>
    );
}