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
          <div className="card">
            <i class="fa-solid fa-shop"></i>
            <h3 className="titulocard">Abertura de Empresas</h3>
            <p className="textocard">Auxiliamos em todo o processo de formalização do seu negócio, garantindo que sua empresa esteja regularizada e pronta para crescer.</p>
          </div>
          <div className="card">
            <i class="fa-solid fa-list-check"></i>
            <h3 className="titulocard">Gestão Contábil e Fiscal</h3>
            <p className="textocard">Organização das finanças, escrituração contábil e apuração de impostos, sempre com foco em clareza e conformidade legal.</p>
          </div>
          <div className="card">
            <i class="fa-solid fa-file"></i>
            <h3 className="titulocard">Folha de Pagamento</h3>
            <p className="textocard">Cuidamos do cálculo de salários, encargos trabalhistas e obrigações acessórias, oferecendo tranquilidade para você e sua equipe.</p>
          </div>
        </section>
        <a href="/servicos" className="btn">Ver todos</a>
      </main>
      <main id="main3">
        <section>
          <h1 className="titulo">Quem somos</h1>
          <p className="texto">Sou Italo Moura, o contador e fundador por trás da IM Contabilidade. Com mais de 7 anos de experiência, sou especialista em prestadores de serviço e ofereço um atendimento direto e humano. Unindo a contabilidade aos meus estudos de Sistemas de Informação no Instituto Federal Goiano (IF Goiano), entrego soluções tecnológicas que trazem mais eficiência para a sua gestão. Menos burocracia, mais estratégia para o seu negócio.</p>
          <div className="social">
            <a href=""><i class="fa-brands fa-youtube"></i></a>
            <a href="https://www.instagram.com/italomoura.s/"><i class="fa-brands fa-instagram"></i></a>
            <a href=""><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </section>-
        <div className="efeito">
            <div className="efeito2"></div>
            <img className="italo" src="/img/italo.png" alt="" />
          </div>
        
      </main>
    </div>
    
  );
} 
