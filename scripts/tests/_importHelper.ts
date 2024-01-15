import * as fs from 'fs/promises'
import * as path from 'path'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function importLatestModule(modulePath: string): Promise<any | undefined>  {
  const root = path.resolve(__dirname, '../..')
  const src = path.resolve(root, 'src')

  const days = await fs.readdir(src)
  const lastDay = days[days.length - 1]

  const fullModulePath = await import(path.resolve(src, lastDay, `${modulePath}.ts`))
  return fullModulePath
}