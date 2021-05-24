import { FiGithub, FiHelpCircle } from 'react-icons/fi'
import Link from 'next/link'

const Header = () => {
    const articleUrl = 'https://dev.to/jameswallis/i-made-a-free-dev-to-writing-streak-calculator-that-anyone-can-use-4m07'
    const websiteUrl = 'https://wallis.dev';
    return (
        <header className="w-screen bg-white h-header shadow-header">
            <div className="max-w-site m-auto px-2 lg:px-4 h-full flex flex-row items-center justify-between">
                <Link href="/">
                    <a className="flex items-center pl-2">
                        <h1 className="text-lg">
                            Next.js x Framer Motion
                        </h1>
                    </a>
                </Link>
                <div className="flex items-center">
                    <a
                        className="
                            mr-2 hidden md:block rounded-devto text-center py-2 px-4
                            bg-button-primary-bg hover:bg-button-primary-bg-hover
                            text-button-primary-color hover:text-button-primary-color-hover
                            transition-colors font-medium
                        "
                        href={articleUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Read the post
                    </a>
                    <a
                        href={articleUrl}
                        className="mx-1 p-2 rounded-full hover:bg-ghost-light-hover transition-colors"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <FiHelpCircle className="text-2xl text-ghost" />
                    </a>
                    <a
                        href="https://github.com/james-wallis/nextjs-framer-motion-playground"
                        className="mx-1 p-2 rounded-full hover:bg-ghost-light-hover transition-colors"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <FiGithub className="text-2xl text-ghost" />
                    </a>
                    <a
                        href={websiteUrl}
                        className="h-8 w-8 mx-3"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <img
                            className="h-full w-full rounded-full"
                            src="https://res.cloudinary.com/practicaldev/image/fetch/s--Kdy8BPP2--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/436375/3c47ee9b-9ceb-4a43-b28a-3ac3e65d0173.jpeg"
                            alt="User profile"
                        />
                    </a>
                </div>
            </div>
        </header>
    )
    }

export default Header