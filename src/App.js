// @flow
import * as SRD from "storm-react-diagrams";
import { AdvancedNodeModel, AdvancedLinkFactory } from './AdvancedDiagramFactories';
import "./sass/main.scss";

/**
 * @author Dylan Vorster
 */
export class Application {
	activeModel: SRD.DiagramModel;
	diagramEngine: SRD.DiagramEngine;

	constructor() {
		this.diagramEngine = new SRD.DiagramEngine();
		this.diagramEngine.installDefaultFactories();

		this.diagramEngine.registerLinkFactory(new AdvancedLinkFactory());

		this.newModel();
	}

	newModel() {
		this.activeModel = new SRD.DiagramModel();
		this.diagramEngine.setDiagramModel(this.activeModel);

		//3-A) create a default node
		const node1 = new AdvancedNodeModel("Node 1", "rgb(0,192,255)");
		const port = node1.addOutPort("Out");
		node1.setPosition(100, 100);

		//3-B) create another default node
		const node2 = new AdvancedNodeModel("Node 2", "rgb(192,255,0)");
		const port2 = node2.addInPort("In");
		node2.setPosition(400, 100);

		// link the ports
		const link1 = port.link(port2);
		// link1.setColor('#000000');

		this.activeModel.addAll(node1, node2, link1);
	}

	getActiveDiagram(): SRD.DiagramModel {
		return this.activeModel;
	}

	getDiagramEngine(): SRD.DiagramEngine {
		return this.diagramEngine;
	}
}
