import { Flex, Image } from "@chakra-ui/react";
import bg from './bgDetails.png'
import pedro from "./pedro.png"
import pedroHover from "./pedroHover.png"
import AboutCircles from "./AboutCircle";
import { useState } from "react";

export default function About() {
    const [image, setImage] = useState(pedro)
    function changeImage() {
        if (image === pedro) {
            setImage(pedroHover)
        } else {
            setImage(pedro)
        }
    }
    return (
        <Flex id='about' h='100vh' w='100%' bgImage={bg} padding='50px 0px'>
            <Flex w='20%' mt='50px' justify='center'> <AboutCircles />
            </Flex>
            <Flex w='10%' align='end' justify='center'> <AboutCircles /></Flex>
            <Flex w='40%' align='center' justify='center'>
                <Image cursor='pointer' src={image} onMouseEnter={changeImage} onMouseOut={changeImage} /></Flex>
            <Flex w='10%' h='100%' flexDir='column' mt='100px' justify='start' align='center'><AboutCircles />
            </Flex>
            <Flex w='10%' align='end' justify='center' mb='50px'> <AboutCircles /></Flex>
            <Flex w='10%' align='center' mr='20px' justify='center'> <AboutCircles /></Flex>
        </Flex>
    )
}
