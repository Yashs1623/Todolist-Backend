module.exports.getCurrentDay = getCurrentDay;

function getCurrentDay(){
    var today = new Date();
    var options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    }
    var day = today.toLocaleDateString("en-IN", options);
    return day;
}