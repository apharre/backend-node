import { v4 as uuidv4 } from 'uuid';

class PercentSpeedFunctions {
  // constructor(newObject) {
  constructor(direction, name, d1PercentChange, d2PercentChange) {
    /**
     * breaks down the items from the database into indivudual objects to be read into the table on the maps page
     *
     * @param {!direction} int If 0, the road runs North/South. If 1, the road runs East/West
     * @param {!name} str the name to be displayed in the table
     * @param {!d1PercentChange} float the percent change in speed for that direction over the past 10 minutes (North or East)
     * @param {!d2PercentChange} the percent change in speed for that direction over the past 10 minutes (South or West)
     */
    this.nsew = direction;
    this.name = name;
    this.d1PercentChange = d1PercentChange;
    this.d2PercentChange = d2PercentChange;
    this.direction1 = this.nsew === 0 ? 'North' : 'East';
    this.direction2 = this.nsew === 0 ? 'South' : 'West';
  }

  percentSpeedResult() {
    return [
      {
        key: uuidv4(),
        name: `${this.name}`,
        nsew: `${this.direction1}`,
        percent_speed_change: `${this.d1PercentChange}`,
      },
      {
        key: uuidv4(),
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
