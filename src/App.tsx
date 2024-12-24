import { FaWhatsapp, FaInstagram, FaBars, FaX } from "react-icons/fa6";

import rachelImg from "./assets/imagens/rachel-carbone.jpg";
import portoImg from "./assets/imagens/w-porto.jpg";
import anaImg from "./assets/imagens/ana-carolina.jpg";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, Element } from "react-scroll";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const arrayMenu = [
  {
    title: "Ínicio",
  },
  {
    title: "Feedbacks",
  },
  {
    title: "Como trabalho",
  },
  {
    title: "Contato",
  },
];

function App() {
  const [headerClassname, setHeaderClassname] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    AOS.init({
      delay: 0,
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHeaderClassname("bg-primary-light shadow");
      } else {
        setHeaderClassname("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleBars = () => {
    setOpen(!open);
  };

  const RenderTitle = () => (
    <h3 className="text-primary-dark text-3xl pl-4 break-all w-[170px]">
      Carolina <span className="pl-5">Carvalho</span>
    </h3>
  );

  return (
    <>
      <main>
        <div
          className={`fixed top-0 w-full z-20 pt-[14px] pb-[14px] ${headerClassname}`}
        >
          <div className="container mx-auto flex items-center justify-between pl-8">
            <RenderTitle />
            <FaBars
              size={24}
              className="block md:hidden text-primary-dark ml-auto mr-5"
              onClick={handleToggleBars}
            />
            <nav>
              <ul className="justify-center gap-x-4 text-lg cursor-pointer hidden md:flex">
                {arrayMenu.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.title}
                      spy={true}
                      smooth={true}
                      offset={0}
                      className="border-b-[3px] border-transparent px-3"
                      activeClass="!border-primary-dark"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <Element name="Ínicio">
          <section className="h-full lg:h-screen border-l-[40px] border-primary-normal pt-24">
            <div className="bg-primary-medium py-2 ">
              <div
                data-aos="zoom-in-right"
                className="container mx-auto text-lg font-semibold text-primary-dark px-2"
              >
                <h4 className="ml-11 lg:ml-0">Quem Sou</h4>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center container justify-center mx-auto mt-12 gap-x-10">
              <div data-aos="fade-up-right" className="relative">
                <div className="bg-white/80 w-[200px] h-[270px] lg:h-[469px] lg:w-[341px] absolute top-7 -left-6 -z-10 border-l-8 border-primary-normal" />
                <img
                  src="/perfil.png"
                  className="w-[200px] lg:h-[469px] lg:w-[341px]"
                  alt="carolina carvalho"
                />
              </div>
              <div
                data-aos="zoom-in"
                className="text-primary-normal max-w-xl pl-4 mt-10 lg:pl-0 lg:mt-0 mb-10 lg:mb-0"
              >
                <p className="mb-4">
                  Me chamo Carolina Carvalho, sou estudante de publicidade e
                  propaganda na Universidade Veiga de Almeida, apaixonada por
                  ajudar empresas a alcançaremseu potencialmáximo online.
                  Comumagrande experiência emestratégias digitais, estou pronta
                  para impulsionar sua presença nas redes sociais e criar
                  conexões autênticas comseu públicoalvo
                </p>
                <p>
                  Compreendo a importância das redes sociais na era digital e
                  como elas podemimpactar diretamente os resultados de
                  umnegócio. Minha abordagemestratégica e criativa visa aumentar
                  o engajamento, construir relacionamentos duradouros egerar
                  umimpacto positivo na percepção da sua pousada/hotel.
                </p>
              </div>
            </div>
          </section>
        </Element>
        <div className="h-10 bg-primary-dark" />
        <Element name="Feedbacks">
          <section className="lg:h-screen flex flex-col justify-evenly gap-y-32 items-center lg:border-r-[40px] border-primary-normal">
            <div className="text-center text-4xl text-primary-dark lg:mt-20 mt-32">
              <span>Feedback pessoais dos clientes</span>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-y-24 gap-x-12 container mx-auto px-4 lg:px-0 mb-20 lg:mb-0">
              <div className="lg:w-1/4 justify-center text-center bg-primary-normal text-white rounded-lg p-4 relative">
                <img
                  src={rachelImg}
                  className="absolute h-32 w-32 rounded-full  border-8 border-primary-normal -top-[70px] left-1/2 transform -translate-x-1/2"
                />
                <p className="mt-10">
                  Você põe amor emabsolutamente tudo oque faz,por isso,não tem
                  como o resultado ser menos doque incrível, sempre irei te
                  recomendar,muito obrigada!
                </p>
                <div className="py-1 bg-white text-primary-normal font-bold rounded-md mt-5">
                  Rachel Carbone
                </div>
              </div>
              <div className="lg:w-1/4 text-center bg-primary-normal text-white rounded-lg p-4 relative">
                <img
                  src={portoImg}
                  className="absolute h-32 w-32 rounded-full  border-8 border-primary-normal -top-[70px] left-1/2 transform -translate-x-1/2"
                />
                <p className="mt-10">
                  O carinho e atenção em cada detalhe é percebidono resultado do
                  seu trabalho.Eu só tinha uma ideia do que queria e você criou
                  algo que eu nem imaginava que poderia ser tão bom.
                </p>
                <div className="py-1 bg-white text-primary-normal font-bold rounded-md mt-5">
                  W. Porto
                </div>
              </div>
              <div className="lg:w-1/4 text-center bg-primary-normal text-white rounded-lg  p-4 relative">
                <img
                  src={anaImg}
                  className="absolute h-32 w-32 rounded-full  border-8 border-primary-normal -top-[70px] left-1/2 transform -translate-x-1/2"
                />
                <p className="mt-10">
                  Sou muito grata por ter sua participaçã onesse momento tão
                  especial e ter colaborado com seu trabalho impecável,que
                  transmite muito carinho,profissionalismo e tudo demelhor.
                </p>
                <div className="py-1 bg-white text-primary-normal font-bold rounded-md mt-5">
                  Ana Carolina
                </div>
              </div>
            </div>
          </section>
        </Element>
        <Element name="Contato">
          <section className="h-screen flex flex-col justify-center gap-y-16 items-center bg-primary-medium">
            <h3 className="text-4xl md:text-7xl text-primary-dark">
              Vamos inciar?
            </h3>
            <div className="flex flex-col gap-y-5">
              <div className="flex gap-1 text-primary-dark">
                <FaInstagram size={30} />
                <span className="text-lg font-medium">@designercarolinac</span>
              </div>
              <a
                target="_blank"
                href="https://wa.me/22997391917"
                className="flex gap-1 text-primary-dark"
              >
                <FaWhatsapp size={30} />
                <span className="text-lg font-medium">(22) 99739-1917</span>
              </a>
            </div>
          </section>
        </Element>
      </main>
      <Drawer anchor="right" open={open} onClose={handleToggleBars}>
        <div className="w-[300px] bg-primary-normal h-full text-primary-dark">
          <List>
            <div>
              <FaX
                onClick={handleToggleBars}
                size={20}
                className="absolute right-5 top-8"
              />
              <RenderTitle />
            </div>
            <div className="mt-5 pl-5">
              {arrayMenu.map((item) => (
                <ListItem key={item.title} disablePadding>
                  <ListItemButton>
                    <Link
                      to={item.title}
                      spy={true}
                      smooth={true}
                      offset={0}
                      className="border-b-[3px] border-transparent px-3"
                      activeClass="!border-primary-dark"
                      onClick={handleToggleBars}
                    >
                      <ListItemText primary={item.title} />
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </div>
          </List>
        </div>
      </Drawer>
    </>
  );
}

export default App;
