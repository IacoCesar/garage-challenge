import Server from './app'

const port = parseInt(process.env.APP_PORT as string) || 3000

if (process.env.NODE_ENV !== 'test') Server.listen(port)

export default Server
