import React from 'react';
import requests from 'api/requests';
import Banner from 'components/Banner';
import Row from 'components/Row';

function MainPage() {
  return (
    <div>
      <Banner></Banner>
      <Row title='NETFLEX ORIGINALS' id='NO' fetchUrl={requests.fetchNetflixOriginals} isLargeRow></Row>
      <Row title='Trending Now' id='TN' fetchUrl={requests.fetchTrending} isLargeRow></Row>
      <Row title='TOP Rated' id='TR' fetchUrl={requests.fetchTopRated} isLargeRow></Row>
      <Row title='Action Movies' id='AM' fetchUrl={requests.fetchActionMovies} isLargeRow></Row>
      <Row title='Comedy Movies' id='CM' fetchUrl={requests.fetchComedyMovies} isLargeRow></Row>
    </div>
  );
}

export default MainPage;
