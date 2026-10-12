// Fundação da associação: 06/04/2006 (mês em base 0)
const FUNDACAO = { ano: 2006, mes: 3, dia: 6 };

export function anosDeFundacao(hoje: Date = new Date()): number {
  const aindaNaoFezAniversario =
    hoje.getMonth() < FUNDACAO.mes ||
    (hoje.getMonth() === FUNDACAO.mes && hoje.getDate() < FUNDACAO.dia);

  return hoje.getFullYear() - FUNDACAO.ano - (aindaNaoFezAniversario ? 1 : 0);
}
