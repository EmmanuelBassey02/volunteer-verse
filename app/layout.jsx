// import { Lato, Roboto } from 'next/font/google';
// import "./globals.css";

// const lato = Lato({
//   subsets: ['latin'],
//   variable: "--font-lato",
//   weight: ['100', '300', '400', '700', '900']
// });
// const roboto = Roboto({
//   subsets: ['latin'],
//   variable: "--font-roboto",
//   weight: ['100', '300', '400', '700', '900']
// });


import { Inter, Roboto } from 'next/font/google'
import "./globals.css";
 
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
 
const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: ['100', '300', '400', '700', '900']
})

export const metadata = {
  title: "Volunteer Verse",
  description: "Welcome to VolunteerVerse: A New Age of Volunteering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
