
import Logo from "../icons/logo";
import MenuButton from "../icons/menu";
import useNavbar from "../../hooks/useNavbar";

export default function Navbar() {

  const { menuOpen, setMenuOpen, scrolled } = useNavbar();

  const _content = `
    flex items-center justify-evenly flex-col 
    text-tertiary-100
    w-full h-screen 
    absolute -left-full top-0
    transition-all duration-200 ease-in-out
    h-fit
    md:flex-row md:justify-between md:w-2/3
    md:static
    md:width-full md:h-auto 
    md:transition-none
    max-md:data-[active=true]:left-0
    max-md:data-[active=true]:bg-gray-950
    max-md:data-[active=true]:p-10
    group
  `;

  return (
    <nav data-scroll={scrolled} className="flex w-full items-center justify-between backdrop-blur-md fixed left-0 top-0 p-6 z-50 data-[scroll=true]:bg-white/50 data-[scroll=true]:border-b border-b-gray-300 data-[scroll=true]:py-4 data-[scroll=true]:shadow-3xl transition-all ease-in-out duration-300">
      <aside className="flex items-center gap-x-3 md:w-1/3"> 
        <Logo dark={false} />
        <strong>Unbundle Ai</strong>
      </aside>
      <aside data-active={menuOpen} className={_content}>
        <ul className="flex text-tertiary-100 gap-x-7 w-1/2 justify-center max-md:group-data-[active=true]:flex-col group-data-[active=true]:justify-center group-data-[active=true]:text-center max-md:group-data-[active=true]:w-full group-data-[active=true]:gap-y-15">
          <li><a href="#" className="hover:text-primary-100 font-semibold group-data-[active=true]:hover:text-secondary-50">Deconstruct</a></li>
          <li><a href="#" className="hover:text-primary-100 font-semibold group-data-[active=true]:hover:text-secondary-50">Blueprints</a></li>
          <li><a href="#" className="hover:text-primary-100 font-semibold group-data-[active=true]:hover:text-secondary-50">History</a></li>
        </ul>
        <ul className="flex gap-x-2 md:gap-x-4 w-1/2 justify-end max-md:group-data-[active=true]:justify-center group-data-[active=true]:text-center max-md:group-data-[active=true]:w-full max-md:group-data-[active=true]:gap-x-10">
          <li><a href="#" className="hover:text-primary-200 font-semibold">Log in</a></li>
          <li><a href="#" className="hover:bg-primary-200 font-semibold text-white bg-primary-100 px-6 py-2 rounded-xl shadow-black-op shadow-lg">Start Free</a></li>
        </ul>
      </aside>
      <MenuButton state={menuOpen} click={() => setMenuOpen(!menuOpen)} />
    </nav>
  );
}