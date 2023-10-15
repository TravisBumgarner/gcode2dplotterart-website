import { type TPlotterArt } from '.'

const code = `from gcode2dplotterart import Layer, Plotter

LAYERS = ['red', 'green', 'blue']

BASE_LAYER = 'base_layer'
plotter = Plotter() # Args removed for brevity

for layer in LAYERS:
  plotter.add_layer(layer)

plotter.layers[LAYERS[0]].add_square(0, 0, 100, 100)
plotter.layers[LAYERS[1]].add_circle(50, 50, 50)
plotter.layers[LAYERS[2]].add_path([(10,10), (20,20), (30,30)])
plotter.save()
`

const plotterArt: TPlotterArt = {
  title: 'Basic Shapes',
  description: 'Basic layers plotted with different colors',
  code,
  id: 'square'
}

export default plotterArt
