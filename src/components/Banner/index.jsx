import { Flex, Heading, Image } from "@chakra-ui/react";
import banner from './banner.png'
import pedro from './313983526_6159809457381420_7103292081667953991_n-removebg-preview.png'



export default function Banner() {
    return (
        <Flex h='80vh' w='100%' bgImage={banner} bgPosition='right' bgSize='contain'
            bgRepeat='no-repeat' justify='space-around' align='center'>
            <Flex flexDir='row' w='50%' paddingLeft='20px' justify='end'  >
                <Flex flexDir='column' gap='8px' >
                    <Heading fontFamily='Hysteria' fontSize='46px'>SEJA BEM VINDO</Heading>
                    <Heading fontFamily='Hysteria' fontSize='46px'>EU SOU PEDRO MOLITOR</Heading>
                    <Heading fontFamily='Hysteria' fontSize='46px'>ESPECIALISTA EM ODONTO LEGAL</Heading>
                </Flex>
            </Flex>
            <Flex h='100%' w='50%' justify='end' align='end'>
                <Image h='95%' src={pedro} />
            </Flex>
        </Flex>
    )
}
