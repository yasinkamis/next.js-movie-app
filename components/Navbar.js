import Link from "next/link"
const Navbar = () => {
    return (
        <div>
            <nav>
                <Link href="/">
                    <a>Movie App</a>
                </Link>
            </nav>
            <style jsx>{`
                nav{
                    width: 100%;
                    height: 80px;
                    background-color: #fff;
                    display:flex;
                    align-items:center;
                    justify-content:start;
                }
                a{
                    margin-left: 20px;
                    color:#000;
                    font-weight: bold;
                    transition: all .2s ease-in; 
                }
                a:hover{
                    color: #999;
                }

            `}</style>
        </div>
    )

}

export default Navbar