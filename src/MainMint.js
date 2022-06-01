import { useState, useEffect } from "react";
import { ethers, BigNumber } from "ethers";
import degenMoodSwings from "./DegenMoodSwings.json";
import {Box,Button,Flex,Image,Link,Spacer, Text,Input} from '@chakra-ui/react';


const degenMoodSwingsAddress = '0x8D127A72eC9E591147Cf8827da1e47Ab7035b582';

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const [mintFreeAmount, setMintFreeAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);
 

    async function handleMint() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(degenMoodSwingsAddress, degenMoodSwings.abi, signer);
        try {
            const response = await contract.mint(BigNumber.from(mintAmount),{
                value : ethers.utils.parseEther((0.005 * mintAmount).toString())
            });
            console.log(response);
         }
        catch (error) {
            console.log(error)
            alert("Your mint failed!" + error);
        }
    }
    async function handleFreeMint() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(degenMoodSwingsAddress, degenMoodSwings.abi, signer);
        try {
            const response = await contract.MintFree(BigNumber.from(mintFreeAmount),{
                value : ethers.utils.parseEther((0.0 * mintFreeAmount).toString())
            });
            console.log(response);
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleDecrement= () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    }

    const handleIncrement = () => {
        if (mintAmount >= 20) return;
        setMintAmount(mintAmount + 1);
    }

    const handleIncrementFree = () => {
        if (mintFreeAmount >= 3) return;
        setMintFreeAmount(mintFreeAmount + 1);
    }

    const handleDecrementFree = () => {
        if (mintFreeAmount <= 1) return;
        setMintFreeAmount(mintFreeAmount - 1);
    }

    return (
        <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
            <Box width='520px'>

            <div>
            <Text fontSize="36px" textShadow="0 3px #000000">Degen Mood Swings</Text>
            <Text 
            fontSize='24px' letterSpacing='-5.5%' fontFamily='VT323' textShadow='0 2px 2px #000000' >
                 Just Moods swings of a degen in a Degen Season
            </Text>
            <Text 
            fontSize='24px' letterSpacing='-5.5%' fontFamily='VT323' textShadow='0 2px 2px #000000' > Mint Mood Swing to find out about your current Mood in this Season</Text>
            </div>
           
            {
                isConnected ? (
                    
                    <div>
                        <Flex align="center" justify='center'>
                        <div>
                        <div>
                        <Button 
                        backgroundColor="black"
                        borderRadius="5px"
                        boxShadow="0px 2px 2px 1px #0F0F0F"
                        color="white"
                        cursor="pointer"
                        fontFamily='inherit'
                        padding='15px'
                        margin='10px'
                        onClick={handleDecrement}>-</Button>
                        <Input 
                        readOnly
                        fontFamily = 'inherit'
                        width='100px'
                        height='40px'
                        text-align='center'
                        paddingLeft='19px'
                        marginTop='10px'
                        type="number" value={mintAmount} />
                        <Button 
                          backgroundColor="black"
                          borderRadius="5px"
                          boxShadow="0px 2px 2px 1px #0F0F0F"
                          color="white"
                          cursor="pointer"
                          fontFamily='inherit'
                          padding='15px'
                          margin='10px'
                        onClick={handleIncrement}>+</Button>
                        </div>
                        <Button 
                         backgroundColor="black"
                         borderRadius="5px"
                         boxShadow="0px 2px 2px 1px #0F0F0F"
                         color="white"
                         cursor="pointer"
                         fontFamily='inherit'
                         padding='15px'
                         margin='10px'
                        onClick={handleMint}>Mint Price : {mintAmount*0.005}</Button>
                        
                        <div>
                        <Button 
                        backgroundColor="black"
                        borderRadius="5px"
                        boxShadow="0px 2px 2px 1px #0F0F0F"
                        color="white"
                        cursor="pointer"
                        fontFamily='inherit'
                        padding='15px'
                        margin='10px'
                        onClick={handleDecrementFree}
                        >-</Button>
                        <Input 
                         readOnly
                         fontFamily = 'inherit'
                         width='100px'
                         height='40px'
                         text-align='center'
                         paddingLeft='19px'
                         marginTop='10px'
                        type="number" value={mintFreeAmount} />
                        <Button 
                         backgroundColor="black"
                         borderRadius="5px"
                         boxShadow="0px 2px 2px 1px #0F0F0F"
                         color="white"
                         cursor="pointer"
                         fontFamily='inherit'
                         padding='15px'
                         margin='10px'
                        onClick={handleIncrementFree}>+</Button>
                        </div>
                        <Button 
                          backgroundColor="black"
                          borderRadius="5px"
                          boxShadow="0px 2px 2px 1px #0F0F0F"
                          color="white"
                          cursor="pointer"
                          fontFamily='inherit'
                          padding='15px'
                          margin='10px'
                        onClick={handleFreeMint}>Mint Free</Button>
                        </div>
                       </Flex>
                    </div>
                ):(
                    
                        <Text
                        marginTop='70px'
                        fontSize='30px'
                        letterSpacing='-5.5%'
                        fontFamily='VT323'
                        textShadow='0 3px #000000'
                        color='black'
                        >Connect to an account to Mint</Text>
                    
                )
            }
            </Box>
        </Flex>

    )

}

export default MainMint;
