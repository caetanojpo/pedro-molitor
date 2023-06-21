import { Flex, Heading, Image } from "@chakra-ui/react";
import banner from './banner.png'
import pedro from './pedro-molitor.png'



export default function Banner() {
    return (
        <Flex as='section' h='80vh' w='100%' bgImage={banner} bgPosition='right' bgSize='cover'
            bgRepeat='no-repeat' justify='space-around' align='center'>
            <Flex flexDir='row' w='50%' paddingLeft='20px' justify='end'  >
                <Flex flexDir='column' gap='8px' >
                    <Heading fontFamily='Hysteria' fontSize='46px'>SEJA BEM VINDO(A)</Heading>
                    <Heading fontFamily='Hysteria' fontSize='46px'>EU SOU PEDRO MOLITOR</Heading>
                    <Heading fontFamily='Hysteria' fontSize='46px'>CIRURGIÃO-DENTISTA</Heading>
                </Flex>
            </Flex>
            <Flex h='100%' w='50%' justify='center' >

                <Image h='100%' src={pedro} alt="Pedro Molitor, rapaz de cabelo preto, barba preta, oculos quadrado, camisa social preta, de estatura mediana, olhos escuros. Esta com os braços cruzados e sorriso no rosto." />


            </Flex>
        </Flex>
    )
}
