import { apiPost } from "@/data/api"
import InViewAnimation from "../../inViewAnimation"
import { RetornarImoveisDisponiveis } from "@/data/types/retornarImoveisDisponiveis"
import { Imovel } from "@/data/types/imovel"

async function getImoveisDestaque(): Promise<RetornarImoveisDisponiveis> {
  const response = await apiPost('/Imovel/RetornarImoveisDisponiveis', {
    "finalidade": 2,
    "numeroPagina": 1,
    "numeroRegistros": 3,
    "destaque": 2,
  })
  const imoveis = await response.json()
  return imoveis
}

export default async function ImoveisDestaque() {
  const imoveis = await getImoveisDestaque()
  console.log(imoveis)
  // const urlFotoPrincipal = imoveis.urlfotoprincipal

  // const codigo = imoveis.codigo
  // const bairro = imoveis.bairro
  // const cidade = imoveis.cidade

  // const valor = imoveis.valor
  // const titulo = imoveis.titulo
  // const areaprincipal = imoveis.areaprincipal
  // const tipomedida = imoveis.tipomedida
  // const numeroquartos = imoveis.numeroquartos
  // const numerovagas = imoveis.numerovagas

  return (
    <InViewAnimation className="flex flex-col text-end gap-7 items-start" delay='0.55s' duration='0.89s' >
      <span className="pl-[13vw] text-2xl lg:text-4xl text-right font-semibold text-auretto-dark-blue selection:bg-auretto-red selection:text-auretto-dark-blue">Imóveis em destaque</span>
      <div className="w-full flex flex-wrap gap-10 justify-center">
        {imoveis.lista.map((imovel: Imovel) => <div key={imovel.codigo} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" src={imovel.urlfotoprincipalm} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-lg lg:text-xl mb-2">{`${imovel.bairro} | ${imovel.cidade} - Cód. ${imovel.codigo}`}</div>
            <p className="text-gray-700 text-base">
              {imovel.titulo}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`${imovel.areaprincipal} ${imovel.tipomedida}`}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`${imovel.numeroquartos} quartos`}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`${imovel.numerovagas} vagas`}</span>
          </div>
        </div>)}
      </div>
    </InViewAnimation>
  )
}