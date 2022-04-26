import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback = ()=>{}) => {
  // TODO
  $.ajax({
    // domain + endpoint == where we goin?
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    // method - HTTP verb - how we are going to request info
    type: 'GET',
    // this prop is used to send additional context with the request
    data: {q: query},
    // a header setting, saying request json data
    contentType: 'application/json',
    // callbacks
    success: function(data) { callback(data); },
    error: function(error) {
      console.error('Search Failed', error);
    }
  });

};

export default searchYouTube;
