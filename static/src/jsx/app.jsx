require.config({
    baseUrl: '/dist/js/',
    paths: {
        'jquery': '/bower/jQuery/dist/jquery.min',
        'react': '/bower/react/react',
        'react-router': '/bower/react-router/dist/react-router',
        'react-bootstrap': '/bower/react-bootstrap'
    },
    shim: {
        'react': {
          exports: 'React'
        },
        'react-router': {
          deps: ['react']
        },
        'react-bootstrap': {
          deps: ['react']
        }
    }
});

// app start
require(['react', './dist/js/Navigation/Navigation.js'], function(React, Navigation) {
  // render Navigation
  React.render(<Navigation />, $('#main-wrapper').get(0));
});