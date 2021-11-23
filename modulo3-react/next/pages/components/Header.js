import Navbar from "./navbar";
import Image from 'next/image';
import cogumelo from '../images/cogumelo.jpeg';
function Header() {
  return (
    <header>
      <div class='container'>
      <div className='imgHeader'>
      <Image
       src={cogumelo}
       alt="My Image"
       width={50}
       height={50}
       className='cogumeloHeader'
      
     />
      </div>
      <div>
        <Navbar />
      </div>
      </div>
    </header>
  );
}
export default Header;