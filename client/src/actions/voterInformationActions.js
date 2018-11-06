export function fetchVoterInformation(address){
  return (dispatch) => {
    dispatch({ type: 'LOADING_VOTER_INFORMATION', address });
    return fetch(`/search/${address}`)
      .then(response => response.json())
      .then(data => dispatch({ type: 'FETCH_VOTER_INFORMATION', data }));
}
}
