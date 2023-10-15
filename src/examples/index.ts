import sinewaves from './2_sinewaves'
import square from './1_square'

export interface TPlotterArt {
  title: string
  description: string
  code: string
  id: string
}

const examples: Record<string, TPlotterArt> = {
  [square.id]: square,
  [sinewaves.id]: sinewaves
}

export default examples
