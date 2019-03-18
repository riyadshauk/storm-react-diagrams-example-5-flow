// @flow
import React, { Component } from "react";
import * as _ from "lodash";
import { TrayWidget } from "./TrayWidget";
import { Application } from "../App";
import { TrayItemWidget } from "./TrayItemWidget";
import { DefaultNodeModel, DiagramWidget } from "storm-react-diagrams";
import { AdvancedNodeModel } from '../AdvancedDiagramFactories';

export type BodyWidgetProps = {
	app: Application;
}

export type BodyWidgetState = {};

/**
 * @author Dylan Vorster
 */
export class BodyWidget extends Component<BodyWidgetProps, BodyWidgetState> {
	constructor(props: BodyWidgetProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="body">
				<div className="header">
					<div className="title">Storm React Diagrams - Demo 5</div>
				</div>
				<div className="content">
					<TrayWidget>
						<TrayItemWidget model={{ type: "in" }} name="In Node" color="rgb(192,255,0)" />
						<TrayItemWidget model={{ type: "out" }} name="Out Node" color="rgb(0,192,255)" />
					</TrayWidget>
					<div
						className="diagram-layer"
						onDrop={event => {
							const data = JSON.parse(event.dataTransfer.getData("storm-diagram-node"));
							const nodesCount = _.keys(
								this.props.app
									.getDiagramEngine()
									.getDiagramModel()
									.getNodes()
							).length;

							let node = null;
							if (data.type === "in") {
								node = new AdvancedNodeModel("Node " + (nodesCount + 1), "rgb(192,255,0)");
								node.addInPort("In");
							} else {
								node = new AdvancedNodeModel("Node " + (nodesCount + 1), "rgb(0,192,255)");
								node.addOutPort("Out");
							}
							const points = this.props.app.getDiagramEngine().getRelativeMousePoint(event);
							node.x = points.x;
							node.y = points.y;
							this.props.app
								.getDiagramEngine()
								.getDiagramModel()
								.addNode(node);
							this.forceUpdate();
						}}
						onDragOver={event => {
							event.preventDefault();
						}}
					>
						<DiagramWidget className="srd-demo-canvas" diagramEngine={this.props.app.getDiagramEngine()} />
					</div>
				</div>
			</div>
		);
	}
}
