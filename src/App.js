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

  setPrimaryColor = (hexColor) => {
    this.setState({primaryColor:hexColor});
  }

  setGrayColor = (hexColor,index) => {
    let lastState = this.state.grays;
    lastState[index] = hexColor;

    this.setState({grays:lastState});
  }

  setAdditionalColor = (hexColor,index) => {
    let lastState = this.state.additionalColors;
    lastState[index] = hexColor;

    this.setState({additionalColors:lastState});
  }

  render() {
    return (
      <div className="app">
        <h1>Simple Color Harmonizer</h1>
        <p>
          One simple way to make your a design flow together better is to harmonize the grays in your color pallet.
          Instead of straight gray values, this created grays tinted with the colors of your design. It's a subtle difference,
          but it adds a nice flow to a design.
        </p>
        <section>
          <h2>Step 1: Pick a Color</h2>
          <p>
            Select the color you would like to harmonize your grays with.
          </p>

          <ColorSwatch label="Primary Color" color={ this.state.primaryColor } updateColor={ this.setPrimaryColor }/>
        </section>
        
        <section>
          <h2>Step 2: Pick Your Gray(s)</h2>
          <p>
            Add the shades of gray you want to use.
          </p>
          {
            this.state.grays.map((item,index) => (
              <ColorSwatch label={`Gray $(index)`} color={ item } key={ index } updateColor= { ( color ) => this.setGrayColor( color, index ) } />
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
           {
            this.state.computedGrays.map((item,index) => (
              <ColorSwatch label={`Computed Gray $(index)`} color={ item } key={ index } usePicker={ false } />
            ))
          }
        </section>
        
        <section>
          <h2>(Optional) Add Ather Colors</h2>
          <p>
            If you would like to add additional colors to create a full pallet, select them here.
          </p>
           {
            this.state.additionalColors.map((item,index) => (
              <ColorSwatch label={`Additional Color $(index)`} color={ item } key={ index } updateColor= { ( color ) => this.setAdditionalColor( color, index ) }/>
            ))
          }
           <button>
            Add another color
          </button>
        </section>
        
        <section>
          <h2>Your Color Pallet</h2>
            <ColorSwatch label="Primary Color" color={ this.state.primaryColor } usePicker={ false } />
          
          {
            this.state.computedGrays.map( ( item, index ) => (
              <ColorSwatch label={`Computed Gray $(index)`} color={ item } key={ index } usePicker={ false } />
            ))
          }
          {  
            this.state.additionalColors.map( (item,index) => (
              <ColorSwatch label={`Additional Color $(index)`} color={ item } key={ index } usePicker={ false }/>
            ))
          }
        </section>
      </div>
    );
  }
}

export default App;
