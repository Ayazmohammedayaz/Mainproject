import { createTheme} from "@mui/material/styles";

export const Colors={
    primary:"#5f2c3e",
    secondary:"#d1adcc",
    sucess:"#4CAF50",
    danger:"#FF5722",
    warning:"#FFC107",
    dark:"#0e1b20",
    light:"#aaa",
    muted:"#abafb3",
    border:"#DDDFE1",
    inverse:"#2F3D4A",
    shaft:"#333",


    dim_gray:"#696969",
    dove_gray:"#d5d5d5",
    body_bg:"#f3f6f9",
    light_gray:"8B93FF",


    white:"#fff",
    black:"#000",
};

const theme = createTheme({
    palette:{
        primary:{
            main:Colors.primary
        },
        secondary:{
            main:Colors.secondary
        }
    },

    components:{
        MuiButton:{
            defaultProps:{
                disableRipple:true,
                disableElevation:true
            },
        },
        MuiDrawer:{
            styleOverrides:{
                paper:{
                    width:250,
                    background:Colors.primary,
                    color:Colors.secondary,
                    borderRadius:'0px 100px 0px 0px',
                    borderRight: `1px solid ${Colors.primary}`,

                },
            },
        },
        MuiDivider:{
            styleOverrides: {
                root: {
                  borderColor: 'var(--divider-color)',
                },
              },
        },
    },

});

export default theme;