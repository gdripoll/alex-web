/* jshint esversion:6 */

import React from "react";
import $ from "jquery";

import File from "../components/File";
import Dir from "../components/Dir";

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            files: [
                {
                    "dir": "",
                    "name": "comics",
                    "type": "d",
                    "size": 4096,
                    "meta": "",
                    "root": "/home/goose/Dropbox/DESARROLLO/NODE/alex-service/files",
                    "fullpath": "/home/goose/Dropbox/DESARROLLO/NODE/alex-service/files/comics",
                    "linkpath": "comics",
                    "exists": true
                }, {
                    "dir": "",
                    "name": "enciclopedias",
                    "type": "d",
                    "size": 4096,
                    "meta": "",
                    "root": "/home/goose/Dropbox/DESARROLLO/NODE/alex-service/files",
                    "fullpath": "/home/goose/Dropbox/DESARROLLO/NODE/alex-service/files/enciclopedias",
                    "linkpath": "enciclopedias",
                    "exists": true
                }, {
                    "dir": "",
                    "name": "idiomas",
                    "type": "d",
                    "size": 4096,
                    "meta": "",
                    "root": "/home/goose/Dropbox/DESARROLLO/NODE/alex-service/files",
                    "fullpath": "/home/goose/Dropbox/DESARROLLO/NODE/alex-service/files/idiomas",
                    "linkpath": "idiomas",
                    "exists": true
                }, {
                    "dir": "",
                    "name": "literatura",
                    "type": "d",
                    "size": 4096,
                    "meta": "",
                    "root": "/home/goose/Dropbox/DESARROLLO/NODE/alex-service/files",
                    "fullpath": "/home/goose/Dropbox/DESARROLLO/NODE/alex-service/files/literatura",
                    "linkpath": "literatura",
                    "exists": true
                }, {
                    "dir": "",
                    "name": "Diccionarios.Asturiano....Diccionario castellano-asturiano y nombres en bable.doc",
                    "type": "f",
                    "size": 46080,
                    "meta": {
                        "author": "Desconocido",
                        "title": "Asturiano",
                        "lang": "esp",
                        "ext": "epub",
                        "errors": ["Author name don't match."]
                    },
                    "root": "/home/goose/Dropbox/DESARROLLO/NODE/alex-service/files",
                    "fullpath": "/home/goose/Dropbox/DESARROLLO/NODE/alex-service/files/Diccionarios.Asturiano....Diccionario castellano-asturiano y nombres en bable.doc",
                    "linkpath": "Diccionarios.Asturiano....Diccionario%20castellano-asturiano%20y%20nombres%20en%20bable.doc",
                    "exists": true
                }
            ]
        }
        $.getJSON("http://localhost:3000/alex/list", (data) => {
            console.log(data);
        });

    }

    render() {
        const {files} = this.state;
        var a = 0;
        const filesTags = files.map((f) => {
            if (f.type == 'd') {
                return <Dir key={a++} {...f}/>
            } else {
                return <File key={a++} {...f}/>;
            }
        });

        return (
            <div id="home">
                <h1>x:2:x</h1>
                <div class="container">
                    <div class="list-group">{filesTags}</div>
                </div>
            </div>
        );
    }
}
