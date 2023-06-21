import { Flex } from '@chakra-ui/react'

export default function AboutCircles({ title }) {
    return (
        <Flex borderRadius='100%' bg='brand.P1 ' w='180px' h='180px' _hover={{ bg: "transparent", border: '4px solid', borderColor: 'brand.P2' }} justify='center' align='center' cursor='pointer'>
            <Flex width='165px' height='165px' backgroundColor='transparent' border='4px solid inherit' borderRadius='100%' justify='center' align='center'>
                <Flex width='140px' height='140px' backgroundColor='brand.P1' borderRadius='100%' _hover={{ bg: 'brand.P2' }}>{title}</Flex>
            </Flex>

        </Flex>
    )
}
