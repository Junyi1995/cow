import React from 'react';
import ReactDOM from 'react-dom';
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";


export class CowTemperature extends React.Component {
  render() {
    const data= [
      {
        hour: "00:00",
        temperature: 4
      },
      {
        hour: "01:00",
        temperature: 5
      },
      {
        hour: "02:00",
        temperature: 4
      },
      {
        hour: "03:00",
        temperature: 5
      },
      {
        hour: "04:00",
        temperature: 5
      }
    ];
    const cols = {
      temperature: {
        min: 0
      },
      hour: {
        range: [0, 1]
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
                <Axis name="temperature" />
                  <Tooltip
                    crosshairs={{
                    type: "y"
                  }}
                  />
                <Geom type="line" position="hour*temperature" size={2} />
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
