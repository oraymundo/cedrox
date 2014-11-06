var app = angular.module('cedroxNest',['ui.router','jmeterLove']);
//var app = angular.module('cedroxNest',['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
    //s$urlRouterProvider.otherwise('/root');
    $stateProvider
        .state('root', {
            url: '',
            views:{
            	'header':{
            		templateUrl: 'header.html'
            	},
            	'footer':{
            		templateUrl: 'footer.html'
            	},
                'container@':{
                    templateUrl: 'home.html'
                }
            }
        })
        .state('root.home', {
            url: '/home',
            views:{
                'container@':{
                    templateUrl: 'home.html'
                }
            }
        })
        .state('root.team', {
            url: '/team',
            views:{
            	'container@':{
            		templateUrl: 'team.html'
            	}
            }
        })
        .state('root.projects', {
            url: '/projects',
            views:{
            	'container@':{
            		templateUrl: 'portafolio.html'
            	}
            }
        })
        .state('root.services', {
            url: '/services',
            views:{
            	'container@':{
            		templateUrl: 'services.html'
            	}
            }
        })
        .state('root.news', {
            url: '/news',
            views:{
            	'container@':{
            		templateUrl: 'news.html'
            	}
            }
        })
        .state('root.contact', {
            url: '/contact',
            views:{
                'container@':{
                    templateUrl: 'contact.html'
                }
            }
        })
        .state('root.jmeterLove', {
            url: '/jmeterLove',
            views:{
                'container@':{templateUrl: 'jmeterLove.html'}
               // 'reader@':{
                    //  controller: 'csvreader-ng'
               // },
               // 'uploader@':{
                     // controller: 'AppController'
               // }
            }
        })
     })


