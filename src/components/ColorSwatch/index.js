import React from 'react';

class ColorSwatch extends React.Component {
	constructor(props) {
		super(props);		
		
		this.state = {
			// editing: ! this.props.attributes.src,
		};
	}

	render() {

	  return (
		  <div className="color-swatch" style={ { backgroundColor : this.props.color } }>
	        <label for="primaryColor" class="screen-reader-text">
	          { this.props.label }
	        </label>
	        <input name="primaryColor" id="primaryColor" diabled value={ this.props.color } className="color-swatch-input" />
	      </div>
	  )
	}
}

export default ColorSwatch;
	