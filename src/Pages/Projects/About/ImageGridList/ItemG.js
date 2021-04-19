import React from "react";
import { Item } from "react-photoswipe-gallery";

const ItemG = ({ full, thumb}) =>{

    return (
        <>
            <Item
                original= {full}
                thumbnail= {thumb}
                width="900"
                height="600"
            >
                {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={thumb} style={{margin:' 0 3px 1px 3px'}} alt='im' />
                )}
            </Item>




        </>
    )
}
export default ItemG