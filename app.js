const Koa = require('koa2')
const app = new Koa()
const child_process = require('child_process');
const process = require('process')
const Router = require('koa-router')

const router = new Router()
let task = null
router.get('/', (ctx, next) => {
  if (!task) {
    console.log('no task')
    task = child_process.fork('task.js')
  } else {
    console.log(task.pid)
    process.kill(task.pid)
    task = child_process.fork('task.js')
  }
  ctx.body = 'task started'
})

app.use(router.routes())


app.listen(3004, () => {
  console.log('app is listenning')
})