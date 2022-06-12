import CreateChartDataQuery from "./chartQueryFunctions";

function chartQueryFactory(chartFilters) {
  /** Factory for the CreateChartDataQuery class
   * @param Object the object containing the information used in querying the chart data
   */
  const newQueryString = new CreateChartDataQuery(chartFilters);
  return newQueryString.newQuery();
}

export default chartQueryFactory;
