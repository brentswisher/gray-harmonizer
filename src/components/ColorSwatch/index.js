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
		this.setState( { editing: true } );
	}

	updateColor = ( color ) => {
		this.props.updateColor( color.hex );
	}

	handleClose = ( e ) => {
		this.setState( { editing: false } );
		e.stopPropagation(); //Prevent the setEditable from firing as it is the parent' onCLick
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
		const colorLabel = `color${ parseInt( Math.random() * 10000 ) }`;

		return (
			<div className="color-swatch" style={ { backgroundColor : this.props.color } } onClick={ this.setEditable } tabIndex="0">
				<label htmlFor={ colorLabel } className="screen-reader-text">
					{ this.props.label }
				</label>
				{
					this.state.editing &&
					<div style={ popover }>
						<div style={ cover } onClick={ this.handleClose } />
						{ 
							this.props.usePicker &&
							<ChromePicker disableAlpha={ true } color={ this.props.color } onChange={ this.updateColor } />
						}
					</div>
				}
				<input name={ colorLabel } id={ colorLabel } disabled readOnly value={ this.props.color } className="color-swatch-input" />
			</div>
		)
	}
}


ColorSwatch.defaultProps = {
	usePicker: true
};

export default ColorSwatch;
	