import { Flex, Image } from "@chakra-ui/react";
import bg from './bgDetails.png'
import pedro from "./pedro.png"
import WorkCircles from "./WorkCircle";

export default function Work() {
    return (
        <Flex h='100vh' w='100%' bgImage={bg}>
            <Flex w='20%' bg='red' justify='center'> <WorkCircles />
            </Flex>
            <Flex w='20%' bg='blue' align='end' justify='center'> <WorkCircles /></Flex>
            <Flex w='20%' bg='green' align='center' justify='center'><Image h='100%' w='100%' src={pedro} /></Flex>
            <Flex w='20%' h='100%' bg='purple' flexDir='column' justify='space-around' align='center'><WorkCircles />
                <Flex h='50%' align='center' justify='center'><WorkCircles />
                </Flex></Flex>
            <Flex w='20%' bg='black' align='center' justify='center'> <WorkCircles /></Flex>
        </Flex>
    )
}
