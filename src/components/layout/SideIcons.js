import React from 'react';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';



function SideIcons() {
    return (
        <Wrapper>
            ​<img src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google_drive-512.png" />
            <img src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_translate_google-512.png" />
            <img src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google_sheets-512.png" />
            <img src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google_slides-512.png" />
            <hr />
            <AddIcon/>

            
            
        </Wrapper>
    )
}

export default SideIcons

const Wrapper = styled.div`

display: grid;
grid-template-rows: repeat(4, 50px) 1px 50px;
place-items: center;
border-left: 1px solid lightgray;

img {
    width: 100%;
    max-height: 22px;
    object-fit: contain;
}

hr {
    width: 60px;
}


`
