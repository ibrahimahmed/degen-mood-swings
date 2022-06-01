import React from 'react';
import {Box,Button,Flex,Image,Link,Spacer} from '@chakra-ui/react';
import Ether from './assets/ether32.png';
import Twitter from './assets/twitter_32x32.png';


const NavBar = ({accounts,setAccounts}) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if(window.ethereum){
            const account = await window.ethereum.request({method: 'eth_requestAccounts'});
            setAccounts(account);
        }
    }

    return (
        <Flex justify="space-between" align="center" padding="30px">
                   {/*// Left side of the navbar */} 

            <Flex justify="space-around" wridth='40%' padding="0 75px">
                <Link href="https://twitter.com/home" margin="0 15px">
                    <Image src={Twitter} />
                </Link>
                <Link href="https://etherscan.io/address/0x0651132f094551f9d4E40de3e1E2F8B7Ac149c3A" margin="0 15px">
                    <Image src={Ether}/>
                </Link>
                
            </Flex>
          
                {/*// Right side of the navbar */} 
                <Flex justify="space-around" align="center" width='40%' padding="30px 30px 30px 30px">
            {isConnected ? (
              <Box margin="0 15px" >Connected</Box>  
            ):(<Button 
                backgroundColor="black"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                margin="0 15px"
            onClick={connectAccount}>Connect Account</Button>) }
            </Flex>
        </Flex>
    )
}

export default NavBar;