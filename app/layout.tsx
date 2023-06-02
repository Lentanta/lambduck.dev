import { NavigationBar } from "@components/NavigationBar";
import { PageWrapper } from "@layouts/PageWrapper";
import "@styles/globals.css";

type RootLayoutProps = {
  children: React.ReactNode
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <NavigationBar />
        <main className="bg-gradient-to-b from-[#EDF4F5] 0% to-[#FFF4EE] 100% pb-20">
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;