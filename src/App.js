import React, { Component } from 'react';
import './App.css';
import ColorSwatch from './components/ColorSwatch';
import { RGBToHex, mixColors } from './components/utilities';

class App extends Component {
  constructor() {
    super()
    this.state = {
      primaryColor: '#0a8441',
      grays: ['#FEFEFE','#666666','#232323'],
      opacity: 0.1
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

  setOpacity = (e) => {
    this.setState({opacity:e.target.value})
  }

  addGray = () => {
    this.setState({grays:[...this.state.grays, `#${mixColors('#000000', this.state.grays[ this.state.grays.length-1 ], .3 )}` ] } );
  }

  render() {
    const computedGrays = this.state.grays.map((item,index) => (
      '#'+mixColors( this.state.primaryColor, item, this.state.opacity )
    ));
    return (
      <div className="app" role="main" aria-labelledby="mainlbl" style={ {backgroundColor:computedGrays[0]}}>
        <section className="first-section" style={ {backgroundColor:computedGrays[0]}} aria-labelledby="mainlbl">
          <h1 id="mainlbl">
            Simple Gray Harmonizer
          </h1>
          <p>
            Use this tool to take the gray values for you design and harmonize them with your primary or secondary color. It's a little trick that gives designs a really nice unity.
          </p>
          <p>
            <a href="https://github.com/brentswisher/gray-harmonizer" className="button" style={{backgroundColor:this.state.primaryColor} } >View on Github</a>
          </p>
        </section>
        <section style={ {backgroundColor:computedGrays[0]}} aria-labelledby="section1lbl">
          <h2 id="section1lbl">Step 1: Pick a Color</h2>
          <p>
            Select the color you would like to harmonize your grays with.
          </p>

          <ColorSwatch label="Primary Color" color={ this.state.primaryColor } updateColor={ this.setPrimaryColor }/>
        </section>
        
       <section className="grays" style={{backgroundColor:computedGrays[0]}} aria-labelledby="section2lbl">
          <h2 id="section2lbl">Step 2: Pick Your Gray(s)</h2>
          <p>
            Add the shades of gray you want to use.
          </p>
          <div className="swatch-holder">
            {
              this.state.grays.map((item,index) => (
                <ColorSwatch label={`Gray ${index+1}`} color={ item } key={ index } updateColor= { ( color ) => this.setGrayColor( color, index ) } />
              ))

            }
          </div>
          <p>
            <button className="button" style={{backgroundColor:this.state.primaryColor} } onClick={ this.addGray }>
              Add Another Gray
            </button>
          </p>
        </section>
        
        <section style={{backgroundColor:computedGrays[0]}} aria-labelledby="section3lbl">
          <h2 id="section3lbl">Step 3: Select Opacity</h2>
          <p>
            <label for="opacity">
              Select your main color opacity.
            </label>
          </p>
          { parseInt(this.state.opacity * 100) }%
          <input type="range" name="opacity" id="opacity" min="0" max="1" step=".01" value={ this.state.opacity } onChange={ this.setOpacity } style={{width:'100%'}}/>
        </section>
        
        <section class="pallet" aria-labelledby="section4lbl">
        <h2>Color Pallets</h2>
          <hr />
           <div className="swatch-holder">
           <h3 id="section4lbl" className="pallet-title" style={{textAlign:'center',color:this.state.grays[0],backgroundColor:this.state.grays[computedGrays.length-1]}}>
              Original
            </h3>
            <ColorSwatch label="Primary Color" color={ this.state.primaryColor } usePicker={ false } />
            {
              this.state.grays.map( ( item, index ) => (
                <ColorSwatch label={`Original Gray ${index+1}`} color={ item } key={ index } usePicker={ false } />
              ))
            }
            
          </div>
          <hr />
          <div className="swatch-holder">
          <h3 className="pallet-title pallet-harmonized" style={{textAlign:'center',color:computedGrays[0],backgroundColor:computedGrays[computedGrays.length-1]}}>
            Harmonized
          </h3>
            <ColorSwatch label="Primary Color" color={ this.state.primaryColor } usePicker={ false } />
            {
              computedGrays.map( ( item, index ) => (
                <ColorSwatch label={`Computed Gray ${index+1}`} color={ item } key={ index } usePicker={ false } />
              ))
            }
            
          </div>
          <hr />
          
        </section>
      </div>
    );
  }
}

export default App;
