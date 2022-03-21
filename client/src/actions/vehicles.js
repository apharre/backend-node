// Placeholder file and functions
function fetchVehicles() {
  return { type: "commuter", speed: 55 };
}

const getVehicles = () => async (dispatch) => {
  const { data } = await fetchVehicles();
  dispatch({ type: "FETCH_ALL", payload: data });
};

export default getVehicles;
