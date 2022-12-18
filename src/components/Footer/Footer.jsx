import { GrInstagram, GrGithub, GrMailOption } from 'react-icons/gr';
import "./Footer.css";


export default function Header() {
  return (
    <footer>
        {/* <p>Contact Me: <a href="mailto:sheae123@gmail.com">sheae123@gmail.com</a></p> */}
        <a href="mailto:sheae123@gmail.com"><GrMailOption value={{ className: 'react-icons' }}/></a>
        <a href="https://github.com/xiesheaeix/Petit-Tresor"><GrGithub value={{ className: 'react-icons' }}/></a>
        <a href="https://www.instagram.com/_xiesheaeix/"><GrInstagram value={{ style: {size: "10em"} }}/></a>
        
    </footer>
  );
}
