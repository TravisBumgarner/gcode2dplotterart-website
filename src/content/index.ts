import sinewaves from './1_sinewaves'

export interface TPlotterArt {
  title: string
  description: string
  code: string
  id: string
}

const plotterArt: TPlotterArt[] = [
  sinewaves
]

export default plotterArt
