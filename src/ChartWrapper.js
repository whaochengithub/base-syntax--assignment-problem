import React, { Component } from 'react';
import D3Chart from './D3Chart';
import NewChart from './NewChart';



class ChartWrapper extends Component {

    componentDidMount() {
        this.setState({
            chart: new NewChart(this.refs.chart, this.props.data, this.props.updateName)
        })
    }

    shouldComponentUpdate(){
        return false
    }

    componentWillReceiveProps(nextProps){
        //this.state.chart.update(nextProps.gender)
        this.state.chart.update(nextProps.data);
    }

    render() {
        return <div className="chart-area" ref="chart"></div>
        
    }


}

export default ChartWrapper;