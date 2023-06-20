import { GridItem } from '@chakra-ui/react'


export default function InstaCards({ cards }) {
    return (
        <>
            {
                cards.map((card, key) => (
                    <GridItem key={key} maxH='100%' h={{ lg: '190px' }} w={{ lg: '180px' }} bg='brand.P2' borderRadius='8px' transition='0.4s' cursor='pointer' _hover={{ transform: 'scale(1.1)' }}></GridItem>

                ))
            }
        </>
    )
}
