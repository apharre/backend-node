class PercentSpeedFunctions {
  // constructor(newObject) {
  constructor(direction, name, d1PercentChange, d2PercentChange) {
    this.nsew = direction;
    this.name = name;
    this.d1PercentChange = d1PercentChange;
    this.d2PercentChange = d2PercentChange;

    // this.nsew = newObject.direction;
    this.direction1 = this.nsew === 0 ? 'N' : 'E';
    this.direction2 = this.nsew === 0 ? 'S' : 'W';
    this.d1VariableName = this.nsew === 0 ? 'nb_percent_speed_change' : 'eb_percent_speed_change';
    this.d2VariableName = this.nsew === 0 ? 'sb_percent_speed_change' : 'wb_percent_speed_change';
  }

  percentSpeedResult() {
    // const d1 = this.d1VariableName;
    // const d2 = this.d2VariableName;
    return [
      {
        name: `${this.name}`,
        nsew: `${this.direction1}`,
        percent_speed_change: `${this.d1PercentChange}`,
      },
      {
        name: `${this.name}`,
        nsew: `${this.direction2}`,
        percent_speed_change: `${this.d2PercentChange}`,
      },
    ];
  }

  brokenDownElement() {
    return this.percentSpeedResult();
  }
}

export default PercentSpeedFunctions;
