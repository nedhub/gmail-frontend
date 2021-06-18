
import styled from 'styled-components';

import React, { useState } from 'react';


import { Checkbox } from '@material-ui/core'

import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';

const  EmailItem=({ starred, from, subject, message, receieved, read}) => {

    const [ star, setStar ] = useState(starred);


    




    return (
        <Wrapper>

            <Checkbox/>
            <IconButton onclick={()=> star ? setStar(false): setStar(true)} >

                {   star ? (

                    <StarIcon htmlColor='#f7cb69'/>

                ) : (

                    <StarBorderIcon/>
                )


                }


            </IconButton>

            <p className={ read === false && 'unread'}>{from}</p>


            <div>

                <p className={!read && 'unread'}>{subject}</p> - <span>{message}</span>


            </div>

            <p className={!read && 'unread'}>{receieved}</p>

        </Wrapper>
    )
}

export default EmailItem


const Wrapper = styled.div`

padding-left: 20px;
border-top: 1px solid lightgray;
display: grid;
grid-template-columns: min-content min-content 120px auto min-content;
gap: 10px;
align-items: center;
cursor: pointer;
padding-right: 20px;

div {

    display: flex;

}

span {
    color: darkgrey;
}

.unread {
    color: black;
    font-weight: bolder;
}




`
