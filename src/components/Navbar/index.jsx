import { Flex, Image, Link, List, ListItem } from "@chakra-ui/react";
import logo from './Logo Pedro - lupa.png'


export default function Navbar() {
    const NavLinks = [
        {
            title: 'Home',
            link: '#home'
        },
        {
            title: 'Sobre Mim',
            link: '#sobreMim'
        },
        {
            title: 'Experiência',
            link: '#experiencia'
        },
        {
            title: 'Contato',
            link: '#contato'
        },

    ]
    return (
        <Flex h='10vh' bg='transparent' align='center' justify='space-between' padding='0px 10px' position='relative'>
            <Image src={logo} h='inherit' />
            <List display='flex' gap='30px' fontWeight={600}>
                {
                    NavLinks.map((item, index) => (
                        <Link key={index} href={item.link}
                            transition='all 0.3s ease-in-out' _hover={{ color: 'brand.P1', transform: 'scale(1.05)', borderBottom: '1px solid' }}>
                            <ListItem fontSize='20px'>
                                {item.title}
                            </ListItem>
                        </Link>
                    ))
                }
            </List>
        </Flex>
    )
}
