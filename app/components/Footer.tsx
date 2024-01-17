import Link from "next/link"

export default function Footer() {
    return (
        <footer
        className="bg-sfprimary text-center  lg:text-left">
        <div className="p-4 mt-4 text-center  flex flex-col justify-around">
        <div><a href = "mailto: laiweicai@sf-express.com">Contact us: laiweicai@sf-express.com</a></div>
          © 2024
          {/* <Link
            className="text-white "
            href="/"
            >SF International</Link> */}
        </div>
      </footer>
    )
}