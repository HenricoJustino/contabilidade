import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div>
      <main id="main">
        <div className="img"></div>
        <div className="textoprincipal">
          <p>Contabilidade online,</p>
          <p>fácil e segura para sua</p>
          <p>empresa</p>
        </div>
        <a href="" className="btn bi">Fale Conosco</a>
      </main>
      <main id="main2">
        <h1 className="titulo">Serviços</h1>
        <section>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </section>
        <a href="/servicos" className="btn">Ver todos</a>
      </main>
      <main id="main3">
        <section>
          <h1 className="titulo">Quem somos</h1>
          <p className="texto">Sou Italo Moura, o contador e fundador por trás da IM Contabilidade. Com mais de 7 anos de experiência, sou especialista em prestadores de serviço e ofereço um atendimento direto e humano. Unindo a contabilidade aos meus estudos de Sistemas de Informação no Instituto Federal Goiano (IF Goiano), entrego soluções tecnológicas que trazem mais eficiência para a sua gestão. Menos burocracia, mais estratégia para o seu negócio.</p>
        </section>
        <div className="efeito">
            <div className="efeito2"></div>
            <img className="italo" src="/img/italo.png" alt="" />
          </div>
        
      </main>
    </div>
    
  );
} 
