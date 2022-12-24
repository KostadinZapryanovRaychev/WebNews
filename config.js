function dateFormatter(date) {
    if (date == undefined) {
      date = '2099-11-29T08:00:29.722Z'
    }
    let dateObj = new Date(date)
    return new Intl.DateTimeFormat('en-US').format(dateObj)
  }


  module.exports = {dateFormatter}