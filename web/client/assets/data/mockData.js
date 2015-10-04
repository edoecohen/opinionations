(function () {

  angular
    .module('app')
    .factory('MockData', MockData);

  MockData.$inject = [];

  function MockData(){

    var service = { };

    service.recordings = [
      {
        articleTitle:     'Firefighters’ Union Backs Away From Endorsement of Hillary Clinton',
        articleLink:      'http://www.nytimes.com/2015/10/03/us/politics/firefighters-union-backs-away-from-endorsement-of-hillary-clinton.html?_r=0',
        articlePic:       'http://static01.nyt.com/images/2015/10/03/us/02firefighters/02firefighters-master675.jpg',
        articleSrc:       'New York Times',
        date:             '10/3/2015',
        opName:           'Jordan Gardiner',
        opPic:            'https://avatars1.githubusercontent.com/u/613882?v=3&s=460',
        audio:            './client/assets/audio/Sunscreen.mp3',
        topics:           ['Clinton', 'Politics'],
        length:           '3:32'
      },
      {
        articleTitle:     'The Last Thing Bernie Sanders Needs Right Now Is A Conversation About Guns',
        articleLink:      'http://www.npr.org/sections/itsallpolitics/2015/10/02/445312778/the-last-thing-bernie-sanders-needs-right-now-is-a-conversation-about-guns',
        articlePic:       'http://media.npr.org/assets/img/2015/10/02/ap_16278826202_wide-715c3a98d1b266e535c30c41d0b6554e4eb8c158-s800-c85.jpg',
        articleSrc:       'NPR',
        date:             '10/3/2015',
        opName:           'Mike Yao',
        opPic:            'https://avatars2.githubusercontent.com/u/7408826?v=3&s=460',
        audio:            './client/assets/audio/Sunscreen.mp3',
        topics:           ['Sanders', 'Politics'],
        length:           '2:18'
      },
      {
        articleTitle:     'Chinese President Xi Jinping Arrives In Washington For U.S. State Visit',
        articleLink:      'http://www.huffingtonpost.com/entry/xi-jinping-obama-state-visit_56046d3de4b00310edfab613',
        articlePic:       'http://img.huffingtonpost.com//asset/scalefit_630_noupscale/56046e6d1c00002d00bfb8c7.jpeg',
        articleSrc:       'Huffington Post',
        date:             '9/24/2015',
        opName:           'Mike Yao',
        opPic:            'https://avatars2.githubusercontent.com/u/7408826?v=3&s=460',
        audio:            './client/assets/audio/Sunscreen.mp3',
        topics:           ['China', 'International Relations'],
        length:           '1:32'
      }

    ];

    return service;
  }

}());

