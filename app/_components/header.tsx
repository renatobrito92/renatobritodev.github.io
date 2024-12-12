import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <div>
        <Link href='/'>Logo</Link>
      </div>
      <ul className='flex justify-center items-center'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>Sobre</Link>
        </li>
        <li>
          <Link href='/projects'>Projetos</Link>
        </li>
        <li>
          <Link href='/blog'>Blog</Link>
        </li>
        <li>
          <Link href='/contact'>Contato</Link>
        </li>
      </ul>
      <div>
        <Link href='/'>Resume</Link>
      </div>
    </div>
  )
}

export default Header
