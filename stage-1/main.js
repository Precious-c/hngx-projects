let date = new Date()
document.getElementById('day').innerText = getWeekday()
document.getElementById('time').innerText = date.getTime()
    

function getWeekday() {
    const options = {weekday: 'long'};
    weekDay = date.toLocaleDateString('en-US', options)
    return weekDay
}