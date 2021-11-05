import Head from "next/head";
import Image from "next/image"
import HeroBg from "../assets/images/bg-hero.jpg"
import Grafism from "../assets/images/grafismo.png"
import DomusLogo from '../assets/images/domus-logo.png'
import Button from "../components/atoms/Button";
import Container from "../components/atoms/Container";
import Logo from "../components/atoms/Logo";

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
        <svg viewBox="0 0 1367 80" className="relative hidden sm:block text-brand-complementary-pure" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M1367 80V0.5L0 80H1367Z" fill="currentColor"/>
        </svg>
        <svg viewBox="0 0 360 80" fill="none" className=" sm:hidden relative text-brand-complementary-pure" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M360 80.5V0.5L0 80.5H360Z" fill="currentColor"/>
        </svg>

      </header>
      <div className="bg-brand-complementary-pure">

        <Container className=""> 
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
          <div className="mt-11 bg-neutral-light-pure px-14 pt-14 pb-9"></div>
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

