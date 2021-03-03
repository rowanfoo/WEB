export function fngetcodeonly(code: string): string {

  if (code.indexOf('.') > 0) {
    code.substring(0, code.indexOf('.')).toUpperCase()
  } else {
    return code.toUpperCase()
  }
}

