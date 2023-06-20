import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";



export default function Informations() {
    const infos = [
        {
            title: 'Instagram',
            icon: 'mdi:instagram',
            link: '#'
        },
        {
            title: 'LinkedIn',
            icon: "mdi:linkedin",
            link: '#'
        },
        {
            title: 'Youtube',
            icon: 'ri:youtube-line',
            link: '#'
        },
        {
            title: 'Facebook',
            icon: 'ic:baseline-facebook',
            link: '#'
        },
        {
            title: 'Lattes',
            icon: 'mdi:resume',
            link: '#'
        },
    ]
    return (
        <Flex as='section' h='10vh' w='100%' bg='brand.S3'>
            <List display='flex' w='100%' color='white'
                justifyContent='space-around' alignItems='center'>
                {infos.map((info, index) => (
                    <ListItem key={index} _hover={{ color: 'brand.hover' }}>
                        <Link display='flex' alignItems='center' flexDir='column'>
                            <Icon fontSize='40px' icon={info.icon} />
                            <Text>{info.title}</Text>
                        </Link>

                    </ListItem>
                ))}
            </List>
        </Flex>
    )
}
