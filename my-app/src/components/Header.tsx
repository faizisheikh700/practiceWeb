import Link from "next/link"


export default function Head() {
  return (
      <>
      <div className="navbar">
        <ul className="head">
          <Link href={"/"}>
          <li>Home</li>
          </Link>
          <Link href={"/aboutus"}>
          <li>About Us</li>
          </Link>
          <Link href={"contact"}>
          <li>Contact</li>
          </Link>
          <Link href={"careers"}>
          <li>Careers</li>
          </Link>
        </ul>
      </div>
      </>
  )
  
}