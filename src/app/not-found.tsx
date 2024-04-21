import Link from 'next/link'
import Nav from '../components/nav'
 
export default function NotFound() {
  return (
    <div>
      <Nav />  
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}