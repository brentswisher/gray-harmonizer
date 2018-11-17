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
      opacity: 0.05,
      additionalColors: []
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
    let lastState = [...this.state.additionalColors];
    lastState[index] = hexColor;

    this.setState({additionalColors:lastState});
  }

  setOpacity = (e) => {
    this.setState({opacity:e.target.value})
  }

  addGray = () => {
    this.setState({grays:[...this.state.grays, `#${mixColors('#000000', this.state.grays[ this.state.grays.length-1 ], .3 )}` ] } );
  }

  addAdditional = () => {
    this.setState({additionalColors:[...this.state.additionalColors,`#${RGBToHex([Math.floor(Math.random() * Math.floor(255)),Math.floor(Math.random() * Math.floor(255)),Math.floor(Math.random() * Math.floor(255))])}`]});
  }


  render() {
    const computedGrays = this.state.grays.map((item,index) => (
      '#'+mixColors( this.state.primaryColor, item, this.state.opacity )
    ));
    return (
      <div className="app" role="main" aria-labelledby="mainlbl">
        <a href="https://github.com/brentswisher/gray-harmonizer" className="button button-github" style={{float:'right',backgroundColor:this.state.primaryColor} } >View on Github</a>
        <h1 id="mainlbl">
          Easy Gray Harmonizer
        </h1>
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
          <button className="button" style={{backgroundColor:this.state.primaryColor} } onClick={ this.addGray }>
            Add another gray
          </button>
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
          <h2 id="section4lbl" className="pallet-title" style={{textAlign:'center',color:this.state.grays[0],backgroundColor:this.state.grays[computedGrays.length-1]}}>
            Original Pallet
          </h2>
          <hr />
           <div className="swatch-holder">
            <ColorSwatch label="Primary Color" color={ this.state.primaryColor } usePicker={ false } />
            {  
              this.state.additionalColors.map( (item,index) => (
                <ColorSwatch label={`Additional Color ${index+1}`} color={ item } key={ index } usePicker={ false }/>
              ))
            }
          
            {
              this.state.grays.map( ( item, index ) => (
                <ColorSwatch label={`Original Gray ${index+1}`} color={ item } key={ index } usePicker={ false } />
              ))
            }
            
          </div>
          <hr />
          <div className="swatch-holder">
            <ColorSwatch label="Primary Color" color={ this.state.primaryColor } usePicker={ false } />
            {  
              this.state.additionalColors.map( (item,index) => (
                <ColorSwatch label={`Additional Color ${index+1}`} color={ item } key={ index } usePicker={ false }/>
              ))
            }
          
            {
              computedGrays.map( ( item, index ) => (
                <ColorSwatch label={`Computed Gray ${index+1}`} color={ item } key={ index } usePicker={ false } />
              ))
            }
            
          </div>
          <hr />
          <h2 className="pallet-title" style={{textAlign:'center',color:computedGrays[0],backgroundColor:computedGrays[computedGrays.length-1]}}>
            Harmonized Pallet
          </h2>
        </section>
          
        
        <section style={{backgroundColor:computedGrays[0]}} aria-labelledby="section5lbl">
          <h2 id="section5lbl">(Optional) Add Other Colors</h2>
          <p>
            If you would like to add additional colors to create a full pallet, select them here.
          </p>
          <div className="swatch-holder">
            {
              this.state.additionalColors.map((item,index) => (
                <ColorSwatch label={`Additional Color ${index+1}`} color={ item } key={ index } updateColor= { ( color ) => this.setAdditionalColor( color, index ) }/>
              ))
            }
          </div>
           <button className="button" style={{backgroundColor:this.state.primaryColor} } onClick={ this.addAdditional }>
            Add another color
          </button>
        </section>
      </div>
    );
  }
}

export default App;
