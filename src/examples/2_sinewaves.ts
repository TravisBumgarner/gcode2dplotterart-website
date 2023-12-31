import { type TPlotterArt } from '.'

const code = `import math

from gcode2dplotterart import Layer, Plotter

BASE_LAYER = 'base_layer'
plotter = Plotter() # Args removed for brevity
plotter.add_layer(BASE_LAYER)

def sine_waves(y_offset, amplitude):
  wavelength = 50.0

  steps_per_integer = 10

  adjusted_min = plotter.x_min * steps_per_integer
  adjusted_max = plotter.x_max * steps_per_integer
  for index, step in enumerate(range(adjusted_min, adjusted_max)):

    x = step / steps_per_integer
    y = amplitude * math.sin(2 * math.pi * x / wavelength)
    y += y_offset

    plotter.layers[BASE_LAYER].add_point(x, y)
    if index == 0:
      plotter.layers[BASE_LAYER].lower_print_head()
  plotter.layers[BASE_LAYER].raise_print_head()

  

if __name__ == "__main__":
  padding_near_borders = 5

  adjusted_min = plotter.y_min + padding_near_borders
  adjusted_max = plotter.y_max - padding_near_borders
  for y_offset in range(adjusted_min, adjusted_max, 10):
    amplitude=y_offset / 10.0
    sine_waves(y_offset, amplitude)

  plotter.save()
`

const plotterArt: TPlotterArt = {
  title: 'Sine Waves',
  description: 'Series of sine waves plotted with increasing amplitude',
  code,
  id: 'sine_waves'
}

export default plotterArt
