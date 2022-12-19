import { GrInstagram, GrGithub, GrMailOption } from 'react-icons/gr';
import "./Footer.css";


export default function Header({user}) {
  return (
    <footer>
          <a href="mailto:sheae123@gmail.com"><GrMailOption/></a>&nbsp;&nbsp;
          <a href="https://github.com/xiesheaeix/Petit-Tresor"><GrGithub /></a>&nbsp;&nbsp;
          <a href="https://www.instagram.com/_xiesheaeix/"><GrInstagram /></a>
    </footer>
  );
}
