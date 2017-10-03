const faculty = [{
  name: 'Brent Hecht',
  link: 'http://www.brenthecht.com/',
  image: '/static/brent1.jpg',
}];

const gradStudents = [{
  name: 'Allen Lin',
  link: 'http://users.eecs.northwestern.edu/~ylo3469/',
  image: '/static/allen1.jpg',
}, {
  name: 'Isaac Johnson',
  link: 'http://www-users.cs.umn.edu/~joh12041/',
  image: '/static/isaac1.jpg',
}, {
  name: 'Hanlin Li',
  link: 'http://www.lihanlin.com',
  image: '/static/hanlin1.jpg',
}, {
  name: 'Nick Vincent',
  link: 'https://www.linkedin.com/in/nicholas-vincent-93594a81/',
  image: '/static/nick_vincents_face.jpg',
}];


const undergradStudents = [{
  name: 'Bodhi Alarcon',
}, {
  name: 'Patrick Sheehan',
}, {
  name: 'Rainy Che',
}, {
  name: 'Sara Milkes',
}];

const collaborators = [{
  name: 'GroupLens @ University of Minnesota',
  link: 'http://users.eecs.northwestern.edu/~ylo3469/',
}, {
  name: 'HCI Bremen @ Universitat Bremen',
  link: 'http://www-users.cs.umn.edu/~joh12041/',
}];

const about = `
PSA Research is a research group at Northwestern University that studies Human-Computer Interaction (HCI), spatial computing, social computing, and the intersection of all three.
`;

const news = [
  'June 2017: Brent Hecht selected as Chair of ACM Future of Computing Academcy',
  'May 2017: Three CHI Paper Presentations!',
  'Feb 2017: CSCW Presentation: Addressing article-as-a-concept assumption',
  'Jan 2017: Three CHI Papers Accepted!',
];

const projects = [{
  name: 'Tweet Geolocation',
  image: '/static/geolocation.png',
  description: 'We studied the biases present in both text and network based Tweet geolocation algorithms.',
}, {
  name: 'Routing Algorithmic Externalities',
  image: '/static/routing_externalities.png',
  description: 'In this project, we identified externalities that arise when routing algorithms change behavior.',
}, {
  name: 'Death by GPS',
  image: '/static/deathbygps.png',
  description: 'We studied the dangerous effects of GPS failures.',
}];

const publications = [{
  bibtex: `@article{klein2017quality,
    title={Quality Standards, Service Orientation, and Power in Airbnb and Couchsurfing},
    author={KLEIN, MAXIMILIAN and ZHAO, JINHAO and NI, JIAJUN and JOHNSON, ISAAC and HILL, BENJAMIN MAKO and ZHU, HAIYI},
    year={2017}
  }`,
  links: [
    {
      to: 'http://www-users.cs.umn.edu/~joh12041/Publications/MoneyAndTheSharingEconomy.pdf',
      display: 'Preprint PDF',
    },
  ],
}, {
  bibtex: `@article{johnson2017beautiful,
    title={Beautiful… but at What Cost?: An Examination of Externalities in Geographic Vehicle Routing},
    author={Johnson, Isaac and Henderson, Jessica and Perry, Caitlin and Sch{\"o}ning, Johannes and Hecht, Brent},
    journal={Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies},
    volume={1},
    number={2},
    pages={15},
    year={2017},
    publisher={ACM}
  }`,
  links: [{
    to: 'http://www-users.cs.umn.edu/~joh12041/Publications/RoutingExternalities_Ubicomp2017.pdf',
    display: 'Preprint PDF',
  }, {
    to: 'https://github.com/joh12041/route-externalities',
    display: 'Code (Github)',
  }, {
    to: 'https://docs.google.com/presentation/d/1wphBz3Z_kcXSjDtxeEfhU-hq5zWSvUir0VCUjzsSO_Q/edit?usp=sharing',
    display: 'Slides (Ubicomp 2017)',
  }],
}, {
  bibtex: `@inproceedings{hecht2011tweets,
    title={Tweets from Justin Bieber's heart: the dynamics of the location field in user profiles},
    author={Hecht, Brent and Hong, Lichan and Suh, Bongwon and Chi, Ed H},
    booktitle={Proceedings of the SIGCHI conference on human factors in computing systems},
    pages={237--246},
    year={2011},
    organization={ACM}
  }`,
  links: [
    {
      to: 'http://dl.acm.org/citation.cfm?id=2037383',
      display: 'Archived PDF (ACM)',
    },
  ],
}, {
  bibtex: `@inproceedings{hecht2011tweets,
    title={Tweets from Justin Bieber's heart: the dynamics of the location field in user profiles},
    author={Hecht, Brent and Hong, Lichan and Suh, Bongwon and Chi, Ed H},
    booktitle={Proceedings of the SIGCHI conference on human factors in computing systems},
    pages={237--246},
    year={2011},
    organization={ACM}
  }`,
  links: [
    {
      to: 'http://dl.acm.org/citation.cfm?id=2037383',
      display: 'Archived PDF (ACM)',
    },
  ],
}, {
  bibtex: `@inproceedings{hecht2011tweets,
    title={Tweets from Justin Bieber's heart: the dynamics of the location field in user profiles},
    author={Hecht, Brent and Hong, Lichan and Suh, Bongwon and Chi, Ed H},
    booktitle={Proceedings of the SIGCHI conference on human factors in computing systems},
    pages={237--246},
    year={2011},
    organization={ACM}
  }`,
  links: [
    {
      to: 'http://dl.acm.org/citation.cfm?id=2037383',
      display: 'Archived PDF (ACM)',
    },
  ],
}, {
  bibtex: `@inproceedings{hecht2011tweets,
    title={Tweets from Justin Bieber's heart: the dynamics of the location field in user profiles},
    author={Hecht, Brent and Hong, Lichan and Suh, Bongwon and Chi, Ed H},
    booktitle={Proceedings of the SIGCHI conference on human factors in computing systems},
    pages={237--246},
    year={2011},
    organization={ACM}
  }`,
  links: [
    {
      to: 'http://dl.acm.org/citation.cfm?id=2037383',
      display: 'Archived PDF (ACM)',
    },
  ],
}, {
  bibtex: `@inproceedings{bohmer2011falling,
    title={Falling asleep with Angry Birds, Facebook and Kindle: a large scale study on mobile application usage},
    author={B{\"o}hmer, Matthias and Hecht, Brent and Sch{\"o}ning, Johannes and Kr{\"u}ger, Antonio and Bauer, Gernot},
    booktitle={Proceedings of the 13th international conference on Human computer interaction with mobile devices and services},
    pages={47--56},
    year={2011},
    organization={ACM}
  }`,
  links: [
    {
      to: 'https://dl.acm.org/citation.cfm?id=2037383',
      display: 'Archived PDF (ACM)',
    },
  ],
}];

const fs = require('fs');

const data = {
  faculty, gradStudents, undergradStudents, collaborators, about, news, projects
};

fs.writeFile("data.json", JSON.stringify(data), function(err) {
  if(err) {
      return console.log(err);
  }

  console.log("Data file was saved!");
}); 


fs.writeFile("publications.json", JSON.stringify(publications), function(err) {
  if(err) {
      return console.log(err);
  }

  console.log("Publications file was saved!");
}); 