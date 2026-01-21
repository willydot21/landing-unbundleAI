import Footer from "../components/ui/footer";
import Navbar from "../components/ui/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <div className="flex flex-col w-full py-5 px-3 md:px-10 max-w-8xl">
      <Navbar />
      {children}
    </div>
    <Footer/>
    </>
  );
}