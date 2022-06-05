//bai1
var score = function getRandomMark(start, end, step) {

    var num = start
    var arr = []
    arr.push(num)
    while (num <= (end - step)) {
        num += step
        arr.push(num)
    }
    var index = Math.floor(Math.random() * (arr.length))


    return (arr[index])
}
//bai2
var generateStudentMark = function generateStudentMark(name) {

    var student = {
        name: name,
        marks: {
            literature: score(6, 10, 0.5),
            maths: score(6, 10, 0.5),
            chemistry: score(6, 10, 0.5),
            history: score(6, 10, 0.5),
            biology: score(6, 10, 0.5)
        }
    }
    return student
}
// bai3
var generateStudentsMarkList = function generateStudentsMarkList(nameArr) {
    var studentArr = []
    for (let i = 0; i < nameArr.length; i++) {
        var student = {
            name: nameArr[i],
            marks: {
                literature: score(6, 10
                    , 0.5),
                maths: score(6, 10
                    , 0.5),
                chemistry: score(6, 10
                    , 0.5),
                history: score(6, 10
                    , 0.5),
                biology: score(6, 10
                    , 0.5)
            }
        }
        studentArr.push(student)

    }
    return studentArr
}
// global var
var markList = ["Chi", "Duc", "Huy"]

var students = generateStudentsMarkList(markList)
// console.log(students)
//bai4
var findAvgScore = function findAvgScore(students) {
    var avgScoreObj = {}, doubleScoreArr = ["maths", "literature"], sumMark = 0
    var len = Object.keys(students[0]["marks"]).length + doubleScoreArr.length
    for (let i = 0; i < students.length; i++) {

        var markObj = students[i]["marks"]
        // create a 2-d arr
        var entries = Object.entries(markObj)
        // calculate sum mark
        for (let j = 0; j < entries.length; j++) {
            // double some score
            if (doubleScoreArr.includes(entries[j][0])) {
                entries[j][1] *= 2
            }

            sumMark += entries[j][1]
        }
        var avgScore = (sumMark / len).toFixed(2)
        avgScoreObj[students[i]["name"]] = avgScore

        sumMark = 0


    }
    return avgScoreObj

}
// console.log(findAvgScore(students))
// bai5
var findStudentOver8 = function findStudentOver8() {
    var studenOver8Obj = {}
    var studentAvgscoreObj = findAvgScore(students)
    for (var key in studentAvgscoreObj) {
        if (studentAvgscoreObj[key] >= 8) {
            studenOver8Obj[key] = studentAvgscoreObj[key]
        }
    }
    return studenOver8Obj
}
// console.log(findStudentOver8())
var findMinMax = function findMinMax(students) {


    // console.log(students)
    var scoreObj = {}, minMaxScoreObj = {}

    var arrScore = [], arrMinMaxScore = [], arrNameMin = [], arrNameMax = []

    const subjects = Object.keys(students[0]["marks"])

    for (let i = 0; i < subjects.length; i++) {




        scoreObj["subject"] = subjects[i]
        scoreObj["studentScore"] = {}

        for (let j = 0; j < students.length; j++) {
            let name = students[j]["name"];
            let markObj = students[j]["marks"]
            //name: score
            scoreObj["studentScore"][name] = markObj[scoreObj["subject"]]


        }
        var values = Object.values(scoreObj["studentScore"])
        minMaxScoreObj["subject"] = subjects[i]
        minMaxScoreObj["minScore"] = {}
        minMaxScoreObj["maxScore"] = {}
        // find min score
        var minvalue = values[0]
        for (let k = 1; k < markList.length; k++) {

            if (values[k] < minvalue) {
                minvalue = values[k]

            }
        }
        // get all name has min score
        for (let h = 0; h < markList.length; h++) {
            if (values[h] == minvalue) {
                arrNameMin.push(markList[h])

            }
        }
        // console.log(arrNameMin)
        minMaxScoreObj["minScore"]["score"] = minvalue
        arrNameMin.length == 1 ? minMaxScoreObj["minScore"]["name"] = arrNameMin[0] : minMaxScoreObj["minScore"]["name"] = arrNameMin
        var maxvalue = values[0]
        // find max score
        for (let m = 1; m < markList.length; m++) {

            if (values[m] > maxvalue) {
                maxvalue = values[m]

            }
        }
        // get all name has max score
        for (let n = 0; n < markList.length; n++) {
            if (values[n] == maxvalue) {
                arrNameMax.push(markList[n])

            }
        }
        // console.log(arrNameMax)
        minMaxScoreObj["maxScore"]["score"] = maxvalue
        arrNameMax.length == 1 ? minMaxScoreObj["maxScore"]["name"] = arrNameMax[0] : minMaxScoreObj["maxScore"]["name"] = arrNameMax
        // console.log(obj2)
        arrScore.push(scoreObj)
        arrMinMaxScore.push(minMaxScoreObj)
        arrNameMin = [], arrNameMax = []
        scoreObj = {}, minMaxScoreObj = {}

    }

    return arrMinMaxScore


}
// console.log(JSON.stringify(findMinMax(students), null, 2))
// bai6
var findStudentPrize = function findStudentPrize(students) {
    var obj1 = {}, arr = [], dem1=0, dem2=0, dem3=0
    // obj1["score"] = {}
    // get all stu name
    for (let i = 0; i < students.length; i++) {
        obj1["name"] = students[i]["name"]
        obj1["score"] = {}
        // value array
        var valueArr = Object.values(students[i]["marks"])
        
        for (let i = 0; i < valueArr.length; i++) {
            if (valueArr[i] >= 8 && valueArr[i] < 9) {
                dem1++
            }
            else if (valueArr[i] >= 9 && valueArr[i] < 10) {
                dem2++
            }
            else if (valueArr[i] == 10) {
                dem3++
            }
        }
        obj1["score"]['8'] = dem1
        obj1["score"]['9'] = dem2
        obj1["score"]['10'] = dem3
        arr.push(obj1)
        //renew object 1 and dem
        var prizeArr = [1000000,2000000,5000000]
        obj1["prize"] = dem1*prizeArr[0] + dem2*prizeArr[1] + dem3*prizeArr[2]
        obj1 = {}
        dem1 = 0,dem2 = 0,dem3 = 0

    }
    return arr
}
