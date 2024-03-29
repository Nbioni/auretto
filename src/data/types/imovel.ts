export interface Imovel {
  codigo: number
  codigomae: number
  empreendimento: boolean
  empreendimentofilho: boolean
  nomeempreendimento: string
  siteempreendimento: string
  codigocondominio: number
  nomecondominio: string
  titulo: string
  metadescription: string
  codigoauxiliar: string
  unidade: number
  nomeunidade: string
  telefoneunidade: string
  emaileunidade: string
  finalidade: string
  codigodestinacao: number
  destinacao: string
  codigotipo: number
  tipo: string
  codigotipo2: any
  tipo2: string
  situacao: string
  valor: string
  valoranterior: string
  valorm2: string
  valorminimo: string
  valormaximo: string
  taxaadm: string
  taxacomissao: string
  rentabilidade: string
  valorcondominio: string
  valormaiscondominio: string
  valormaiscondominiomaisiptu: string
  indiceiptu: string
  valoriptu: string
  valoriptuanual: string
  valorspu: string
  valorseguroincendio: string
  valorparcelaseguroincendio: string
  valoritbi: string
  percentualitbi: string
  valorregistro: string
  percentualregistro: string
  codigobairro: number
  bairro: string
  codigobairro2: any
  bairro2: string
  codigocidade: number
  cidade: string
  estado: string
  codigoregiao: number
  regiao: string
  codigosubregiao: number
  subregiao: string
  cep: string
  endereco: string
  numero: string
  complemento: string
  bloco: string
  pontoreferencia: string
  melhoracesso: string
  edificio: string
  construtora: string
  localchave: string
  identificador: string
  identificadorchave: string
  aceitafinanciamento: boolean
  aceitapermuta: boolean
  anoconstrucao: number
  numerochave: number
  numeroquartos: string
  numerosalas: string
  numerobanhos: string
  numerovagas: string
  tipovagas: string
  numerosuites: string
  numerovarandas: string
  numeroelevador: string
  numeroandar: number
  unidadesporandar: number
  numeroandares: number
  totalunidades: number
  destaque: string
  tipomedida: string
  areaprincipal: string
  areainterna: string
  areaexterna: string
  arealote: string
  metragemfrente: string
  metragemfundo: string
  metragemladodireito: string
  metragemladoesquerdo: string
  latitude: string
  longitude: string
  descricao: string
  anotacoes: string
  confrontacaofrente: string
  confrontacaofundo: string
  confrontacaoladodireito: string
  confrontacaoladoesquerdo: string
  cartorio: string
  matriculacartorio: string
  livrocartorio: string
  folhacartorio: string
  exclusivo: boolean
  imovelocupado: boolean
  imovelalugado: boolean
  naplanta: boolean
  placa: boolean
  placafaixa: string
  posicao: string
  arcondicionado: boolean
  areaservico: boolean
  areaprivativa: boolean
  armariobanheiro: boolean
  armariocozinha: boolean
  armarioquarto: boolean
  box: boolean
  closet: boolean
  dce: boolean
  despensa: boolean
  escritorio: boolean
  lavabo: boolean
  mobiliado: boolean
  rouparia: boolean
  aguaindividual: boolean
  alarme: boolean
  aquecedorgas: boolean
  aquecedoreletrico: boolean
  aquecedorsolar: boolean
  boxdespejo: boolean
  cercaeletrica: boolean
  circuitotv: boolean
  gascanalizado: boolean
  interfone: boolean
  jardim: boolean
  lavanderia: boolean
  portaoeletronico: boolean
  portaria24horas: boolean
  seguranca24horas: boolean
  quintal: boolean
  gramado: boolean
  academia: boolean
  churrasqueira: boolean
  hidromassagem: boolean
  homecinema: boolean
  piscina: boolean
  playground: boolean
  quadraesportiva: boolean
  quadratenis: boolean
  salamassagem: boolean
  salaofestas: boolean
  salaojogos: boolean
  sauna: boolean
  wifi: boolean
  espacogourmet: boolean
  garageband: boolean
  quadrasquash: boolean
  beachtenis: boolean
  solmanha: boolean
  vistamar: boolean
  varandagourmet: boolean
  lareira: boolean
  cabeamentoestruturado: boolean
  tvacabo: boolean
  conexaointernet: boolean
  vistamontanha: boolean
  vistalago: boolean
  permiteanimais: boolean
  datahoracadastro: string
  datahoraultimaalteracao: string
  datahoraultimavalidacao: string
  datahoraultimasituacao: string
  datahoravagodesde: string
  urlfotoprincipal: string
  descricaoFotoPrincipal: string
  urlfotoprincipalm: string
  urlfotoprincipalp: string
  urlfotoprincipalpp: string
  urlvideo: string
  urlpublica: string
  descricaoempreendimento: string
  areapatio: string
  areaarmazenagem: string
  pedireito: string
  cargapisointerno: string
  cargapisoexterno: string
  forcainstalada: string
  alturaportao: string
  numerodoca: number
  temproposta: boolean
  temreserva: boolean
  datareserva: string
  proprietarios: any[]
  captadores: any[]
  fotos: Foto[]
  fotos360: any[]
  extras: any[]
  extras2: any[]
}

export interface Foto {
  descricao: string
  empreendimento: boolean
  datahoraalteracao: string
  url: string
  urlm: string
  urlp: string
  urlpp: string
}
