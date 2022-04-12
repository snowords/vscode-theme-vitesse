import { promises as fs } from 'fs'
import getTheme from './theme'

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeFile(
      './themes/vitesse-light-snoword.json',
      `${JSON.stringify(getTheme({
        style: 'light',
        name: 'Vitesse Light Snoword',
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/vitesse-dark-snoword.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: 'Vitesse Dark Snoword',
      }), null, 2)}\n`,
    ),
  ]))
  .catch(() => process.exit(1))
