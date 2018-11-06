export function fetchVoterInformation(address){
  return (dispatch) => {
    dispatch({ type: 'LOADING_VOTER_INFORMATION', address });
    return fetch(`https://secret-reaches-59392.herokuapp.com/search/${address}`)
      .then(function(response){
        debugger
      })
      .then(data => dispatch({ type: 'FETCH_VOTER_INFORMATION', data }));
}
}
