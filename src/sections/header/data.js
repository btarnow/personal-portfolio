import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'

// If I want to add in my blog link eventually: 
// import {FaDev} from 'react-icons/fa'
// {id: 3, link: 'https://dev.to/btarnow', icon: <FaDev/>}

const data = [
    {id: 1, icon: <HiOutlineMail/>, link: 'mailto:btarnow317@gmail.com'},
    {id: 2, link: 'https://www.linkedin.com/in/becky-tarnowski/', icon: <AiOutlineLinkedin/>},
    {id: 3, link: 'https://github.com/btarnow', icon: <AiFillGithub/>},
]

export default data 

