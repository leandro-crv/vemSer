import Link from 'next/link';
function Navbar(){
  return(
    <nav>
    <ul>
    <li>
      <Link href="/" >
        <a className='text-light'>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/sobre">
        <a>Sobre</a>
      </Link>
    </li>
    <li>
      <Link href="/contato">
        <a>Contato</a>
      </Link>
    </li>
  </ul>
  </nav>
  );
}

export default Navbar;