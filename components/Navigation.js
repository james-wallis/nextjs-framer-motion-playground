import { useRouter } from 'next/router';
import { AnimateSharedLayout, motion } from 'framer-motion';
import Link from './NoScrollLink';

const links = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Colours',
        path: '/colours',
    },
    {
        name: 'Scroll',
        path: '/scroll',
    }
]

const Navigation = () => {
    const { pathname } = useRouter();
    return (
        <AnimateSharedLayout>
            <nav className="w-screen flex justify-center align-center border-b border-t py-2 bg-white">
                {
                    links.map(({ name, path }) => (
                        <Link href={path} key={path}>
                            <a className={`py-0 mb-1 md:mb-3 md:mt-4 mt-1 mx-4`}>
                                {name}
                                {pathname === path && (
                                    <motion.div
                                        layoutId="navigation-underline"
                                        className="navigation-underline"
                                        animate
                                    />
                                )}
                            </a>
                        </Link>
                    ))
                }
            </nav>
        </AnimateSharedLayout>
    )
}

export default Navigation;
