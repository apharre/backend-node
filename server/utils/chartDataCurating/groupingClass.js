import groupArray from 'group-array';
// import DataSeriesLaneDirectionClass from './dataSeries/dataSeriesClass.js';
// TODO: could break data into a bunch of lists

class GroupVehiclesTogether {
  /**
   * @param {!Array<Object>} rawData The data that is returned from the mongoDB query. It is an array of Objects sorted by date
   * @param {Object} queryRaw The query that is passed to mongoDB. Always contains the dates.
   */
  constructor(rawData, queryRaw) {
    this.rawData = rawData;
    this.queryRaw = queryRaw;
    this.plotCategories = ['type', 'direction', 'lane'];
    this.groupedNestedObject = this.createObjectGroup();

    this.firstLevelKeys = this.getFirstLevelKeys();
    this.secondLevelKeys = this.getSecondLevelKeys(); // undefined if plotCategories < 2
    this.thirdLevelkeys = this.getThirdLevelkeys(); // undefined if plotCategories < 3
    this.groupedArray = [];
  }

  createObjectGroup() {
    return groupArray(this.rawData, ...this.plotCategories);
  }

  destructureObjectGroup() {
    const keys = Object.keys(this.groupedNestedObject);
    console.log('keys', keys);
  }

  getFirstLevelKeys() {
    return Object.keys(this.groupedNestedObject);
  }

  getSecondLevelKeys() {
    const result = [];
    if (this.plotCategories.length >= 2) {
      this.firstLevelKeys.forEach((key) => {
        result.push(Object.keys(this.groupedNestedObject[key]));
      });
      return result;
    }
    return undefined;
  }

  getThirdLevelkeys() {
    if (this.plotCategories.length >= 3) {
      const result = [];
      for (let i = 0; i < this.firstLevelKeys.length; i += 1) {
        const temp = [];
        this.secondLevelKeys[i].forEach((key2) => {
          temp.push(Object.keys(this.groupedNestedObject[this.firstLevelKeys[i]][key2]));
        });
        result.push(temp);
      }
      return result;
    }
    return undefined;
  }

  getLabelCategories() {
    // if level3, if level 2, if level 1
    // Data Series creation
    const result = [];
    if (this.thirdLevelkeys) {
      for (let i = 0; i < this.firstLevelKeys.length; i += 1) {
        // 'commuter',                              this.firstLevelKeys[i]
        // [ '0', '1' ]                             this.secondLevelKeys[i];
        // [ [ '1', '2', '3' ], [ '1', '3' ] ]      this.thirdLevelKeys[i];
        for (let j = 0; j < this.secondLevelKeys[i].length; j += 1) {
          for (let k = 0; k < this.thirdLevelkeys[i][j].length; k += 1) {
            console.log(
              'Testing Output: ',
              `type: ${this.firstLevelKeys[i]} direction: ${this.secondLevelKeys[i][j]} Lane: ${this.thirdLevelkeys[i][j][k]}`
              // need a factory method
            );
            const type1 = this.firstLevelKeys[i];
            const direction2 = this.secondLevelKeys[i][j];
            const lane3 = this.thirdLevelkeys[i][j][k];
            const currentObj = this.groupedNestedObject[type1][direction2][lane3];
            console.log('currentObject', currentObj);
            result.push(currentObj);
          }
        }
      }
    }
    return result;
  }

  /**
   * groupedNestedObject =
   * {
   * commuter: {
   * '0': { '1': [Array], '2': [Array], '3': [Array] },
   * '1': { '1': [Array], '3': [Array] }
   * },
   * bus: {
   * '0': { '1': [Array], '2': [Array], '3': [Array] },
   *  '1': { '2': [Array], '3': [Array], '4': [Array] }
   * },
   * truck: { '0': { '1': [Array], '2': [Array] }, '1': { '1': [Array] } },
   * motorcycle: {
   * '0': { '1': [Array], '3': [Array] },
   * '1': { '2': [Array], '4': [Array] }
   *   }
   * }

   */

  // labelTestCreation() {
  //   this.plotCategories.forEach((category) => {
  //     if (category)
  //   })
  // }
}

export default GroupVehiclesTogether;
