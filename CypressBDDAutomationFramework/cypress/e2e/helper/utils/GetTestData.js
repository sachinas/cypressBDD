function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

function getTimeStamp()
{
const date = new Date();
var timestamp = Date.now();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const newDateObject = new Date(year, month, day);
const currentYear = newDateObject.getFullYear();
const currentMonth = padTo2Digits(newDateObject.getMonth() + 1);
const currentDay = padTo2Digits(newDateObject.getDate());
const timeStamp = [currentYear, currentMonth, currentDay,timestamp].join('-');
return timeStamp;
}

function getTestData()
{
    const time= getTimeStamp()
    var catalogObject="Catalog: "+time
    var semanticObject="Semantic: "+time
    console.log(time); // 👉️ 2026-01-05
    let a = {
        "CatalogName":catalogObject,
        "SemanticName":semanticObject,
        "SemancticDescription":"Demo Semantic Description"
    }
    console.log(a)
    return a;
}

//Below function is calling for Create Datasets
function getTestData_Datasets()
{
    const time= getTimeStamp()
    var datasetsObject="Automation Dataset: "+time
    var datasetsObject2="Dataset Automation2: "+time
    var datasetsDescriptionObject="Data sets Description: Automation : "+time
    console.log(time); // 👉️ 2026-01-05
    let a = {
        "DatasetsName":datasetsObject,
        "DatsetsName2":datasetsObject2,
        "DatasetsDescription":datasetsDescriptionObject
    }
    console.log(a)
    return a;
}




module.exports = {
    getTestData,
    getTestData_Datasets
};