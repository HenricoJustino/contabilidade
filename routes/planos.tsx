import { Head } from "$fresh/runtime.ts";

export default function planos() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/planos.css" />
      </Head>
      <main id="planos-main">
        <h1 className="titulo">Planos</h1>
        <section className="planos-list">
          {/* Card do Serviço 1 (modelo) */}
          <article className="planos-card">
            <div className="card-header">
              <div>
                <h3 className="service-title">Empresas de Serviços</h3>
                <p className="service-subtitle">Comparativo de planos: Essencial e Completo</p>
              </div>
            </div>
            <div className="card-table">
              <div className="row header">
                <div>Descrição</div>
                <div className="center">Essencial</div>
                <div className="center">Completo</div>
              </div>
              {/* Contabilidade */}
              <div className="row header">
                <div>Contabilidade:</div>
                <div></div>
                <div></div>
              </div>
              <div className="row">
                <div className="descricao">Contabilidade Completa</div>
                <div className="plano basico"><i class="fa-solid fa-check inclui"></i></div>
                <div className="plano completo"><i class="fa-solid fa-check inclui"></i></div>
              </div>
              <div className="row">
                <div className="descricao">Relatórios Contábeis</div>
                <div className="plano basico"><i class="fa-solid fa-check inclui"></i></div>
                <div className="plano completo"><i class="fa-solid fa-check inclui"></i></div>
              </div>
              <div className="row">
                <div className="descricao">Importação e conciliação de extrato</div>
                <div className="plano basico"><i class="fa-solid fa-xmark nao-inclui"></i></div>
                <div className="plano completo"><i class="fa-solid fa-check inclui"></i></div>
              </div>
              <div className="row">
                <div className="descricao">Análise Financeira</div>
                <div className="plano basico"><i class="fa-solid fa-xmark nao-inclui"></i></div>
                <div className="plano completo"><i class="fa-solid fa-check inclui"></i></div>
              </div>
              <div className="row">
                <div className="descricao">Reuniões de apresentação de resultados trimestrais</div>
                <div className="plano basico"><i class="fa-solid fa-xmark nao-inclui"></i></div>
                <div className="plano completo"><i class="fa-solid fa-check inclui"></i></div>
              </div>

              {/* Atendimento */}
              <div className="row header">
                <div>Atendimento:</div>
                <div></div>
                <div></div>
              </div>
              <div className="row">
                <div className="descricao">Atendimento exclusivo com contador dedicado</div>
                <div className="plano basico"><i class="fa-solid fa-check inclui"></i></div>
                <div className="plano completo"><i class="fa-solid fa-check inclui"></i></div>
              </div>
              <div className="row">
                <div className="descricao">Whatsapp (9h às 19h)</div>
                <div className="plano basico"><i class="fa-solid fa-check inclui"></i></div>
                <div className="plano completo"><i class="fa-solid fa-check inclui"></i></div>
              </div>
              <div className="row">
                <div className="descricao">Email (9h às 19h)</div>
                <div className="plano basico"><i class="fa-solid fa-xmark nao-inclui"></i></div>
                <div className="plano completo"><i class="fa-solid fa-check inclui"></i></div>
              </div>
              <div className="row">
                <div className="descricao">Telefone (9h às 18h)</div>
                <div className="plano basico"><i class="fa-solid fa-xmark nao-inclui"></i></div>
                <div className="plano completo"><i class="fa-solid fa-check inclui"></i></div>
              </div>
              <div className="row">
                <div className="descricao">Reuniões individuais</div>
                <div className="plano basico"><i class="fa-solid fa-xmark nao-inclui"></i></div>
                <div className="plano completo"><i class="fa-solid fa-check inclui"></i></div>
              </div>

              {/* Fiscal */}
              <div className="row header">
                <div>Fiscal:</div>
                <div></div>
                <div></div>
              </div>
              <div className="row">
                <div className="descricao">Planejamento tributário</div>
                <div className="plano basico"><i class="fa-solid fa-check inclui"></i></div>
                <div className="plano completo"><i class="fa-solid fa-check inclui"></i></div>
              </div>
              <div className="row">
                <div className="descricao">Auxílio na emissão de NFS</div>
                <div className="plano basico"><i class="fa-solid fa-check inclui"></i></div>
                <div className="plano completo"><i class="fa-solid fa-check inclui"></i></div>
              </div>
              <div className="row">
                <div className="descricao">Regime tributário</div>
                <div className="plano basico"><small>simples nacional</small></div>
                <div className="plano completo"><small>todos (honorário ajustado conforme demandas)</small></div>
              </div>
              <div className="row">
                <div className="descricao">Faturamento</div>
                <div className="plano basico"><small>até 100k/mês</small></div>
                <div className="plano completo"><small>ilimitado (honorário ajustado conforme faturamento)</small></div>
              </div>

              {/* Departamento Pessoal */}
              <div className="row header">
                <div>Departamento Pessoal:</div>
                <div></div>
                <div></div>
              </div>
              <div className="row">
                <div className="descricao">Folha de pagamento</div>
                <div className="plano basico"><small>cobrado à parte</small></div>
                <div className="plano completo"><small>até 4 funcionários grátis</small></div>
              </div>
              <div className="row">
                <div className="descricao">Pró‑labore para os sócios</div>
                <div className="plano basico"><i class="fa-solid fa-check inclui"></i></div>
                <div className="plano completo"><i class="fa-solid fa-check inclui"></i></div>
              </div>
              <div className="row total">
                <div className="descricao"></div>
                <div className="price">R$ 250,00/mês</div>
                <div className="price highlight">R$ 400,00/mês</div>
              </div>
            </div>
          </article>

          {/* Card do Serviço 2 (modelo) */}
          <article className="planos-card">
            <div className="card-header">
              <div>
                <h3 className="service-title">Empresas de Comércio</h3>
                <p className="service-subtitle">Comparativo de planos: Essencial e Completo</p>
              </div>
            </div>
            <div className="card-table">
              <div className="row header">
                <div>Descrição</div>
                <div className="center">Essencial</div>
                <div className="center">Completo</div>
              </div>
              {/* Contabilidade */}
              <div className="row header">
                <div>Contabilidade:</div>
                <div></div>
                <div></div>
              </div>
              <div className="row">
                <div className="descricao">Contabilidade Completa</div>
                <div className="plano basico"><i class="fa-solid fa-check inclui"></i></div>
                <div className="plano completo"><i class="fa-solid fa-check inclui"></i></div>
              </div>
              <div className="row">
                <div className="descricao">Relatórios Contábeis</div>
                <div className="plano basico"><i class="fa-solid fa-check inclui"></i></div>
                <div className="plano completo"><i class="fa-solid fa-check inclui"></i></div>
              </div>
              <div className="row">
                <div className="descricao">Importação e conciliação de extrato</div>
                <div className="plano basico"><i class="fa-solid fa-xmark nao-inclui"></i></div>
                <div className="plano completo"><i class="fa-solid fa-check inclui"></i></div>
              </div>
              <div className="row">
                <div className="descricao">Análise Financeira</div>
                <div className="plano basico"><i class="fa-solid fa-xmark nao-inclui"></i></div>
                <div className="plano completo"><i class="fa-solid fa-check inclui"></i></div>
              </div>
              <div className="row">
                <div className="descricao">Reuniões de apresentação de resultados trimestrais</div>
                <div className="plano basico"><i class="fa-solid fa-xmark nao-inclui"></i></div>
                <div className="plano completo"><i class="fa-solid fa-check inclui"></i></div>
              </div>

              {/* Atendimento */}
              <div className="row header">
                <div>Atendimento:</div>
                <div></div>
                <div></div>
              </div>
              <div className="row">
                <div className="descricao">Atendimento exclusivo com contador dedicado</div>
                <div className="plano basico"><i class="fa-solid fa-check inclui"></i></div>
                <div className="plano completo"><i class="fa-solid fa-check inclui"></i></div>
              </div>
              <div className="row">
                <div className="descricao">Whatsapp (9h às 19h)</div>
                <div className="plano basico"><i class="fa-solid fa-check inclui"></i></div>
                <div className="plano completo"><i class="fa-solid fa-check inclui"></i></div>
              </div>
              <div className="row">
                <div className="descricao">Email (9h às 19h)</div>
                <div className="plano basico"><i class="fa-solid fa-xmark nao-inclui"></i></div>
                <div className="plano completo"><i class="fa-solid fa-check inclui"></i></div>
              </div>
              <div className="row">
                <div className="descricao">Telefone (9h às 18h)</div>
                <div className="plano basico"><i class="fa-solid fa-xmark nao-inclui"></i></div>
                <div className="plano completo"><i class="fa-solid fa-check inclui"></i></div>
              </div>
              <div className="row">
                <div className="descricao">Reuniões individuais</div>
                <div className="plano basico"><i class="fa-solid fa-xmark nao-inclui"></i></div>
                <div className="plano completo"><i class="fa-solid fa-check inclui"></i></div>
              </div>

              {/* Fiscal */}
              <div className="row header">
                <div>Fiscal:</div>
                <div></div>
                <div></div>
              </div>
              <div className="row">
                <div className="descricao">Planejamento tributário</div>
                <div className="plano basico"><i class="fa-solid fa-check inclui"></i></div>
                <div className="plano completo"><i class="fa-solid fa-check inclui"></i></div>
              </div>
              <div className="row">
                <div className="descricao">Auxílio na emissão de NFS</div>
                <div className="plano basico"><i class="fa-solid fa-check inclui"></i></div>
                <div className="plano completo"><i class="fa-solid fa-check inclui"></i></div>
              </div>
              <div className="row">
                <div className="descricao">Regime tributário</div>
                <div className="plano basico"><small>simples nacional</small></div>
                <div className="plano completo"><small>todos (honorário ajustado conforme demandas)</small></div>
              </div>
              <div className="row">
                <div className="descricao">Faturamento</div>
                <div className="plano basico"><small>até 100k/mês</small></div>
                <div className="plano completo"><small>ilimitado (honorário ajustado conforme faturamento)</small></div>
              </div>

              {/* Departamento Pessoal */}
              <div className="row header">
                <div>Departamento Pessoal:</div>
                <div></div>
                <div></div>
              </div>
              <div className="row">
                <div className="descricao">Folha de pagamento</div>
                <div className="plano basico"><small>até 3 funcionários grátis</small></div>
                <div className="plano completo"><small>até 6 funcionários grátis</small></div>
              </div>
              <div className="row">
                <div className="descricao">Pró‑labore para os sócios</div>
                <div className="plano basico"><i class="fa-solid fa-check inclui"></i></div>
                <div className="plano completo"><i class="fa-solid fa-check inclui"></i></div>
              </div>
              <div className="row total">
                <div className="descricao"></div>
                <div className="price">R$ 350,00/mês</div>
                <div className="price highlight">R$ 500,00/mês</div>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
