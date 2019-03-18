// @flow
import React, { Component } from "react";

export type TrayWidgetProps = {
	children?: any,
};

export type TrayWidgetState = {};

/**
 * @author Dylan Vorster
 */
export class TrayWidget extends Component<TrayWidgetProps, TrayWidgetState> {
	static defaultProps: TrayWidgetProps = {};

	constructor(props: TrayWidgetProps) {
		super(props);
		this.state = {};
	}

	render() {
		return <div className="tray">{this.props.children}</div>;
	}
}
