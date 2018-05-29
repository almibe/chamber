import { h } from 'hyperapp'
import abcjs from 'abcjs/midi'

export const ABCEditor = ({ document, setText }) => (
  <div class="container" oncreate={element => init()}>
    <div class="columns">
      <div class="column">
        <textarea id="abcEditor" class="textarea code" rows="20" value={document} oninput={e => setText(e.target.value)}></textarea>
        <div id="warnings"></div>
        <div id="midi"></div>
      </div>
      <div class="column">
        <div id="canvas"></div>
      </div>
    </div>
  </div>
)

function init() {
  new abcjs.Editor('abcEditor', {
    canvas_id: 'canvas',
    generate_midi: true,
    midi_id: "midi",
    generate_warnings: true,
    warnings_id: 'warnings'
  })
}
