import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { AppRoutes } from './App'

export function renderRoute(path: string) {
  return renderToString(
    <StaticRouter location={path}>
      <AppRoutes />
    </StaticRouter>,
  )
}
