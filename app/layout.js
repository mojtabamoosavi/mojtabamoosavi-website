import { Lato } from "@next/font/google";
import "../styles/app.scss";

const lato = Lato({
    subsets: ['latin'],
    weight: '400',
})

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="UTF-8" />
                <title>Mojtaba Moosavi</title>
            </head>
            <body className={lato.className}>
                <div>
                    {children}
                </div>
            </body>
        </html>
    );
}
