import React from 'react';
import ReactDOM from 'react-dom';
import { Chart,Geom,Axis,Tooltip,Label,Shape} from "bizcharts";
import cowData from './mock/line.json';
import $ from 'jquery';
import axios from 'axios';
const url= 'https://cow-data-test.azurewebsites.net/';

export class CowTemperature extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      __loading: false,
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({
      __loading: true,
    });
    axios.get(url, { crossdomain: true})
      .then((response) => {
        console.log(response)
        this.setState({
          data: response.data,
          __loading: false,
      });
      console.log(this.state.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const cols = {

      temperature: {
        min: 0
      }
    };
    const{
      data,
      __loading,
    } = this.state;
    return (
      <div className="date-item">
        <div className="item-title">
          <p className="title">CowTemperature</p>
        </div>
        <div className="data-cubes">
          <div className="cube">
            <Chart height={400} data={this.state.data} scale={cols} forceFit>
              <Axis name="Hour" />
                <Axis
                  name="Temperature"
                  label={{  formatter: val => `${val}°C` }}
                  />
                  <Tooltip
                    crosshairs={{
                    type: "y"
                  }}
                  />
                <Geom
                type="line"
                position="Hour*Temperature"
                size={2}
                shape={"smooth"}
                />
                <Geom
                type="point"
                position="Hour*Temperature"
                size={4}
                shape={"circle"}
                style={{
                  stroke: "#fff",
                  lineWidth: 1
                }}
                />
            </Chart>
          </div>
        </div>
      </div>
    );
  }
}
