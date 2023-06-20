import { Flex, GridItem, Heading, List, ListIcon, ListItem } from "@chakra-ui/react";
import bg from './bgDetails.png'
import { Icon } from "@iconify/react";

export default function ServicesCards({ title, lists }) {
    console.log(lists)
    return (
        <GridItem shadow='lg' borderRadius='4px' w='100%' h='100%' maxH={{ base: '360px' }} maxW={{ base: '480px' }} bg='brand.P2' bgImage={bg} bgPos='center' bgSize='cover' color='white' padding={{ base: '20px 40px' }}>
            <Flex w='100%' h='100%' flexDir='column' justify='space-around' align='center'>
                <Heading fontSize={{ base: '24px' }}>{title}</Heading>
                <Flex w='100%' h='80%'  >
                    <List h='100%' display='flex' flexDir='column' justifyContent='space-evenly'>
                        {lists.map((item, index) => (
                            <ListItem display='flex' alignItems=' center' gap='20px' key={index} fontSize='18px'><Icon fontSize='13px' icon="fluent:dentist-12-filled" />{item}</ListItem>
                        ))}
                    </List>
                </Flex>

            </Flex>

        </GridItem>
    )
}
