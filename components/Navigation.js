import Link from './NoScrollLink';

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
        <nav className="w-screen flex justify-center align-center border-b border-t py-2 bg-white">
            {
                links.map(({ name, path, active }) => (
                    <Link href={path} key={path}>
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
