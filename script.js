/* Shapes */

var svgContainer = document.getElementById('svgContainer');
var pathPrefix = document.documentElement.getAttribute('data-path') || '';

bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: svgContainer.getAttribute('data-type') || 'svg',
    loop: true,
    path: pathPrefix + 'data.json'
});
