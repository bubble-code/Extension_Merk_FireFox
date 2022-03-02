
const canvas = document.createElement('canvas')
canvas.setAttribute('id', 'canvas1')
document.body.appendChild(canvas)
const ccanvas = document.querySelector('#canvas1')
const canX = canvas.getContext('2d')
canX.fillStyle = '#000'
const h = window.screen.height
const w = window.screen.width
canX.fillRect(0, 0, w, h)
const cols = Math.floor(w / 20) + 1
const ycols = Array(cols).fill(0)

function matrix() {
  canX.fillStyle = '#0001'
  canX.fillRect(0, 0, w, h)
  canX.fillStyle = '#0f0'
  canX.font = '20pt monospace'
  ycols.forEach((y, ind) => {
    const text = String.fromCharCode(Math.random() * 122)
    const x = ind * 20
    canX.fillText(text, x, y)
    if (y > 100 + Math.random() * 10000)
      ycols[ind] = 0
    else
      ycols[ind] = y + 20
  })
}
export default matrix;

