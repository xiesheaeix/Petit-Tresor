import { GrInstagram, GrGithub, GrMailOption } from 'react-icons/gr';
import "./Footer.css";
import { Link } from 'react-router-dom';


export default function Header({user}) {
  return (
    <footer>
      {user.admin ? <Link to="/admin">Admin Page</Link> : 
        <>
          <a href="mailto:sheae123@gmail.com"><GrMailOption value={{ className: 'react-icons' }}/></a>
          <a href="https://github.com/xiesheaeix/Petit-Tresor"><GrGithub value={{ className: 'react-icons' }}/></a>
          <a href="https://www.instagram.com/_xiesheaeix/"><GrInstagram value={{ style: {size: "10em"} }}/></a>
        </>
      }
    </footer>
  );
}
