// @flow
import React, { Component } from "react";

export type TrayItemWidgetProps = {
	model: any;
	color?: string;
	name: string;
}

export type TrayItemWidgetState = {};

export class TrayItemWidget extends Component<TrayItemWidgetProps, TrayItemWidgetState> {
	constructor(props: TrayItemWidgetProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div
				style={{ borderColor: this.props.color }}
				draggable={true}
				onDragStart={event => {
					event.dataTransfer.setData("storm-diagram-node", JSON.stringify(this.props.model));
				}}
				className="tray-item"
			>
				{this.props.name}
			</div>
		);
	}
}
