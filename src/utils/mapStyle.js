export const fillLayer = {
  id: 'data',
  type: 'fill',
  paint: {
    'fill-color': {
      property: 'name_len',
      stops: [
        [0, '#3288bd'],
        [1, '#000000'],
        [2, '#abdda4'],
        [3, '#e6f598'],
        [4, '#ffefbf'],
        [5, '#fee08b'],
        [6, '#fdae61'],
        [7, '#f46d43'],
        [8, '#d53e4f'],
        [9, '#000000'],
        [10, '#66c2a5'],
        [11, '#ab3da4'],
        [12, '#afa798'],
        [13, '#ffffbf'],
        [14, '#faa08b'],
        [15, '#adae88'],
        [16, '#aabff3'],
        [17, '#dffe4f'],
        [18, '#3288bd'],
        [19, '#66c2a5'],
        [20, '#000000'],

      ],
    },
    'fill-opacity': 0.3,
    'fill-outline-color': 'rgba(0, 0, 0, 1)'
  }
}


export const borderLayer = {
  id: 'data',
  type: 'line',
  paint: {
    'line-color': 'rgba(0, 0, 0, 0.5)',
    'line-width': 1
  }
}