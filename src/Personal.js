import React, { Component } from 'react';

class Personal extends Component{
	
	render(){
		return(
			<div>
				<tr>
					<td>{this.props.data.name}</td>
				</tr>
				<tr>
					<td>{this.props.data.age}</td>
				</tr>
				<tr>
					<td>{this.props.data.sex}</td>
				</tr>
			</div>
		);
	}
}

export default Personal;