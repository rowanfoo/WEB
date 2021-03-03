export function fngetClosePrice(data: []): any [] {
  let seriesOptions = [];

  data.forEach(value => {
    seriesOptions.push([
      value[0], value[4]
    ]);
  });

  return seriesOptions

}
