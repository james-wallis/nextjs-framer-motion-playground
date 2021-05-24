import Link from "next/link";

const links = [
    {
        name: 'Home',
        path: '/',
        active: true,
    },
    {
        name: 'Colours',
        path: '/colours',
    }
]

const Navigation = () => {
    return (
        <nav className="w-screen flex justify-center align-center border-b py-2">
            {
                links.map(({ name, path, active }) => (
                    <Link href={path}>
                        <a className={`py-0 mb-1 md:mb-3 md:mt-4 mt-1 mx-4 ${active ? 'border-b-2 border-button-primary-bg' : ''}`}>
                            {name}
                        </a>
                    </Link>
                ))
            }
        </nav>
    )
}

export default Navigation;
