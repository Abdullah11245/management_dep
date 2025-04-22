import "./globals.css";
import Sidebar from './Components/Side&Topbar/Bars';
import Navbar from './Components/Navbar/Navbar';

// Check if fonts are available

export const metadata = {
  title: "ManagementSystem",
  description: "Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Navbar />
        <div className="flex">
          <div className="mr-64">
            <Sidebar />
          </div>
          <div className="w-full p-4 mt-16">
              {children}
          </div>
        </div>
      </body>
    </html>
  );
}
