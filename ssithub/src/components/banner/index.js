import { useTheme } from "@emotion/react";
import { Typography, useMediaQuery } from "@mui/material";
import { BannerContainer, BannerContent, BannerTitle,BannerDescription, BannerImage} from "../../styles/banner";
// Example import in src/components/appbar/banner/index.js


export default function Banner(){
    const theme=useTheme();
    const matches=useMediaQuery(theme.breakpoints.down('md'));

    return(
        <BannerContainer>
            <BannerImage src="/images/banner/col.jpeg"/>
            <BannerContent>
            <Typography variant="h6">New Platform</Typography>
            <BannerTitle variant="h2">
                Title
            </BannerTitle>

            <BannerDescription variant="subtitle">
            put some stuff regarding our project
            </BannerDescription>
            </BannerContent>
        </BannerContainer>
        
    )
}
//{banner.image}
//