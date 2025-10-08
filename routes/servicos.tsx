import { Head } from "$fresh/runtime.ts";

export default function servicos() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="/styles/servicos.css" />
      </Head>
      <main id="servicos-main">
        <h1 className="titulo">Nossos Serviços</h1>
        
        <div className="servicos-container">
          {/* Serviços Contábeis */}
          <section className="servico-topico">
            <div className="topico-header">
              <i className="fa-solid fa-briefcase"></i>
              <h2>Serviços Contábeis</h2>
            </div>
            <div className="topico-content">
              <ul className="servico-lista">
                <li>
                  <span className="servico-nome">Contabilidade Completa</span>
                  <p className="servico-desc">Registro e controle de todas as movimentações financeiras da empresa, garantindo organização e conformidade legal.</p>
                </li>
                <li>
                  <span className="servico-nome">Relatórios Contábeis</span>
                  <p className="servico-desc">Geração de demonstrativos e balanços que ajudam na tomada de decisões estratégicas.</p>
                </li>
                <li>
                  <span className="servico-nome">Conciliação Bancária</span>
                  <p className="servico-desc">Importação e conferência de extratos para manter as finanças sempre corretas e atualizadas.</p>
                </li>
                <li>
                  <span className="servico-nome">Análise Financeira</span>
                  <p className="servico-desc">Avaliação dos resultados da empresa com orientações para melhorar o desempenho financeiro.</p>
                </li>
                <li>
                  <span className="servico-nome">Apresentação de Resultados</span>
                  <p className="servico-desc">Reuniões periódicas para discutir o desempenho e as oportunidades de crescimento.</p>
                </li>
              </ul>
            </div>
          </section>
          
          {/* Serviços Fiscais */}
          <section className="servico-topico">
            <div className="topico-header">
              <i className="fa-solid fa-receipt"></i>
              <h2>Serviços Fiscais</h2>
            </div>
            <div className="topico-content">
              <ul className="servico-lista">
                <li>
                  <span className="servico-nome">Planejamento Tributário</span>
                  <p className="servico-desc">Estratégias para reduzir a carga de impostos dentro da legalidade.</p>
                </li>
                <li>
                  <span className="servico-nome">Emissão de Notas Fiscais (NFS)</span>
                  <p className="servico-desc">Suporte completo na emissão e gestão de notas fiscais eletrônicas.</p>
                </li>
                <li>
                  <span className="servico-nome">Regime Tributário</span>
                  <p className="servico-desc">Definição do regime mais vantajoso (Simples Nacional, Lucro Presumido etc.).</p>
                </li>
                <li>
                  <span className="servico-nome">Consultoria Fiscal</span>
                  <p className="servico-desc">Acompanhamento contínuo para evitar erros e garantir economia tributária.</p>
                </li>
              </ul>
            </div>
          </section>
          
          {/* Departamento Pessoal */}
          <section className="servico-topico">
            <div className="topico-header">
              <i className="fa-solid fa-users"></i>
              <h2>Departamento Pessoal</h2>
            </div>
            <div className="topico-content">
              <ul className="servico-lista">
                <li>
                  <span className="servico-nome">Folha de Pagamento</span>
                  <p className="servico-desc">Cálculo e processamento mensal dos salários e encargos de funcionários.</p>
                </li>
                <li>
                  <span className="servico-nome">Pró-Labore</span>
                  <p className="servico-desc">Emissão e controle da remuneração dos sócios da empresa.</p>
                </li>
                <li>
                  <span className="servico-nome">Gestão de Funcionários</span>
                  <p className="servico-desc">Organização de admissões, demissões e obrigações trabalhistas.</p>
                </li>
                <li>
                  <span className="servico-nome">Guias Trabalhistas e Previdenciárias</span>
                  <p className="servico-desc">Geração de todos os encargos e obrigações legais do RH.</p>
                </li>
              </ul>
            </div>
          </section>
          
          {/* Atendimento e Consultoria */}
          <section className="servico-topico">
            <div className="topico-header">
              <i className="fa-solid fa-headset"></i>
              <h2>Atendimento e Consultoria</h2>
            </div>
            <div className="topico-content">
              <ul className="servico-lista">
                <li>
                  <span className="servico-nome">Contador Dedicado</span>
                  <p className="servico-desc">Atendimento exclusivo e acompanhamento próximo da sua empresa.</p>
                </li>
                <li>
                  <span className="servico-nome">Suporte Multicanal</span>
                  <p className="servico-desc">Contato via WhatsApp, e-mail e telefone dentro do horário comercial.</p>
                </li>
                <li>
                  <span className="servico-nome">Reuniões Individuais</span>
                  <p className="servico-desc">Acompanhamento personalizado e explicações detalhadas sobre sua contabilidade.</p>
                </li>
                <li>
                  <span className="servico-nome">Consultoria Financeira</span>
                  <p className="servico-desc">Orientação estratégica para manter a saúde financeira da empresa.</p>
                </li>
              </ul>
            </div>
          </section>
          
          {/* Vantagens e Benefícios */}
          <section className="servico-topico">
            <div className="topico-header">
              <i className="fa-solid fa-star"></i>
              <h2>Vantagens e Benefícios</h2>
            </div>
            <div className="topico-content">
              <ul className="servico-lista">
                <li>
                  <span className="servico-nome">Atendimento Humanizado</span>
                  <p className="servico-desc">Comunicação clara e próxima, sem burocracia.</p>
                </li>
                <li>
                  <span className="servico-nome">Serviços para Comércio e Serviços</span>
                  <p className="servico-desc">Planos adaptados ao perfil e porte de cada negócio.</p>
                </li>
                <li>
                  <span className="servico-nome">Faturamento Flexível</span>
                  <p className="servico-desc">Honorários ajustados conforme a receita mensal.</p>
                </li>
                <li>
                  <span className="servico-nome">Acompanhamento Trimestral</span>
                  <p className="servico-desc">Revisão dos resultados e metas a cada trimestre.</p>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
