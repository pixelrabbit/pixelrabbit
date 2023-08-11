export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export function printAttributes(attrObj: { key: string; val: string }) {
  let attrString:string = ``;
  for (const key in attrObj){
    attrString = ` ${key}="${attrObj[key]}"`
  }
  return attrString;
}