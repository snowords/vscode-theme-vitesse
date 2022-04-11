import { promises as fs } from 'fs'
import getTheme from './theme'

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeFile(
      './themes/snoword-light.json',
      `${JSON.stringify(getTheme({
        style: 'light',
        name: 'Snoword Light',
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/snoword-dark.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: 'Snoword Dark',
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/snoword-light-soft.json',
      `${JSON.stringify(getTheme({
        style: 'light',
        name: 'Snoword Light Soft',
        soft: true,
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/snoword-dark-soft.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: 'Snoword Dark Soft',
        soft: true,
      }), null, 2)}\n`,
    ),
  ]))
  .catch(() => process.exit(1))
