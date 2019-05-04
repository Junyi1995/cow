import React from 'react';
import ReactDOM from 'react-dom';
import { Chart,Geom,Axis,Tooltip,Label,Shape} from "bizcharts";
import cowData from './mock/line.json';
export class CowTemperature extends React.Component {
  render() {
    const data=cowData
    const cols = {

      temperature: {
        min: 0
      }
    };
    return (
      <div className="date-item">
        <div className="item-title">
          <p className="title">CowTemperature</p>
        </div>
        <div className="data-cubes">
          <div className="cube">
            <Chart height={400} data={data} scale={cols} forceFit>
              <Axis name="hour" />
                <Axis
                  name="temperature"
                  label={{  formatter: val => `${val}°C` }}
                  />
                  <Tooltip
                    crosshairs={{
                    type: "y"
                  }}
                  />
                <Geom
                type="line"
                position="hour*temperature"
                size={2}
                shape={"smooth"}
                />
                <Geom
                type="point"
                position="hour*temperature"
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
