/* Your Code Here */
/*
We're giving you this function. Take a look at it, you might see some usage
that's new and different. That's because we're avoiding a well-known, but
sneaky bug that we'll cover in the next few lessons!

As a result, the lessons for this function will pass *and* it will be available
for you to use if you need it!
*/

function createEmployeeRecord(array) {
    let employeeObject = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeObject
}

function createEmployeeRecords(records) {
    return records.map(rec => createEmployeeRecord(rec))
}

function createTimeInEvent(timeStamp) {
    const [date, hour] = timeStamp.split(" ");
    const inEvent = {
        type: "TimeIn",
        date: date,
        hour: parseInt(hour)
    }
    this.timeInEvents.push(inEvent)
    return this
}

function createTimeOutEvent(timeStamp) {
    const [date, hour] = timeStamp.split(" ");
    const outEvent = {
        type: "TimeOut",
        date: date,
        hour: parseInt(hour)
    }
    this.timeOutEvents.push(outEvent)
    return this
}

function hoursWorkedOnDate(date) {
    const inEvent = this.timeInEvents.find(inEvent => inEvent.date === date)
    const outEvent = this.timeOutEvents.find(outEvent => outEvent.date === date)
    return (outEvent.hour - inEvent.hour) / 100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function findEmployeeByFirstName(source, firstName) {
    return source.find(rec => rec.firstName === firstName)
}

function calculatePayroll(records) {
    return records.reduce((total, rec) => {
        return total + allWagesFor.call(rec)
    }, 0)
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

