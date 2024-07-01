import Link from "next/link"

export default function Headers() {
    const NavLinks =[
        {
            name:"Home",
            href:"/"
        },
        {
            name:"Blog",
            href:"/blog"
        },
        {
            name : "Sign in",
            href:"/sign-in"
        }
    ]
  return (
    <nav className="h-20 flex justify-between items-center w-full">
        <ul className="flex justify-between items-center w-full m-5 text-xl">
             {NavLinks.map((link,index)=>(
                 <li key={index}>
                     <Link href={link.href}>{link.name}</Link>
                 </li>
             ))}
        </ul>
    </nav>
  )
}
