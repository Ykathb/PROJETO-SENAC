import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/app/components/ui/menubar";
import { InputWithButton } from "./navbar/page";
import { Button } from "./button/button";

const Home = () => {
  return (
    // COMEÇO DIV PRINCIPAL
    <div>
      {/* COMEÇO DIV NAVEGATION */}
      <div className="bg-rose-400 flex justify-end h-[100px] p-5 items-center">
        <img src="https://placehold.co/300x50"></img>
        {/* COMEÇO SELECT E TIPO */}
        <div className="flex justify-center items-center w-full">
          <InputWithButton />
        </div>
        {/* FIM SELECT E TIPO */}

        {/* MENU */}
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 24 24" id="Menu--Streamline-Sharp----Material-Symbols" height="24" width="24"><desc>Menu Streamline Icon: https://streamlinehq.com</desc><path fill="#000000" d="M2.875 17.25v-1.4375h17.25v1.4375H2.875Zm0 -5.03125v-1.4375h17.25v1.4375H2.875ZM2.875 7.1875v-1.4375h17.25v1.4375H2.875Z" stroke-width="1"></path></svg></MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <MenubarShortcut>Bem vindo</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>Items</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Home</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Loggin</MenubarItem>
              </MenubarContent>
          </MenubarMenu>
        </Menubar>
        {/* FIM MENU */}
      </div>
      {/* FIM DIV NAVEGATION */}

      {/* COMEÇO DIV BANNER */}
      <div className="banner">
        <h1 className="text-center" style={{ fontSize: '50px'}}>Bem Vindo ao *****</h1> 
        <p  className="text-center p-2 m-2" style={{ fontSize: '30px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam adipisci aliquam error voluptates sint inventore cupiditate odit voluptatibus, ab soluta est ipsa hic laudantium iure molestias! Dolore illo veritatis veniam.</p>
      </div>
      {/* FIM DIV BANNER */}

      {/* COMEÇO DIV ITEMS */}
      {/* FIM DIV ITEMS */}
    </div>
    // FIM DIV PRINCIPAL
  );
};

export default Home;
