// routes.js
const
    Router = require('koa-router');
    router = new Router();

router.get('/', function *(next){
    this.body = 'welcome';
    yield next;
});
// topics
router.get('/topics', function *(next){
    this.body = 'topics';
    yield next;
});
router.get('/topic/:ids', function *(next){
    this.body = 'topic';
    yield next;
});

module.exports = router;