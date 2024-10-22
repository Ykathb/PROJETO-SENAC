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
import { Button } from "@/components/ui/button";
import { CarouselSize } from "./carousel.page/page";

function Home() {
  return (
    // COMEÇO DIV PRINCIPAL
    <div>
      {/* COMEÇO DIV NAVEGATION */}
      <div className="flex h-[100px] items-center justify-end bg-rose-400 p-5">
        <img src="https://placehold.co/300x50"></img>
        {/* COMEÇO SELECT E TIPO */}
        <div className="flex w-full items-center justify-center">
          <InputWithButton />
        </div>
        {/* FIM SELECT E TIPO */}

        {/* MENU */}
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="-0.5 -0.5 24 24"
                id="Menu--Streamline-Sharp----Material-Symbols"
                height="24"
                width="24"
              >
                <desc>Menu Streamline Icon: https://streamlinehq.com</desc>
                <path
                  fill="#000000"
                  d="M2.875 17.25v-1.4375h17.25v1.4375H2.875Zm0 -5.03125v-1.4375h17.25v1.4375H2.875ZM2.875 7.1875v-1.4375h17.25v1.4375H2.875Z"
                  stroke-width="1"
                ></path>
              </svg>
            </MenubarTrigger>
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
      <div
        className="banner"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <h1 className="p-5" style={{ fontSize: "50px", color: "white" }}>
          Bem Vindo ao *****
        </h1>
        <p className="m-1 p-3" style={{ fontSize: "20px", color: "white" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Button>Ver mais</Button>
      </div>

      {/* FIM DIV BANNER */}

      {/* COMEÇO DIV ITEMS */}
      <div className="flex flex-grow justify-center">
        <CarouselSize />
      </div>
      {/* FIM DIV ITEMS */}
    </div>
    // FIM DIV PRINCIPAL
  );
}

export default Home;
