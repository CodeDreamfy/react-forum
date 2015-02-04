require.config({
    baseUrl: '/dist',
    paths: {
        'jquery': '/bower/jQuery/dist/jquery.min',
        'react': '/bower/react/react',
        'react-bootstrap': '/bower/react-bootstrap'
    }
});

require(['react', './dist/Navbar/Navbar.js'], function(React, Navbar) {
  React.render(Navbar, document.getElementById('demo'));
});