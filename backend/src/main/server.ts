import 'module-alias/register'
import { createConnections } from 'typeorm'

createConnections()
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(5050, () => console.log('Server running at 5050'))
  })
  .catch(console.error)
