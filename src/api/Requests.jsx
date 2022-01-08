const url = "https://dominicast-backend.herokuapp.com/graphql"

const apiRequest = (params) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var graphql = JSON.stringify({
    query: params,
    variables: {}
  })
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: graphql,
    redirect: 'follow'
  };

  return fetch(`${url}`, requestOptions)
    .then(res => res.json())
}

export default apiRequest;