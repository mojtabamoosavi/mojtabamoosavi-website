export default function Footer() {
    return (
        <footer className="py-6 text-sm text-gray-400">
            <div className="container">
                <span>© 2022 · Powered by </span>
                <a href="https://nextjs.org" className="hover:text-primary" target="_blank" rel="noreferrer">Next.js</a>
                <span> & </span>
                <a href="https://github.com" className="hover:text-primary" target="_blank" rel="noreferrer">Github Pages</a>.
            </div>
        </footer>
    );
}
