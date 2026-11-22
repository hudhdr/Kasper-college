import React from 'react'
import './accessibility.css'
import './accessibility.js'

const Accessibility = () => {
  return (
    <div>
      <div
        id="accessPanel"
        className="accessibility-panel"
        accessKey="q"
      >
        <button id="toggleAccessPanel" type="button">
          <span className="ada-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19.604 2.562l-3.346 3.137c-1.27-.428-2.686-.699-4.243-.699-7.569 0-12.015 6.551-12.015 6.551s1.928 2.951 5.146 5.138l-2.911 2.909 1.414 1.414 17.37-17.035-1.415-1.415zm-6.016 5.779c-3.288-1.453-6.681 1.908-5.265 5.206l-1.726 1.707c-1.814-1.16-3.225-2.65-4.06-3.66 1.493-1.648 4.817-4.594 9.478-4.594.927 0 1.796.119 2.61.315l-1.037 1.026zm-2.883 7.431l5.09-4.993c1.017 3.111-2.003 6.067-5.09 4.993zm13.295-4.221s-4.252 7.449-11.985 7.449c-1.379 0-2.662-.291-3.851-.737l1.614-1.583c.715.193 1.458.32 2.237.32 4.791 0 8.104-3.527 9.504-5.364-.729-.822-1.956-1.99-3.587-2.952l1.489-1.46c2.982 1.9 4.579 4.327 4.579 4.327z" />
            </svg>
          </span>

          <span className="toggleAccessPanelLabelInstruct">
            <span className="toggleAccessPanelLabel">Visual Accessibility Options</span>
            <span className="toggleAccessPanelInstructions">(Press Q Key)</span>
          </span>
        </button>

        <h6>Visual Accessibility Options</h6>

        <div className="button-group">
          <span>More Readable Font</span>
          <button id="fontSwap" accessKey="a" type="button">Font Swap (A)</button>
        </div>

        <div className="font-resize button-group">
          <span>Font Resize</span>
          <button id="fontDecrease" accessKey="s" type="button">Decrease (S)</button>
          <button id="fontIncrease" accessKey="d" type="button">Increase (D)</button>
        </div>

        <div className="button-group">
          <span>Highlight Links</span>
          <button id="highlightLinks" accessKey="h" type="button">Highlight Links (H)</button>
        </div>

        <div className="button-group">
          <span>Reset or Remove Styles</span>
          <button id="reset" accessKey="f" type="button">Reset (F)</button>
          <button id="remove" accessKey="g" type="button">Remove (G)</button>
        </div>

        <div className="contrastTextChange button-group">
          <span>Text Contrast Change</span>
          <button id="contrastTextLighten" accessKey="z" type="button">Lighten (Z)</button>
          <button id="contrastTextDarken" accessKey="x" type="button">Darken (X)</button>
        </div>

        <div className="rangeSliders">
          <label>Red: <input className="rangeText" type="range" min="0" max="255" defaultValue="0" /></label>
          <label>Green: <input className="rangeText" type="range" min="0" max="255" defaultValue="0" /></label>
          <label>Blue: <input className="rangeText" type="range" min="0" max="255" defaultValue="0" /></label>
        </div>

        <div className="contrastBgChange button-group">
          <span>Background Contrast Change</span>
          <button id="contrastBgLighten" accessKey="c" type="button">Lighten (C)</button>
          <button id="contrastBgDarken" accessKey="v" type="button">Darken (V)</button>
        </div>

        <div className="rangeSliders">
          <label>Red: <input className="rangeBg" type="range" min="0" max="255" defaultValue="255" /></label>
          <label>Green: <input className="rangeBg" type="range" min="0" max="255" defaultValue="255" /></label>
          <label>Blue: <input className="rangeBg" type="range" min="0" max="255" defaultValue="255" /></label>
        </div>

        <button id="closeAccessPanel" type="button">Close Options (Esc)</button>
      </div>
    </div>
  )
}

export default Accessibility

