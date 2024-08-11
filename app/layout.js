import FollowingCursor from "./components/FollowingCursor";
import "./globals.css";
import "./styles/bg-animation.css";

export const metadata = {
  title: "Ling Myat Aung",
  description: "Experienced full-stack developer from Myanmar. Ready to create innovative web solutions!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='font-mono'>
        <main id="main" className="py-28 md:px-0 px-3">
          {children}
        </main>

        <div className="star-field">
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
        </div>

        <FollowingCursor/>
      </body>
    </html>
  );
}
