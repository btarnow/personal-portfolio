import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {FaDev} from 'react-icons/fa'

export const links = [
    {id: 1, link: '#', title: 'Home'},
    {id: 2, link: '#about', title: 'About'},
    {id: 3, link: '#services', title: 'Services'},
    {id: 4, link: '#portfolio', title: 'Portfolio'},
    {id: 5, link: '#contact', title: 'Connect'},
]

export const socials = [
    {id: 1, icon: <HiOutlineMail/>, link: 'mailto:btarnow317@gmail.com'},
    {id: 2, link: 'https://www.linkedin.com/in/becky-tarnowski/', icon: <AiOutlineLinkedin/>},
    {id: 3, link: 'https://github.com/btarnow', icon: <AiFillGithub/>},
    {id: 4, link: 'https://dev.to/btarnow', icon: <FaDev/>}
]


