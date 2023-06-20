import { Flex, Grid, Heading, Text } from '@chakra-ui/react'
import InstaCards from '../Cards/InstaCards'

export default function Community() {

    const instaCards = [
        { image: '' },
        { image: '' },
        { image: '' },
        { image: '' },
        { image: '' },
        { image: '' }
    ]
    return (
        <>
            <Flex h='100vh' w='100%'>
                <Flex flexDir='column' w='50%' textAlign='center' color='brand.P1' gap='20px' padding='40px'>
                    <Flex flexDir='column' fontWeight='bold' fontFamily='Hysteria' w='100%' >
                        <Heading fontSize={{ lg: '32px' }}>COMUNIDADE</Heading>
                        <Heading fontSize={{ lg: '32px' }}>CONEXÃO ODONTO LEGAL</Heading>
                    </Flex>
                    <Text textAlign='justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis mollitia assumenda, ipsum deserunt cupiditate quis? Repellendus quia neque incidunt corporis, aperiam eius ex perferendis dolores quasi deserunt, ullam natus fugit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius nesciunt sed quasi quibusdam id similique repudiandae, accusantium quidem dolorum harum et deleniti, facere perferendis numquam dolore laborum distinctio voluptates?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius nesciunt sed quasi quibusdam id similique repudiandae, accusantium quidem dolorum harum et deleniti, facere perferendis numquam dolore laborum distinctio voluptates?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius nesciunt sed quasi quibusdam id similique repudiandae, accusantium quidem dolorum harum et deleniti, facere perferendis numquam dolore laborum distinctio voluptates?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius nesciunt sed quasi quibusdam id similique repudiandae, accusantium quidem dolorum harum et deleniti, facere perferendis numquam dolore laborum distinctio voluptates?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius nesciunt sed quasi quibusdam id similique repudiandae, accusantium quidem dolorum harum et deleniti, facere perferendis numquam dolore laborum distinctio voluptates?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius nesciunt sed quasi quibusdam id similique repudiandae, accusantium quidem dolorum harum et deleniti, facere perferendis numquam dolore laborum distinctio voluptates?
                        id similique repudiandae, accusantium quidem dolorum harum et deleniti, facere perferendis numquam dolore laborum distinctio voluptates?
                    </Text>
                </Flex>
                <Flex w='50%' h='100%' justify='center' >

                    <Grid gridTemplateColumns='1fr 1fr' gridTemplateRows='1fr 1fr' gap='50px' padding={{ base: '80px 0px' }} >
                        <InstaCards cards={instaCards} />
                    </Grid>


                </Flex>
            </Flex>
        </>
    )
}
