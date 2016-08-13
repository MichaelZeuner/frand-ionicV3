'Use Strict';
angular.module('App', ['ionic','ngStorage', 'ngCordova','firebase','ngMessages','ngOpenFB'])
.config(function($stateProvider, $urlRouterProvider) {
$stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'views/login/login.html',
      controller:'loginController'
    })
    .state('forgot', {
      url: '/forgot',
      templateUrl: 'views/forgot/forgot.html',
      controller:'forgotController'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/register/register.html',
      controller:'registerController'
    })

    .state('home', {
      url: '/home',
      templateUrl: 'views/home/home.html',
      controller:'homeController'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'views/profile/profile.html',
      controller:'profileController'
    })
//woooooooooooooooooooooooooooooow

  .state('menu.frands', {
    url: '/frands',
    views: {
      'side-menu21': {
        templateUrl: 'views/frands.html',
        controller: 'frandsCtrl'
      }
    }
  })

  .state('menu.profile', {
    url: '/profile',
    views: {
      'side-menu21': {
        templateUrl: 'views/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'views/menu.html',
    abstract:true,

  })

  .state('menu.currentFrands', {
    url: '/active',
    views: {
      'side-menu21': {
        templateUrl: 'views/currentFrands.html',
        controller: 'currentFrandsCtrl'
      }
    }
  })

  .state('menu.frandHistory', {
    url: '/history',
    views: {
      'side-menu21': {
        templateUrl: 'views/frandHistory.html',
        controller: 'frandHistoryCtrl'
      }
    }
  })

  .state('menu.settings', {
    url: '/settings',
    views: {
      'side-menu21': {
        templateUrl: 'views/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })
  //endddddddddd
    ;
$urlRouterProvider.otherwise("/login");
})
// Changue this for your Firebase App URL.
.constant('FURL', {
    apiKey: "AIzaSyA0VeyypLeoi-qGj7pL-vzcLLLcAcs46ZM",
    authDomain: "frand-ionic.firebaseapp.com",
    databaseURL: "https://frand-ionic.firebaseio.com",
    storageBucket: "frand-ionic.appspot.com",
  }
  )

.run(function($ionicPlatform,ngFB) {
  ngFB.init({appId: '640206552794953'});
  $ionicPlatform.ready(function(FURL) {
    // AdMob
            if(window.AdMob) {
                var admobid;

                if (device.platform == "Android") {
                    admobid = { // for Android
                        banner: 'ca-app-pub-8943241156434100/4304279677',
                        interstitial: 'ca-app-pub-8943241156434100/3994725276'
                    };
                } else {
                    admobid = { // for iOS
                        banner: 'ca-app-pub-8943241156434100/7257746078',
                        interstitial: 'ca-app-pub-8943241156434100/2378391279'
                    };
                }
                console.log("admobid" + angular.toJson(admobid));

                $adMob.createBanner( {
                    adId: admobid.banner,
                    autoShow: true,
                    bgColor: 'black',
                    position: $adMob.position.BOTTOM_CENTER
                });

                $adMob.prepareInterstitial({
                    adId: admobid.interstitial,
                    autoShow: false
                });
            }
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
