import { Product,ProductAddToCart
} from "../../styles/Products";
import{ ProductImage} from "../../styles/Products"
import ProductMeta from "./productMeta";
// import { Stack, Tooltip, Typography } from "@mui/material";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import FitScreenIcon from "@mui/icons-material/FitScreen"
// import { products } from "../../data";
//import { useEffect, useState } from "react";



export default function SingleProduct({product,matches}){
    return(
        <>
        <Product>
            <ProductImage src={product.image}/>
            <ProductMeta product={product} matches={matches}/>
            {/* <ProductActionsWrapper>
            <Stack direction= "row" >
            <ProductFavButton isfav={0}>
              <FavoriteIcon />
            </ProductFavButton>
            <ProductActionButton>
            
                <ShareIcon color="primary" />
              
            </ProductActionButton>
            <ProductActionButton>
                <FitScreenIcon color="primary"/>
            </ProductActionButton>
            </Stack>
            </ProductActionsWrapper> */}
        </Product>
        <ProductAddToCart  variant="contained" href={product.link}>
            Know More
        </ProductAddToCart>
        </>
    )
}