/* jshint esversion:6 */

import React from "react";
import {IndexLink, Link} from "react-router";

export default class File extends React.Component {
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
            <div className="list-group-item {rowClass}" title={this.props.linkpath}>
                <h4 class="list-group-item-heading">
                    <button type="button" class="btn btn-default btn-xs">
                        <span class="glyphicon glyphicon-cloud-download"></span>
                    </button>
                    &nbsp;
                    {this.props.meta.title}
                </h4>
                <div class="list-group-item-text">
                    <div class="col-md-2 btn-group btn-sm" role="group" aria-label="...">
                        <button type="button" class="btn btn-default btn-xs">
                            <span class="glyphicon glyphicon-cloud-download"></span>
                        </button>
                    </div>
                    <div>{this.props.meta.author}</div>
                    <div>{this.props.meta.errors}</div>
                    <span class="label label-primary">{this.props.meta.lang}</span>&nbsp;
                    <span class="label label-info">{this.props.meta.ext}</span>

                </div>
            </div>
        );
    }
}
