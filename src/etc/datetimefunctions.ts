export function getHtmlBasePath(): String {
  return 'hello world'
}

import * as moment from "moment";


export function fncurrent(): String {
  let currentDate = moment();
  return currentDate.format('YYYY-MM-DD')
}

export function fnthisweek(): [string, string] {
  let currentDate = moment();
  let weekStart = moment().startOf('isoWeek');
  let weekEnd = moment().startOf('isoWeek').day(6)
  let enddate: string

  if (currentDate.day() == 7 || currentDate.day() == 0) {
    enddate = weekEnd.format('YYYY-MM-DD')
  } else {
    enddate = currentDate.format('YYYY-MM-DD')
  }
  return [weekStart.format('YYYY-MM-DD'), enddate]
}

export function fnlastweek(): [string, string] {

  let lastweekfirstday = moment().week(moment().week() - 1).day(1)
  let lastweeklastday = moment().week(moment().week() - 1).day(5)
  return [lastweekfirstday.format('YYYY-MM-DD'), lastweeklastday.format('YYYY-MM-DD')]
}


export function fnlasttwoweek(): [string, string] {

  let lastweekfirstday = moment().week(moment().week() - 2).day(1)
  let lastweeklastday = moment().week(moment().week() - 2).day(5)
  return [lastweekfirstday.format('YYYY-MM-DD'), lastweeklastday.format('YYYY-MM-DD')]
}


// let firstweekEnd = moment().week(moment().week() - 1)
// let twoweekEnd = moment().week(moment().week() - 2)

