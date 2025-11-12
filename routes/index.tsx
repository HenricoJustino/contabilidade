import { useSignal } from "@preact/signals";
import { useState } from "preact/hooks";

export default function Home() {
  return (
    <div>
      <main id="main0">
        <div className="textoprincipal">
          <p>Contabilidade online,</p>
          <p>fácil e segura para sua</p>
          <p>empresa</p>
          <small>- Assessoria exclusiva com especialistas do segmento do seu negocio</small>
          <small>- Atendimento humanizado Comunicação clara e próxima, sem burocracia.</small>
          <small>- Planos de acordo com a necessidade do seu negocio</small>
          <a href="" className="btn bi">Fale Conosco</a>
        </div>
        <div className="img">
          <img className="imgprincipal" src="/img/w1.JPG" alt="img" />
        </div>
      </main>
      <main id="main1">
        <img className="imgmei" src="/img/w2.JPG" alt="img" />
        <div>
          <h1>O limite do MEI é um obstáculo para o seu crescimento?</h1>
          <br />
          <p>Não permita que o teto de faturamento ou a mudança de atividade freiem seus planos. Se o seu MEI evoluiu ou passou a exercer um novo serviço não permitido, nossa equipe é especializada em conduzir essa transição. </p>
        </div>
        
      </main>
      <main id="main2">
        <h1 className="titulo">Serviços</h1>
        <div className="b-carrossel">
        </div>
        <section id="carrossel" className="carrossel">
          <div className="cards">
            <div className="card">
              <i class="fa-solid fa-shop"></i>
              <h3 className="titulocard">Abertura de Empresas</h3>
              <p className="textocard">Realizamos todo o processo de formalização do seu negócio, garantindo que sua empresa esteja regularizada e pronta para crescer.</p>
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
            <div className="card">
            <i class="fa-solid fa-handshake"></i>
              <h3 className="titulocard">Regularizaçao de empresas</h3>
              <p className="textocard">Analisamos e resolvemos pendências, débitos e problemas com a Receita Federal e órgãos fiscais, com segurança jurídica e buscando as melhores negociações, garantindo a completa conformidade do seu negócio.</p>
            </div>
            <div className="card">
              <i class="fa-solid fa-tractor"></i>
              <h3 className="titulocard">Gestão Pessoa Física e Produtor Rural</h3>
              <p className="textocard">Oferecemos suporte completo para suas obrigações fiscais. Cuidamos da Declaração de Imposto de Renda, regularização de CPF, declarações de Produtor Rural, garantindo sua tranquilidade e conformidade com a legislação.</p>
            </div>
          </div>
          
        </section>
        <a href="/servicos" className="btn">Ver todos</a>
      </main>
      <main id="main3">
        <section>
          <h1 className="titulo">Quem somos?</h1>
          <p className="texto">Sou Italo Moura, o contador e fundador por trás da IM Contabilidade. Com mais de 7 anos de experiência, sou especialista em prestadores de serviço e ofereço um atendimento direto e humano. Unindo a contabilidade aos meus estudos de Sistemas de Informação no Instituto Federal Goiano (IF Goiano), entrego soluções tecnológicas que trazem mais eficiência para a sua gestão. Menos burocracia, mais estratégia para o seu negócio.</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><i class="fa-brands fa-youtube"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
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
