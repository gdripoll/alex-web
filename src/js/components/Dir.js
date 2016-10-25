/* jshint esversion:6 */

import React from "react";
import {IndexLink, Link} from "react-router";

export default class Dir extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: true
        };
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    render() {
        const {location} = this.props;
        const {collapsed} = this.state;
        const rowClass = collapsed
            ? "collapse"
            : "";

        return (
            <div className="list-group-item {rowClass}" title="{this.props.linkpath}">
                <h4 class="list-group-item-heading">
                    <button type="button" class="btn btn-default btn-xs">
                        <span class="glyphicon glyphicon-folder-open"></span>
                    </button>
                    &nbsp;
                    <span>{this.props.name}</span>
                </h4>
                <div class="list-group-item-text">
                    XZX Este es el area para los comandos
                </div>
            </div>
        );
    }
}
