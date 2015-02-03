// routes
var Router = require('koa-router');
var router = new Router();

// topics
router.get('/topics', function *(next){
    this.body = 'topics';
    yield next;
});
router.get('/topic/:ids', function *(next){
    this.body = 'topic';
    yield next;
});
router.get('/', function *(next){
    this.body = 'welcome';
    yield next;
});

module.exports = router;