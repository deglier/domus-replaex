import Head from "next/head";
import Image from "next/image"
import HeroBg from "../assets/images/bg-hero.jpg"
import Grafism from "../assets/images/grafismo.png"
import DomusLogo from '../assets/images/domus-logo.png'
import ContactBg from "../assets/images/bg-contact.jpg"
import GotaBlocked from "../assets/images/gota-blocked.png"
import Button from "../components/atoms/Button";
import Container from "../components/atoms/Container";
import Logo from "../components/atoms/Logo";
import SpaceAngled from "../components/atoms/SpaceAngled";

export default function Home({ planos, lastUpdate }) {
  return (
    <div className="font-primary">
      <Head>
        <title>Replaex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="relative overflow-hidden bg-brand-primary-pure bg-no-repeat">
        {/* style={{
          backgroundImage: `url(/bg-hero.jpg)`,
          backgroundPosition: '0 96px',
                
      }} */}
      {/* style={{clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)'}} */}
        <Image layout="fill" placeholder="blur" src={HeroBg} className="object-cover hero-mobile pointer-events-none" />
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-brand-primary-pure mix-blend-multiply"></div>
        <Container className="relative px-6 pb-52 lg:pb-8">
          <div className="flex flex-col lg:flex-row text-neutral-light-pure">
            {/* col-1 */}
            <div className="pt-8 max-w-md">
              <Logo className="w-[9.75rem] lg:w-[13.25rem]" />
              <div className="mt-8 lg:mt-[4.375rem] font-black leading-none uppercase">
                <h3 className="tracking-[0.32em] text-brand-complementary-pure lg:text-brand-complementary-up text-base lg:text-xl">Domus com Sistema BA</h3>
                <h1 className="mt-6 text-[2rem] leading-none lg:text-5xl">A solução definitiva para iluminar seu galpão</h1>
                <Button className="mt-6 w-full lg:w-auto" >Falar com um especialista</Button>
              </div>
            </div>
            {/* col-2 */}
          </div>
        </Container>
        {/* text-brand-complementary-pure */}
        <SpaceAngled className="text-brand-complementary-pure" />

      </header>
      <div className="bg-brand-complementary-pure">
        
        <Container> 
          <div className="-mt-64 sm:mt-[-55.85%] sm:flex sm:flex-row-reverse">
            <div>
              <Image src={Grafism} placeholder="blur" className="max-w-[679px] max-h-[679px]" />
            </div>
          </div>
          
          <div className="px-6 sm:px-0 text-neutral-light-pure sm:w-4/5">
            <div className="sm:flex sm:items-center sm:divide-x-2 sm:gap-x-4">
              <Image src={DomusLogo} placeholder="blur" />
              <p className="mt-4 sm:mt-0 font-black uppercase tracking-[0.32em] text-base leading-none sm:leading-loose sm:pl-4">a escolha ideal</p>
            </div>
            <h3 className="mt-5 font-medium text-2xl leading-snug sm:font-bold sm:text-[2rem]">Sistema de chapas de policarbonato ideal para coberturas com iluminação natural contínua</h3>
          </div>
          <div className="xs:p-5 xs:mx-5 mt-11 mx-6 p-8 bg-neutral-light-pure sm:mx-0 sm:p-14 sm:pb-9 sm:grid sm:grid-cols-5 ">
            <p className="font-bold text-brand-primary-down text-xl leading-snug sm:text-2xl sm:col-span-2 sm:pr-10">Fabricado no Brasil, o DOMUS é um produto versátil desenvolvido para ser manipulado com todas as telhas do mercado.</p>
            <div className="mt-10 sm:mt-0 sm:col-span-3">
              <p className="text-neutral-dark-down font-light text-xl">O sistema DOMUS pode ser aplicado em todos os tipo de telhas: Trapezoidais; em fibrocimento; em sistema Roll-on; zipadas e auto-portantes; pré-moldadas; termoacústicas; e cobertura de passarelas.</p>
              <Button className="mt-10 w-full lg:w-auto" >Falar com um especialista</Button>
            </div>
          </div>
        </Container>
        <div className="relative bg-neutral-light-pure">
          <Image layout="fill" placeholder="blur" src={ContactBg} className="object-cover fixed top-0 left-0 right-0 bottom-0 pointer-events-none opacity-10" />
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-contact mix-blend-color"></div>
          <Container className="relative px-6 pt-10 pb-8 sm:px-16 sm:pt-14 sm:flex sm:gap-x-4">
            <div className="sm:pr-12 sm:w-[55.56%]">
              <h3 className="text-brand-complementary-pure font-bold xs:text-base text-xl sm:text-2xl leading-none">Escolha Domus com sistema BA</h3>
              <p className="mt-6 font-light text-brand-primary-pure xs:text-xl text-2xl text-[2.5rem] leading-tight" >Agende uma apresentação técnica e <strong className="font-medium">saiba tudo sobre o Domus com sistema BA da Replaex</strong></p>
            </div>
            <div className=" mt-8 sm:w-[44.44%] bg-neutral-light-pure rounded p-6 sm:mt-0 sm:p-14 shadow-contact">
              <p>teste</p>
            </div>
          </Container>
          <SpaceAngled className="text-neutral-light-pure transform scale-x-[-1]" />
        </div>
      </div>
      <div className="relative bg-neutral-light-pure pt-6 pb-10 sm:pt-4 sm:pb-20">
        <Container className="px-6 flex flex-col justify-center items-center sm:flex-row">
          <div className="sm:w-1/4">
            <div className="sm:hidden text-center">
              <Image placeholder="blur" src={GotaBlocked} width={124} height={124} />
            </div>
            <div className="hidden sm:block text-left">
              <Image placeholder="blur" src={GotaBlocked} width={226} height={226} />
            </div>
          </div>
          <div className="sm:w-3/4 sm:flex sm:pl-2 sm:gap-x-8">
            <h3 className="text-brand-primary-pure font-bold text-2xl sm:text-3xl leading-tight text-center sm:text-left mt-6 mb-8 sm:m-0">Chega de vazamentos!</h3>
            <p className="text-neutral-dark-down font-light text-base sm:text-xl leading-snug text-center sm:text-left">O Domus com Sistema BA da Replaex foi desenvolvido para assegurar total estanqueidade à sua obra, sem anteparos que represam a água e sem a sujeira e as manchas negras em lentes de policarbonato prismático.</p>
          </div>
        </Container>
      </div>
      <div className="relative bg-neutral-dark-pure">
        <Container large>
          <p>teste</p>
        </Container>

      </div>

      <section>
        {/* <svg viewBox="0 0 1367 587" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1367 507.5L0 587V0H1367V507.5Z" fill="currentColor" className="text-brand-primary-pure" />
        </svg> */}

      </section>
    </div>
  );
}

