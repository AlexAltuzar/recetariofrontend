import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Content from './Content';
import './styles/burgerMenu.css';
const API = 'http://127.0.0.1:3333';
class Container extends Component {

    constructor(props) {
        super(props)
        this.toggleMenu = React.createRef();
        this.practiceSelected = this.practiceSelected.bind(this);
        this.state = {
            visible: false,
            practice: "",
            difficulty: "",
            toolsPractice: [],
            practices: [],
            tools: [],
            process: []

        }
    }

    render() {
        return (
            <div className="main-container" ref={this.toggleMenu}>
                <Navbar refTM={this.toggleMenu} />
                <div className="lateral-menu bg-dark">
                    {this.state.practices.map(props =>
                        <div onClick={() => this.practiceSelected(props)} className="menu-item btn btn-dark" role="button" id={props.id} key={props.id}>{props.name}</div>
                    )}
                </div>
                <Content
                    dataPractice={this.state.practice}
                    difficulty={this.state.difficulty}
                    dataTools={this.state.dataTools}
                    status={this.state.visible}
                />
                {/* <HomePage></HomePage> */}
            </div>

        );
    }

    practiceSelected(object) {
        this.setState({ visible: true });
        this.setState({ practice: object });
        this.setState({
            dataTools: this.state.tools.filter(function (tool) {
                return tool.id_practice === object.id;
            })
        });
        this.setState({
            difficulty: this.state.difficulties.find(function (e) {
                return e.id === object.id_difficulty;
            })
        });
    }

    componentDidMount() {
        let link = `${API}/practices/show`;
        axios.get(link).then(response => response.data)
            .then((data) => {
                this.setState({ practices: data })
                //console.log(this.state.practices)
            })
            link = `${API}/difficulties/show`;
            axios.get(link).then(response => response.data)
                .then((data) => {
                    this.setState({ difficulties: data })
                    //console.log(this.state.difficulties)
                })
            link = `${API}/tools/show`;
            axios.get(link).then(response => response.data)
                .then((data) => {
                    this.setState({ tools: data })
                    //console.log(this.state.tools)
                })
            link = `${API}/processes/show`;
            axios.get(link).then(response => response.data)
                .then((data) => {
                    this.setState({ processes: data })
                    //console.log(this.state.processes)
                })
    }


}

// function HomePage() {
    
//     var x = new window.jsPDF();
//     x.text(20, 20, 'Hola mundo');
//     var z="hola mundo"
//     console.log(x);
//     console.log(z);
//     //window.open(x.output('bloburl'));
//     //x.save('mipdf.pdf');
//     return <div></div>
// }

export default Container;