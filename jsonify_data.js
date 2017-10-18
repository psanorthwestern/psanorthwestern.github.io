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
  link: 'http:/www.isaacjoh.com',
  image: '/static/isaac1.jpg',
}, {
  name: 'Hanlin Li',
  link: 'http://www.lihanlin.com',
  image: '/static/hanlin1.jpg',
}, {
  name: 'Nick Vincent',
  link: 'https://www.nickmvincent.com',
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
  link: 'https://grouplens.org/',
}, {
  name: 'HCI Bremen @ University of Bremen',
  link: 'http://hci.uni-bremen.de/',
}, {
  name: 'Collablab @ Northwestern University',
  link: 'http://collablab.northwestern.edu/',
}];

const about = `
PSA Research is a research group at Northwestern University that studies Human-Computer Interaction (HCI), spatial computing, social computing, and the intersection of all three.
`;

const opportunitiesText = `
We are currently looking for students excited about doing work at the intersection of human-computer interaction, spatial computing, and social computing. Undergraduate and graduate students who would like to join PSA Research should feel free to e-mail Brent directly. Please include a little bit about yourself (e.g. CV/resume, any past research experience, skills) and something about your research interests.`;

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
  bibtex: `@inproceedings{johnson2017stranger,
    title={Stranger Searching in a Strange Land: The Impact of Familiarity on Local Search},
    author={Johnson, Isaac and Sosik, Victoria Schwanda and Ballard, Kacey},
    booktitle={Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems},
    pages={1726--1730},
    year={2017},
    organization={ACM}
  }`,
  links: [{
    to: 'http://www-users.cs.umn.edu/~joh12041/Publications/DiningFamiliarity_CHI2017.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@inproceedings{wenig2017pharos,
    title={Pharos: improving navigation instructions on smartwatches by including global landmarks},
    author={Wenig, Nina and Wenig, Dirk and Ernst, Steffen and Malaka, Rainer and Hecht, Brent and Sch{\"o}ning, Johannes},
    booktitle={Proceedings of the 19th International Conference on Human-Computer Interaction with Mobile Devices and Services},
    pages={7},
    year={2017},
    organization={ACM}
  }`,
  links: [{
    to: 'http://brenthecht.com/publications/mobilehci2017_pharos.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@inproceedings{lin2017understanding,
    title={Understanding: A Systematic Study of Catastrophic Incidents Associated with Personal Navigation Technologies},
    author={Lin, Allen Yilun and Kuehl, Kate and Sch{\"o}ning, Johannes and Hecht, Brent},
    booktitle={Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems},
    pages={1154--1166},
    year={2017},
    organization={ACM}
  }`,
  links: [{
    to: 'http://brenthecht.com/publications/chi17_deathbygps.pdf',
    display: 'PDF',
  }, {
    to: 'https://cheetah90.github.io/gps_failure/',
    display: 'Interactive Map',
  }, {
    to: 'https://github.com/cheetah90/gps_failure',
    display: 'Dataset',
  }],
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
  bibtex: `@article{li2017accessibilityfail,
    title={\# accessibilityfail: Exploring the potential of using social media posts to identify accessibility problems},
    author={Li, Hanlin and Brady, Erin},
    journal={iConference 2017 Proceedings},
    year={2017},
    publisher={iSchools}
  }`,
  links: [{
    to: 'https://www.ideals.illinois.edu/bitstream/handle/2142/96777/2.9_99_Li-%23accessibilityFail.pdf?sequence=1&isAllowed=y',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@inproceedings{twitterPoliticalConflicts2018NotFinal,
    title={Working toward Empowering a Community: How Immigrant-Focused Nonprofit Organizations Use Twitter during Political Conflicts},
    author={Li, Hanlin and Dombrowski, Lynn and Brady, Erin},
    booktitle={Proceedings of the 20th International Conference on Supporting Group Work (GROUP ’18)},
    year={2018},
    organization={ACM}
  }`,
  links: [{
    to: '',
    display: '',
  }, ],
}, {
  bibtex: `@inproceedings{hecht20172016,
    title={The 2016 US Election and HCI: Towards a Research Agenda},
    author={Hecht, Brent and Terveen, Loren and Starbird, Kate and Shneiderman, Ben and Golbeck, Jennifer},
    booktitle={Proceedings of the 2017 CHI Conference Extended Abstracts on Human Factors in Computing Systems},
    pages={1307--1311},
    year={2017},
    organization={ACM}
  }`,
  links: [{
    to: 'https://dl.acm.org/citation.cfm?id=3051140',
    display: 'PDF (ACM)',
  }, ],
}, {
  bibtex: `@inproceedings{lin2017understanding,
    title={Understanding: A Systematic Study of Catastrophic Incidents Associated with Personal Navigation Technologies},
    author={Lin, Allen Yilun and Kuehl, Kate and Sch{\"o}ning, Johannes and Hecht, Brent},
    booktitle={Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems},
    pages={1154--1166},
    year={2017},
    organization={ACM}
  }`,
  links: [{
    to: 'http://www.brenthecht.com/publications/chi17_deathbygps.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@inproceedings{colley2017geography,
    title={The geography of Pok{\'e}mon GO: beneficial and problematic effects on places and movement},
    author={Colley, Ashley and Thebault-Spieker, Jacob and Lin, Allen Yilun and Degraen, Donald and Fischman, Benjamin and H{\"a}kkil{\"a}, Jonna and Kuehl, Kate and Nisi, Valentina and Nunes, Nuno Jardim and Wenig, Nina and others},
    booktitle={Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems},
    pages={1179--1192},
    year={2017},
    organization={ACM}
  }`,
  links: [{
    to: 'http://www.brenthecht.com/publications/chi17_geographyofpokemongo.pdf',
    display: 'PDF',
  }, {
    to: 'https://github.com/PokemonGoCHI17/PokemonGo2017_Field_Survey_Data',
    display: 'Dataset',
  }],
}, {
  bibtex: `@inproceedings{johnson2017effect,
    title={The Effect of Population and "Structural" Biases on Social Media-based Algorithms -- A Case Study in Geolocation Inference Across the Urban-Rural Spectrum.},
    author={Johnson, Isaac and McMahon, Connor and Sch{\"o}ning, Johannes and Hecht, Brent},
    booktitle={Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems},
    pages={1167--1178},
    year={2017},
    organization={ACM}
  }`,
  links: [{
    to: 'http://www.brenthecht.com/publications/chi17_urbanruralgeolocationbias.pdf',
    display: 'PDF',
  }, {
    to: 'https://drive.google.com/file/d/0B9n3jDBR7l_6b1ZRNndPZllPVGs/view?usp=sharing',
    display: 'Slides',
  }],
}, {
  bibtex: `@inproceedings{hall2017freedom,
    title={Freedom versus standardization: structured data generation in a peer production community},
    author={Hall, Andrew and McRoberts, Sarah and Thebault-Spieker, Jacob and Lin, Yilun and Sen, Shilad and Hecht, Brent and Terveen, Loren},
    booktitle={Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems},
    pages={6352--6362},
    year={2017},
    organization={ACM}
  }`,
  links: [{
    to: 'http://brenthecht.com/publications/chi17_freedomstandardization_openstreetmap.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@article{thebault2017toward,
    title={Toward a Geographic Understanding of the Sharing Economy: Systemic Biases in UberX and TaskRabbit},
    author={Thebault-Spieker, Jacob and Terveen, Loren and Hecht, Brent},
    journal={ACM Transactions on Computer-Human Interaction (TOCHI)},
    volume={24},
    number={3},
    pages={21},
    year={2017},
    publisher={ACM}
  }`,
  links: [{
    to: 'http://www.brenthecht.com/publications/tochi_preprint_sharingeconomygeography.pdf',
    display: 'PDF',
  }, {
    to: 'https://github.com/jtsmn/uber_data_spatial_durbin_model',
    display: 'Code',
  }],
}, {
  bibtex: `@inproceedings{sen2017cartograph,
    title={Cartograph: Unlocking Spatial Visualization Through Semantic Enhancement},
    author={Sen, Shilad and Swoap, Anja Beth and Li, Qisheng and Boatman, Brooke and Dippenaar, Ilse and Gold, Rebecca and Ngo, Monica and Pujol, Sarah and Jackson, Bret and Hecht, Brent},
    booktitle={Proceedings of the 22nd International Conference on Intelligent User Interfaces},
    pages={179--190},
    year={2017},
    organization={ACM}
  }`,
  links: [{
    to: 'http://brenthecht.com/publications/iui_cartograph.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@inproceedings{lin2017problematizing,
    title={Problematizing and Addressing the Article-as-Concept Assumption in Wikipedia},
    author={Lin, Yilun and Yu, Bowen and Hall, Andrew and Hecht, Brent},
    booktitle={Proceedings of the 2017 ACM Conference on Computer Supported Cooperative Work and Social Computing},
    pages={2052--2067},
    year={2017},
    organization={ACM}
  }`,
  links: [{
    to: 'http://www.brenthecht.com/publications/cscw17_subarticles.pdf',
    display: 'PDF',
  }, {
    to: 'http://z.umn.edu/WikiSubarticles',
    display: 'Dataset/Code',
  }],
}, {
  bibtex: `@inproceedings{mcmahon2017substantial,
    title={The Substantial Interdependence of Wikipedia and Google: A Case Study on the Relationship Between Peer Production Communities and Information Technologies.},
    author={McMahon, Connor and Johnson, Isaac L and Hecht, Brent J},
    booktitle={ICWSM},
    pages={142--151},
    year={2017}
  }`,
  links: [{
    to: 'http://brenthecht.com/publications/icwsm17_googlewikipedia.pdf',
    display: 'PDF',
  }, {
    to: 'http://www.psacomputing.org/codeanddata/icwsm2017/mcmahonjohnson2017_extension.zip',
    display: 'Chrome Extension Code',
  },{
    to: 'https://drive.google.com/open?id=0B9n3jDBR7l_6c2tPMzNMaE1Fejg',
    display: 'Slides',
  },],
}, {
  bibtex: `@inproceedings{miller2017understanding,
    title={Understanding Emoji Ambiguity in Context: The Role of Text in Emoji-Related Miscommunication.},
    author={Miller, Hannah Jean and Kluver, Daniel and Thebault-Spieker, Jacob and Terveen, Loren G and Hecht, Brent J},
    booktitle={ICWSM},
    pages={152--161},
    year={2017}
  }`,
  links: [{
    to: 'http://brenthecht.com/publications/icwsm17_emojitext.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@inproceedings{wenig2016scrollinghome,
    title={ScrollingHome: bringing image-based indoor navigation to smartwatches},
    author={Wenig, Dirk and Steenbergen, Alexander and Sch{\"o}ning, Johannes and Hecht, Brent and Malaka, Rainer},
    booktitle={Proceedings of the 18th International Conference on Human-Computer Interaction with Mobile Devices and Services},
    pages={400--406},
    year={2016},
    organization={ACM}
  }`,
  links: [{
    to: 'http://www.brenthecht.com/publications/ScrollingHome_MobileHCI_2016.pdf',
    display: 'PDF',
  }],
}, {
  bibtex: `@inproceedings{johnson2016geography,
    title={The geography and importance of localness in geotagged social media},
    author={Johnson, Isaac L and Sengupta, Subhasree and Sch{\"o}ning, Johannes and Hecht, Brent},
    booktitle={Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems},
    pages={515--526},
    year={2016},
    organization={ACM}
  }`,
  links: [{
    to: 'http://www.brenthecht.com/publications/CHI2016_geogoflocalness.pdf',
    display: 'PDF',
  }, {
    to: 'https://github.com/joh12041/chi-2016-localness',
    display: 'Datasets',
  }, {
    to: 'https://drive.google.com/file/d/0B9n3jDBR7l_6SUlrWHhCc3BkNzQ/view?usp=sharing',
    display: 'Slides',
  }],
}, {
  bibtex: `@inproceedings{johnson2016not,
    title={Not at home on the range: Peer production and the urban/rural divide},
    author={Johnson, Isaac L and Lin, Yilun and Li, Toby Jia-Jun and Hall, Andrew and Halfaker, Aaron and Sch{\"o}ning, Johannes and Hecht, Brent},
    booktitle={Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems},
    pages={13--25},
    year={2016},
    organization={ACM}
  }`,
  links: [{
    to: 'http://www.brenthecht.com/publications/CHI2016_ruralurbanpeerproduction.pdf',
    display: 'PDF',
  }, {
    to: 'https://github.com/joh12041/chi-2016-peerproduction-urbanrural',
    display: 'Code',
  },{
    to: 'https://drive.google.com/file/d/0B9n3jDBR7l_6SkMzMEVLT1EtRnM/view',
    display: 'Slides',
  },{
    to: 'http://www-users.cs.umn.edu/~joh12041/UrbanRuralPeerProductionMaps/VGI_Bias_Maps.html',
    display: 'Maps/Demo',
  },],
}, {
  bibtex: `@inproceedings{soll2016helping,
    title={Helping computers understand geographically-bound activity restrictions},
    author={Soll, Marcus and Naumann, Philipp and Sch{\"o}ning, Johannes and Samsonov, Pavel and Hecht, Brent},
    booktitle={Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems},
    pages={2442--2446},
    year={2016},
    organization={ACM}
  }`,
  links: [{
    to: 'http://brenthecht.com/publications/CHI2016_SURdetection.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@article{miller2016blissfully,
    title={Blissfully happy” or “ready to fight”: Varying Interpretations of Emoji},
    author={Miller, Hannah and Thebault-Spieker, Jacob and Chang, Shuo and Johnson, Isaac and Terveen, Loren and Hecht, Brent},
    journal={Proceedings of ICWSM},
    volume={2016},
    year={2016}
  }`,
  links: [{
    to: 'http://www.brenthecht.com/publications/ICWSM2016_emoji.pdf',
    display: 'PDF',
  }, {
    to: 'http://grouplens.org/blog/investigating-the-potential-for-miscommunication-using-emoji/',
    display: 'Blog Post',
  }, {
    to: 'http://www.icwsm.org/2016/datasets/datasets/',
    display: 'Datasets',
  }],
}, {
  bibtex: `@article{hecht2015local,
    title={How Local Is User-Generated Content? A 9,000+-Word Essay on Answering a Five-Word Research Question},
    author={Hecht, Brent and Gergle, Darren},
    journal={Digital Research Confidential: The Secrets of Studying Behavior Online},
    pages={173},
    year={2015},
    publisher={MIT Press}
  }`,
  links: [{
    to: 'https://books.google.com/books?hl=en&lr=&id=fDlkCwAAQBAJ&oi=fnd&pg=PA173&ots=6FncS1WsYW&sig=tXIWRh9UVzXzChwppz-W4MW1x9A#v=onepage&q&f=false',
    display: 'Google Books',
  }, ],
}, {
  bibtex: `@inproceedings{wenig2015stripemaps,
    title={Stripemaps: Improving map-based pedestrian navigation for smartwatches},
    author={Wenig, Dirk and Sch{\"o}ning, Johannes and Hecht, Brent and Malaka, Rainer},
    booktitle={Proceedings of the 17th International Conference on Human-Computer Interaction with Mobile Devices and Services},
    pages={52--62},
    year={2015},
    organization={ACM}
  }`,
  links: [{
    to: 'http://brenthecht.com/publications/MobileHCI_2015_StripeMaps.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@inproceedings{sen2015towards,
    title={Towards Domain-Specific Semantic Relatedness: A Case Study from Geography.},
    author={Sen, Shilad and Johnson, Isaac L and Harper, Rebecca and Mai, Huy and Olsen, Samuel Horlbeck and Mathers, Benjamin and Vonessen, Laura Souza and Wright, Matthew and Hecht, Brent J},
    booktitle={IJCAI},
    pages={2362--2370},
    year={2015}
  }`,
  links: [{
    to: 'http://www.aaai.org/ocs/index.php/IJCAI/IJCAI15/paper/download/11438/10991',
    display: 'PDF (AAAI download link)',
  }, {
    to: 'https://github.com/shilad/geo-sr',
    display: 'GeoSR Dataset',
  }],
}, {
  bibtex: `@inproceedings{warncke2015misalignment,
    title={Misalignment Between Supply and Demand of Quality Content in Peer Production Communities.},
    author={Warncke-Wang, Morten and Ranjan, Vivek and Terveen, Loren G and Hecht, Brent J},
    booktitle={ICWSM},
    pages={493--502},
    year={2015}
  }`,
  links: [{
    to: 'http://brenthecht.com/publications/wikipedia_supplydemandquality_icwsm2015.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@inproceedings{samsonov2015user,
    title={A user interface for encoding space usage rules expressed in natural language},
    author={Samsonov, Pavel Andreevich and Sch{\"o}ning, Johannes and Hecht, Brent},
    booktitle={Proceedings of the 33rd Annual ACM Conference Extended Abstracts on Human Factors in Computing Systems},
    pages={2211--2216},
    year={2015},
    organization={ACM}
  }`,
  links: [{
    to: 'https://dl.acm.org/citation.cfm?id=2732737',
    display: 'PDF (ACM)',
  }, ],
}, {
  bibtex: `@inproceedings{samsonov2015you,
    title={You Can't Smoke Here: Towards Support for Space Usage Rules in Location-aware Technologies},
    author={Samsonov, Pavel Andreevich and Tang, Xun and Sch{\"o}ning, Johannes and Kuhn, Werner and Hecht, Brent},
    booktitle={Proceedings of the 33rd annual ACM conference on human factors in computing systems},
    pages={971--974},
    year={2015},
    organization={ACM}
  }`,
  links: [{
    to: 'http://www.brenthecht.com/publications/bhecht_usagerules_CHI2015.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@article{johnson2015structural,
    title={Structural causes of bias in crowd-derived geographic information: Towards a holistic understanding},
    author={Johnson, Isaac and Hecht, Brent},
    journal={Retrieved September},
    volume={17},
    pages={2016},
    year={2015}
  }`,
  links: [{
    to: 'http://www-users.cs.umn.edu/~joh12041/Publications/StructuralCausesBiases_aaaispring2016.pdf',
    display: 'PDF',
  }, {
    to: 'https://drive.google.com/file/d/0B9n3jDBR7l_6Smh2dzdVbkFtZW8/view?usp=sharing',
    display: 'Slides',
  }],
}, {
  bibtex: `@inproceedings{samsonov2015automatic,
    title={From Automatic Sign Detection To Space Usage Rules Mining For Autonomous Driving},
    author={SAMSONOV, Pavel and Hecht, Brent and Sch{\"o}ning, Johannes},
    year={2015}
  }`,
  links: [{
    to: 'https://uhdspace.uhasselt.be/dspace/bitstream/1942/19049/1/CHI-2015-Automated-Cars-Workshop-Paper.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@inproceedings{sen2015barriers,
    title={Barriers to the localness of volunteered geographic information},
    author={Sen, Shilad W and Ford, Heather and Musicant, David R and Graham, Mark and Keyes, Oliver SB and Hecht, Brent},
    booktitle={Proceedings of the 33rd Annual ACM Conference on Human Factors in Computing Systems},
    pages={197--206},
    year={2015},
    organization={ACM}
  }`,
  links: [{
    to: 'https://ironholds.org/resources/papers/barriers.pdf',
    display: 'PDF',
  }, {
    to: 'https://github.com/shilad/geo-provenance',
    diplay: 'Geoprovenance Algorithm Code',
  }, {
    to: 'https://github.com/shilad/geo-provenance/tree/master/data',
    display: 'Geoprovenance Evaluation Dataset',
  }, {
    to: 'http://shilad.com/localness/index.html',
    display: 'Interactive version of paper',
  }],
}, {
  bibtex: `@inproceedings{thebault2015avoiding,
    title={Avoiding the south side and the suburbs: The geography of mobile crowdsourcing markets},
    author={Thebault-Spieker, Jacob and Terveen, Loren G and Hecht, Brent},
    booktitle={Proceedings of the 18th ACM Conference on Computer Supported Cooperative Work \& Social Computing},
    pages={265--275},
    year={2015},
    organization={ACM}
  }`,
  links: [{
    to: 'http://brenthecht.com/publications/MobileCrowdsourcingSES_CSCW2015.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@inproceedings{sen2015turkers,
    title={Turkers, scholars, arafat and peace: Cultural communities and algorithmic gold standards},
    author={Sen, Shilad and Giesel, Margaret E and Gold, Rebecca and Hillmann, Benjamin and Lesicko, Matt and Naden, Samuel and Russell, Jesse and Wang, Zixiao Ken and Hecht, Brent},
    booktitle={Proceedings of the 18th ACM Conference on Computer Supported Cooperative Work \& Social Computing},
    pages={826--838},
    year={2015},
    organization={ACM}
  }`,
  links: [{
    to: 'http://www.brenthecht.com/publications/goldstandards_CSCW2015.pdf',
    display: 'PDF',
  }, {
    to: 'https://github.com/shilad/group-sr/tree/master/pluraSR200',
    display: 'PluraSR200 Dataset',
  }, {
    to: 'http://wikibrainapi.org/',
    display: 'SR Library',
  }]
}, {
  bibtex: `@inproceedings{warncke2015success,
    title={The success and failure of quality improvement projects in peer production communities},
    author={Warncke-Wang, Morten and Ayukaev, Vladislav R and Hecht, Brent and Terveen, Loren G},
    booktitle={Proceedings of the 18th ACM Conference on Computer Supported Cooperative Work \& Social Computing},
    pages={743--756},
    year={2015},
    organization={ACM}
  }`,
  links: [{
    to: 'http://www.brenthecht.com/publications/qualityimprovement_cscw2015.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@article{hecht2014tale,
    title={A Tale of Cities: Urban Biases in Volunteered Geographic Information.},
    author={Hecht, Brent J and Stephens, Monica},
    journal={ICWSM},
    volume={14},
    pages={197--205},
    year={2014}
  }`,
  links: [{
    to: 'http://brenthecht.com/publications/bhecht_icwsm2014_ruralurban.pdf',
    display: 'PDF',
  }, {
    to: 'http://crowdresearch.org/blog/?p=8631',
    display: 'Blog Post',
  }],
}, {
  bibtex: `@inproceedings{hecht2014crash,
    title={A crash course in modern geography for HCI researchers and practitioners},
    author={Hecht, Brent and Shamma, David A},
    booktitle={CHI'14 Extended Abstracts on Human Factors in Computing Systems},
    pages={1031--1032},
    year={2014},
    organization={ACM}
  }`,
  links: [{
    to: 'http://dl.acm.org/citation.cfm?id=2567824',
    display: 'PDF (ACM)',
  }, ],
}, {
  bibtex: `@inproceedings{gao2014newsviews,
    title={NewsViews: an automated pipeline for creating custom geovisualizations for news},
    author={Gao, Tong and Hullman, Jessica R and Adar, Eytan and Hecht, Brent and Diakopoulos, Nicholas},
    booktitle={Proceedings of the 32nd annual ACM conference on Human Factors in Computing Systems},
    pages={3005--3014},
    year={2014},
    organization={ACM}
  }`,
  links: [{
    to: 'http://www.nickdiakopoulos.com/wp-content/uploads/2011/07/NewsViews_20140112_CR.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@inproceedings{sen2014wikibrain,
    title={Wikibrain: democratizing computation on wikipedia},
    author={Sen, Shilad and Li, Toby Jia-Jun and Team, WikiBrain and Hecht, Brent},
    booktitle={Proceedings of The International Symposium on Open Collaboration},
    pages={27},
    year={2014},
    organization={ACM}
  }`,
  links: [{
    to: 'http://brenthecht.com/publications/WikiBrain-WikiSym2014.pdf',
    display: 'PDF',
  }, {
    to: 'http://www.wikibrainapi.org/',
    display: 'API Website',
  }],
}, {
  bibtex: `@inproceedings{oeldorf2014search,
    title={To search or to ask: the routing of information needs between traditional search engines and social networks},
    author={Oeldorf-Hirsch, Anne and Hecht, Brent and Morris, Meredith Ringel and Teevan, Jaime and Gergle, Darren},
    booktitle={Proceedings of the 17th ACM conference on Computer supported cooperative work \& social computing},
    pages={16--27},
    year={2014},
    organization={ACM}
  }`,
  links: [{
    to: 'http://www.brenthecht.com/publications/cscw2014_statusmessageqavssearch.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@inproceedings{stockx2014subwayps,
    title={SubwayPS: towards smartphone positioning in underground public transportation systems},
    author={Stockx, Thomas and Hecht, Brent and Sch{\"o}ning, Johannes},
    booktitle={Proceedings of the 22nd ACM SIGSPATIAL International Conference on Advances in Geographic Information Systems},
    pages={93--102},
    year={2014},
    organization={ACM}
  }`,
  links: [{
    to: 'https://pdfs.semanticscholar.org/9c2d/60bfcc6ee509fdefae9b737268a63f6d1e73.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@inproceedings{li2014leveraging,
    title={Leveraging advances in natural language processing to better understand Tobler's first law of geography},
    author={Li, Toby Jia-Jun and Sen, Shilad and Hecht, Brent},
    booktitle={Proceedings of the 22nd ACM SIGSPATIAL International Conference on Advances in Geographic Information Systems},
    pages={513--516},
    year={2014},
    organization={ACM}
  }`,
  links: [{
    to: 'http://brenthecht.com/publications/bhecht_sigspatial2014_toblerslaw.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@inproceedings{wang2014designing,
    title={Designing Better Location Fields in User Profiles},
    author={Wang, Ting-Yu and Harper, F Maxwell and Hecht, Brent},
    booktitle={Proceedings of the 18th International Conference on Supporting Group Work},
    pages={73--80},
    year={2014},
    organization={ACM}
  }`,
  links: [{
    to: 'http://brenthecht.com/publications/bhecht_group2014_locationfield.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@inproceedings{schoning2014informing,
    title={Informing online and mobile map design with the collective wisdom of cartographers},
    author={Sch{\"o}ning, Johannes and Hecht, Brent and Kuhn, Werner},
    booktitle={Proceedings of the 2014 conference on Designing interactive systems},
    pages={765--774},
    year={2014},
    organization={ACM}
  }`,
  links: [{
    to: 'http://brenthecht.com/publications/bhecht_dis2014_localcartography.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@inproceedings{ackerman2013social,
    title={Social media question asking workshop},
    author={Ackerman, Mark and Adamic, Lada and Ellison, Nicole and Gergle, Darren and Hecht, Brent and Lampe, Cliff and Morris, Meredith Ringel and Teevan, Jaime},
    booktitle={Proceedings of the 2013 conference on Computer supported cooperative work companion},
    pages={297--298},
    year={2013},
    organization={ACM}
  }`,
  links: [{
    to: 'https://dl.acm.org/citation.cfm?id=2442027',
    display: 'PDF (ACM)',
  }, ],
}, {
  bibtex: `@phdthesis{hecht2013mining,
    title={The mining and application of diverse cultural perspectives in user-generated content},
    author={Hecht, Brent Jaron},
    year={2013},
    school={Northwestern University}
  }`,
  links: [{
    to: 'https://dl.acm.org/citation.cfm?id=2519359',
    display: 'PDF (ACM)',
  }, ],
}, {
  bibtex: `@inproceedings{hecht2012explanatory,
    title={Explanatory semantic relatedness and explicit spatialization for exploratory search},
    author={Hecht, Brent and Carton, Samuel H and Quaderi, Mahmood and Sch{\"o}ning, Johannes and Raubal, Martin and Gergle, Darren and Downey, Doug},
    booktitle={Proceedings of the 35th international ACM SIGIR conference on Research and development in information retrieval},
    pages={415--424},
    year={2012},
    organization={ACM}
  }`,
  links: [{
    to: 'http://dgergle.soc.northwestern.edu/resources/HechtEtAl_ExplicitSpatialization-Atlasify_SIGIR2012.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@article{hecht2012searchbuddies,
    title={SearchBuddies: Bringing Search Engines into the Conversation.},
    author={Hecht, Brent J and Teevan, Jaime and Morris, Meredith Ringel and Liebling, Daniel J},
    journal={ICWSM},
    volume={12},
    number={138-145},
    pages={2},
    year={2012}
  }`,
  links: [{
    to: 'http://brenthecht.com/publications/bhecht_icwsm2012_searchbuddies.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@inproceedings{bao2012omnipedia,
    title={Omnipedia: bridging the wikipedia language gap},
    author={Bao, Patti and Hecht, Brent and Carton, Samuel and Quaderi, Mahmood and Horn, Michael and Gergle, Darren},
    booktitle={Proceedings of the SIGCHI Conference on Human Factors in Computing Systems},
    pages={1075--1084},
    year={2012},
    organization={ACM}
  }`,
  links: [{
    to: 'http://brenthecht.com/papers/bhecht_CHI2012_omnipedia.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@inproceedings{bohmer2011falling,
    title={Falling asleep with Angry Birds, Facebook and Kindle: a large scale study on mobile application usage},
    author={B{\"o}hmer, Matthias and Hecht, Brent and Sch{\"o}ning, Johannes and Kr{\"u}ger, Antonio and Bauer, Gernot},
    booktitle={Proceedings of the 13th international conference on Human computer interaction with mobile devices and services},
    pages={47--56},
    year={2011},
    organization={ACM}
  }`,
  links: [{
    to: 'http://www.brenthecht.com/publications/bhecht_mobilehci2011_sleepbirds.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@misc{morris2011designating,
    title={Designating automated agents as friends in a social network service},
    author={Morris, Meredith J and Teevan, Jaime and Hecht, Brent and Liebling, Daniel J},
    year={2011},
    month=jun # "~17",
    publisher={Google Patents},
    note={US Patent App. 13/162,608}
  }`,
  links: [{
    to: 'https://www.google.com/patents/US20110252108',
    display: 'Google Patents',
  }, ],
  type: 'patent',
}, {
  bibtex: `@inproceedings{hecht2011geographic,
    title={Geographic human-computer interaction},
    author={Hecht, Brent and Sch{\"o}ning, Johannes and Erickson, Thomas and Priedhorsky, Reid},
    booktitle={CHI'11 Extended Abstracts on Human Factors in Computing Systems},
    pages={447--450},
    year={2011},
    organization={ACM}
  }`,
  links: [{
    to: 'http://www.brenthecht.com/papers/bhecht_geohci2013.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@inproceedings{hecht2011tweets,
    title={Tweets from Justin Bieber's heart: the dynamics of the location field in user profiles},
    author={Hecht, Brent and Hong, Lichan and Suh, Bongwon and Chi, Ed H},
    booktitle={Proceedings of the SIGCHI conference on human factors in computing systems},
    pages={237--246},
    year={2011},
    organization={ACM}
  }`,
  links: [{
    to: 'http://www.brenthecht.com/publications/bhecht_chi2011_location.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@article{hecht2011beginner,
    title={A beginner’s guide to geographic virtual communities research},
    author={Hecht, Brent and Gergle, Darren},
    journal={IGI Global},
    year={2011}
  }`,
  links: [{
    to: 'http://www.brenthecht.com/papers/bhecht_GeographicalVCResearch_preprint.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@inproceedings{hecht2010tower,
    title={The tower of Babel meets web 2.0: user-generated content and its applications in a multilingual context},
    author={Hecht, Brent and Gergle, Darren},
    booktitle={Proceedings of the SIGCHI conference on human factors in computing systems},
    pages={291--300},
    year={2010},
    organization={ACM}
  }`,
  links: [{
    to: 'http://brenthecht.com/publications/bhecht_chi2010_towerofbabel.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@inproceedings{hecht2010localness,
    title={On the localness of user-generated content},
    author={Hecht, Brent J and Gergle, Darren},
    booktitle={Proceedings of the 2010 ACM conference on Computer supported cooperative work},
    pages={229--232},
    year={2010},
    organization={ACM}
  }`,
  links: [{
    to: 'http://brenthecht.com/papers/bhecht_cscw2010_localness.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@inproceedings{hecht2009measuring,
    title={Measuring self-focus bias in community-maintained knowledge repositories},
    author={Hecht, Brent and Gergle, Darren},
    booktitle={Proceedings of the fourth international conference on Communities and technologies},
    pages={11--20},
    year={2009},
    organization={ACM}
  }`,
  links: [{
    to: 'http://www.brenthecht.com/papers/bhecht_CandT2009_selffocusbias.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@article{hecht2009terabytes,
    title={Terabytes of Tobler: evaluating the first law in a massive, domain-neutral representation of world knowledge},
    author={Hecht, Brent and Moxley, Emily},
    journal={Spatial information theory},
    pages={88--105},
    year={2009},
    publisher={Springer}
  }`,
  links: [{
    to: 'http://brenthecht.com/papers/cosit2009.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@inproceedings{schoning2008evaluating,
    title={Evaluating automatically generated location-based stories for tourists},
    author={Sch{\"o}ning, Johannes and Hecht, Brent and Starosielski, Nicole},
    booktitle={CHI'08 extended abstracts on Human factors in computing systems},
    pages={2937--2942},
    year={2008},
    organization={ACM}
  }`,
  links: [{
    to: 'https://dl.acm.org/citation.cfm?id=1358787',
    display: 'PDF (ACM)',
  }, ],
}, {
  bibtex: `@inproceedings{schoning2008improving,
    title={Improving interaction with virtual globes through spatial thinking: helping users ask why?},
    author={Sch{\"o}ning, Johannes and Hecht, Brent and Raubal, Martin and Kr{\"u}ger, Antonio and Marsh, Meredith and Rohs, Michael},
    booktitle={Proceedings of the 13th international conference on Intelligent user interfaces},
    pages={129--138},
    year={2008},
    organization={ACM}
  }`,
  links: [{
    to: 'http://brenthecht.com/papers/iui2008.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@article{hecht2008mapping,
    title={Mapping the zeitgeist},
    author={Hecht, Brent and Sch{\"o}ning, Johannes},
    journal={GIScience’08 (Extended Abstracts)},
    year={2008}
  }`,
  links: [{
    to: 'http://brenthecht.com/papers/giscience2008.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@article{hecht2008geosr,
    title={GeoSR: Geographically explore semantic relations in world knowledge},
    author={Hecht, Brent and Raubal, Martin},
    journal={The European Information Society},
    pages={95--113},
    year={2008},
    publisher={Springer}
  }`,
  links: [{
    to: 'http://www.brenthecht.com/papers/agile2008.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@article{schoning2007wikear,
    title={WikEar--Automatically generated location-based audio stories between public city maps},
    author={Sch{\"o}ning, Johannes and Hecht, Brent and Rohs, Michael and Starosielski, Nicole and others},
    journal={adjunct Proc. of Ubicomp’07},
    pages={128--131},
    year={2007}
  }`,
  links: [{
    to: 'http://www.brenthecht.com/publications/bhecht_ubicomp2007_wikear.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@inproceedings{hecht2007wikeye,
    title={Wikeye--using magic lenses to explore georeferenced Wikipedia content},
    author={Hecht, Brent and Rohs, Michael and Sch{\"o}ning, Johannes and Kr{\"u}ger, Antonio},
    booktitle={Proceedings of the 3rd International Workshop on Pervasive Mobile Interaction Devices (PERMID)},
    year={2007}
  }`,
  links: [{
    to: 'http://brenthecht.com/papers/bhecht_permid2007_wikeye.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@misc{hecht2007wikipedia,
    title={Wikipedia volunteered geographic information},
    author={Hecht, Brent},
    year={2007}
  }`,
  links: [{
    to: 'http://www.ncgia.ucsb.edu/projects/vgi/docs/position/Hecht_paper.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@inproceedings{hecht2007minotour,
    title={Minotour: A location-aware mobile tour application that weaves a spatial tale from wikipedia},
    author={Hecht, B and Dara-Abrams, D and Starosielski, N and Goldsberry, K and Dillemuth, J and Roberts, J and Clarke, K},
    booktitle={Proceedings of the 2007 Meeting of The AAG},
    year={2007}
  }`,
  links: [{
    to: '',
    display: '',
  }, ],
}, {
  bibtex: `@phdthesis{hecht2007utilizing,
    title={Utilizing Wikipedia as a Spatiotemporal Knowledge Repository},
    author={Hecht, Brent Jaron},
    year={2007},
    school={University of California, Santa Barbara}
  }`,
  links: [{
    to: '',
    display: '',
  }, ],
}, {
  bibtex: `@inproceedings{hecht2007generating,
    title={Generating educational tourism narratives from wikipedia},
    author={Hecht, Brent and Starosielski, Nicole and Dara-Abrams, Drew},
    booktitle={Association for the Advancement of Artificial Intelligence Fall Symposium on Intelligent Narrative Technologies (AAAI-INT'07)},
    pages={37--44},
    year={2007}
  }`,
  links: [{
    to: 'http://www.brenthecht.com/papers/bhecht_aaaiint2007_narrative.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@inproceedings{rohs2007towards,
    title={Towards real-time markerless tracking of magic lenses on paper maps},
    author={Rohs, Michael and Sch{\"o}ning, Johannes and Kr{\"u}ger, Antonio and Hecht, Brent},
    booktitle={Adjunct Proceedings of the 5th Intl. Conference on Pervasive Computing (Pervasive), Late Breaking Results},
    year={2007}
  }`,
  links: [{
    to: 'http://www.brenthecht.com/publications/bhecht_pervasive2007_markerless.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@article{hechtrole,
    title={The Role of Human Geography in Collective Intelligence},
    author={HECHT, BRENT and TERVEEN, LOREN}
  }`,
  links: [{
    to: 'http://www.brenthecht.com/publications/ci2017_humangeography.pdf',
    display: 'PDF',
  }, ],
}, {
  bibtex: `@article{klein2017quality,
    title={Quality Standards, Service Orientation, and Power in Airbnb and Couchsurfing},
    author={KLEIN, MAXIMILIAN and ZHAO, JINHAO and NI, JIAJUN and JOHNSON, ISAAC and HILL, BENJAMIN MAKO and ZHU, HAIYI},
    year={2017}
  }`,
  links: [{
    to: 'http://www-users.cs.umn.edu/~joh12041/Publications/MoneyAndTheSharingEconomy.pdf',
    display: 'Preprint PDF',
  }, ],
}];

const fs = require('fs');

const data = {
  faculty,
  gradStudents,
  undergradStudents,
  collaborators,
  about,
  news,
  projects,
  opportunitiesText,
};

fs.writeFile("data.json", JSON.stringify(data), function (err) {
  if (err) {
    return console.log(err);
  }

  console.log("Data file was saved!");
});


fs.writeFile("publications.json", JSON.stringify(publications), function (err) {
  if (err) {
    return console.log(err);
  }

  console.log("Publications file was saved!");
});