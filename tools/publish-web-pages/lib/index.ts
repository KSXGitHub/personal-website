import process from 'process'
import places from '@tools/places'

export async function main() {
  process.chdir(places.project)
  console.info('Publishing website...')
}

export default main
