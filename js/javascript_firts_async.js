function load_style(url) {
    var e = document.createElement("link");
    e.setAttribute("rel","stylesheet");
    e.setAttribute("property","stylesheet");
    e.setAttribute("media","screen");
    e.href = url;
    document.body.appendChild(e);
}
window.onload = function () {
    load_style('css/styles.css');
    load_style('font-awesome-4.7.0/css/font-awesome.min.css');
};