import React from 'react';
import { ChromePicker } from 'react-color';

class ColorSwatch extends React.Component {
	constructor(props) {
		super(props);		
		
		this.state = {
			editing: false
		};
	}
	setEditable = () => {
		this.setState({"editing":!this.state.editing});
	}

	updateColor = (color) => {
		this.props.updateColor(color.hex);
	}

	handleClose = () => {
    	this.setState({ displayColorPicker: false })
  	}

	render() {
		const popover = {
			position: 'absolute',
			zIndex: '2',
		}
		const cover = {
			position: 'fixed',
			top: '0px',
			right: '0px',
			bottom: '0px',
			left: '0px',
		}
	  return (
		  <div className="color-swatch" style={ { backgroundColor : this.props.color } } onClick={ this.setEditable }>
	        <label htmlFor="primaryColor" className="screen-reader-text">
	          { this.props.label }
	        </label>
	        {
	        	this.state.editing &&
	        	<div style={ popover }>
          			<div style={ cover } onClick={ this.handleClose }/>
          			{ 
          				this.props.usePicker &&
          				<ChromePicker color={ this.props.color } onChange={ this.updateColor } />
          			}
          		</div>
	        }
	        <input name="primaryColor" id="primaryColor" disabled readOnly value={ this.props.color } className="color-swatch-input" />
	      </div>
	  )
	}
}


ColorSwatch.defaultProps = {
  usePicker: true
};

export default ColorSwatch;
	