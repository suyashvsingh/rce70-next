export type Boilerplate = {
  python: string
  javascript: string
  cpp: string
  c: string
  java: string
}

export type Language = {
  value: keyof Boilerplate
  label: string
}
