import React, { Component } from 'react';
//const API = 'http://127.0.0.1:3333';
class Content extends Component {

    render() {
        if (this.props.status === true) {
            return (
                <div className="content">
                    <div className="jumbotron">
                        <div className="tittlePractice">
                            <h1 className="display-3">{this.props.dataPractice.name}</h1>
                            <h3 className="display-5">Dificultad: {this.props.difficulty.name}</h3>
                        </div>
                        <div className="toolsPractice">
                            <hr className="my-4" />
                            <h2 className="display-5">Herramientas</h2>
                            {this.props.dataTools.map(tool =>
                                <li key={tool.id}>{tool.name}</li>
                            )}
                        </div>
                    </div>
                    {/* <div className="slider">
                        <div className="image">
    
                        </div>
                        <div className="controls">
                            <ul></ul>
                        </div>
                    </div> */}
                </div>
            );
        }
        return (<div className="content">

        </div>
        
        )
    }
}


export default Content;