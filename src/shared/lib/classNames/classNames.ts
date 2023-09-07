import { type Theme } from 'app/providers/ThemeProvider'

type Mods = Record<string, boolean | string | undefined>

const obj: Mods = {}

export function classNames (cls: string, mods?: Mods, additional?: string[]): string {
  const classNamesArray: string[] = [cls]

  if (additional !== undefined) {
    classNamesArray.push(...additional.filter(Boolean))
  }

  if (mods !== undefined) {
    classNamesArray.push(
      ...Object.entries(mods)
        .filter(([className, value]) => Boolean(value))
        .map(([className]) => className)
    )
  }

  return classNamesArray.join(' ')
}
