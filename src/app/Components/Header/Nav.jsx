import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list">
      <li >
        <Link href="/">Home</Link>
       
      </li>
      <li className="menu-item-has-children">
        <Link href="#" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/service" onClick={() => setMobileToggle(false)}>
                Services
              </Link>
            </li>
            
          </ul>
        </DropDown>

      </li>   

      <li>
        <Link href="/project" onClick={() => setMobileToggle(false)}>
        Project
        </Link>
     
          

      </li>        

      <li className="menu-item-has-children">
        <Link href="#">About Us</Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/about" onClick={() => setMobileToggle(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/team" onClick={() => setMobileToggle(false)}>
              Team
              </Link>
            </li>            
                             
          </ul>
        </DropDown>
      </li>      
    
      <li >
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
         Blog
        </Link>
        
      </li>
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
