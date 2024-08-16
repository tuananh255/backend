// gọi trong app
import user from './userRoute'
import Home from './HomeRoute'

import bannerHome from './bannerHomeRoute'
import we from './weHomeRoute'
import dacdiemHomeRoute from './dacdiemHomeRoute'
import feedbackHomeRoute from './feedbackHomeRoute'
import CtaHomeRoute from './CtaHomeRoute'
import newsHomeRoute from './newsHomeRoute'

import serviceRouter from './serviceRouter'
import nhansuRoute from './nhansuRoute'
import { notFound } from '../middewares/handleError'
const initRoutes=(app)=>{
    app.use('/api/v1/auth',user)
    app.use('/api/v1/home',Home)

    app.use('/api/v1/bannerhome',bannerHome)
    app.use('/api/v1/we',we)
    app.use('/api/v1/dacdiem',dacdiemHomeRoute)
    app.use('/api/v1/cta',CtaHomeRoute)
    app.use('/api/v1/feedback',feedbackHomeRoute)
    app.use('/api/v1/news',newsHomeRoute)

    app.use('/api/v1/service',serviceRouter)
    app.use('/api/v1/nhansu',nhansuRoute)

    // gọi request không hợp lệ ,
    app.use(notFound)
}



module.exports = initRoutes