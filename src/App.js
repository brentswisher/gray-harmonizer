import React, { Component } from 'react';
import './App.css';
import ColorSwatch from './components/ColorSwatch';

class App extends Component {
  constructor() {
    super()
    this.state = {
      primaryColor: '#F00000',
      grays: ['#dddddd','#666666'],
      opacity: 0.6,
      computedGrays: ['#F00000','#F00000'],
      additionalColors: ['#FFF000']
    };
  }
  render() {
    return (
      <div className="app">
        <h1>Simple Color Harmonizer</h1>
        <p>
          One simple way to make your a design flow together better is to harmonize the grays in your color pallet.
          Instead of straight gray values, this created grays tinted with the colors of your design. It's a subtle difference,
          but it makes 
        </p>
        <section>
          <h2>Step 1: Pick a Color</h2>
          <p>
            Select the color you would like to harmonize your grays with.
          </p>

          <ColorSwatch label="Primary Color" color={ this.state.primaryColor } />
        </section>
        
        <section>
          <h2>Step 2: Pick Your Gray(s)</h2>
          <p>
            Add the shades of gray you want to use.
          </p>
          {
            this.state.grays.map((item,index) => (
              <ColorSwatch label={`Gray $(index)`} color={ item } />
            ))

          }
          <button>
            Add another gray
          </button>
        </section>
        
        <section>
          <h2>Step 3: Select Opacity</h2>
          <p>
            Select your main color opacity.
          </p>
          <input type="range" min="0" max="1" step=".01" style={{width:'100%'}}/>
        </section>
        
        <section>
          <h2>Step 4: Previews Your Harmonized Grays</h2>
           <div className="color-swatch" style={{backgroundColor:'darkgray'}} >
            <label for="primaryColor" class="screen-reader-text">
              Primary Color
            </label>
            <input name="primaryColor" id="primaryColor" disabled value="#F00000" className="color-swatch-input" />
          </div>
           <div className="color-swatch" style={{backgroundColor:'darkgray'}} >
            <label for="primaryColor" class="screen-reader-text">
              Primary Color
            </label>
            <input name="primaryColor" id="primaryColor" disabled value="#F00000" className="color-swatch-input" />
          </div>
        </section>
        
        <section>
          <h2>(Optional) Add Ather Colors</h2>
          <p>
            If you would like to add additional colors to create a full pallet, select them here.
          </p>
           <div className="color-swatch" style={{backgroundColor:'red'}} >
            <label for="primaryColor" class="screen-reader-text">
              Primary Color
            </label>
            <input name="primaryColor" id="primaryColor" disabled value="#F00000" className="color-swatch-input" />
          </div>
           <button>
            Add another color
          </button>
        </section>
        
        <section>
          <h2>Your Color Pallet</h2>
          <div className="color-swatch" style={{backgroundColor:'papayawhip'}} >
            <label for="primaryColor" class="screen-reader-text">
              Primary Color
            </label>
            <input name="primaryColor" id="primaryColor" disabled value="#F00000" className="color-swatch-input" />
          </div>
          <div className="color-swatch" style={{backgroundColor:'red'}} >
            <label for="primaryColor" class="screen-reader-text">
              Primary Color
            </label>
            <input name="primaryColor" id="primaryColor" disabled value="#F00000" className="color-swatch-input" />
          </div>
          <div className="color-swatch" style={{backgroundColor:'darkgray'}} >
            <label for="primaryColor" class="screen-reader-text">
              Primary Color
            </label>
            <input name="primaryColor" id="primaryColor" disabled value="#F00000" className="color-swatch-input" />
          </div>
          <div className="color-swatch" style={{backgroundColor:'lightgray'}} >
            <label for="primaryColor" class="screen-reader-text">
              Primary Color
            </label>
            <input name="primaryColor" id="primaryColor" disabled value="#F00000" className="color-swatch-input" />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
