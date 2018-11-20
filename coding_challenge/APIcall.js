
const https = require('https');
/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 */
function getMovieTitles(substr) {

  result = []
  let url = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=' + substr
  https.get(url, (res) => {

    res.on('data', function (body) {
      let dataRec = JSON.parse(body);
      let movies = dataRec.data;
      let totalCount = dataRec.total
      let totPages = dataRec.total_pages;
      let sortArray = [];
      movies.map((a) => {
        sortArray.push(a.Title)
      })
      for (let i = 2; i <= totPages; i++) {
        let newPage = i;
        let url1 = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=' + substr + "&page=" + newPage;
        https.get(url1, (res) => {

          res.on('data', function (body) {
            let newData = JSON.parse(body);
            let newMovies = newData.data;
            for (let i = 0; i < newMovies.length; i++) {
              sortArray.push(newMovies[i].Title);
            }

            result = sortArray.sort()

            result.map(title => {
              console.log(title)
            })

          })

        })
      }
    })

  })


}


let movieTitle = 'spiderman'
getMovieTitles(movieTitle);