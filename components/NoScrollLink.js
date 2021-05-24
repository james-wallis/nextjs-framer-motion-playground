import Link from 'next/link'

const NoScrollLink = ({ children, href, passHref, as }) => (
    // Pass any props to Link, then set scroll to false
    // Stops the scrolling to the top of the page before a page animation has finished
    // Check _app.js
    <Link href={href} passHref={passHref} as={as} scroll={false}>
        {children}
    </Link>
)

export default NoScrollLink