/* const employeeLabel = [], employeeSalaryData = [], employeeAge = []

async function dummyChart () {
  await getDummyData ()
}

const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: employeeLabel,
        datasets: [{
            label: 'Employee Salary',
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

dummyChart()

//Fetch

async function getDummyData(){
  const apiUrl = 'https://dummy.restapiexample.com/api/v1/employees'

const response = await fetch (apiUrl)
const barCharData = await response.json()

const salary = barCharData.data.map ((x) => x.employee_salary)
console.log(salary)
const age = barCharData.data.map ((x) => x.employee_age)
const name = barCharData.data.map ((x) => x.employee_name)

employeeSalaryData = salary
employeeAgeData = age
employeeLabel = name


} */


let employeeLabel = [], employeeSalaryData = [], employeeAgeData = []

async function dummyChart() {
  await getDummyData()

const ctx = document.getElementById('myChart').getContext('2d');

const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: employeeLabel,
        datasets: [{
            label: 'Employee Salary',
            backgroundColor: 'blue',
            borderColor: 'rgb(255, 99, 132)',
            data: employeeSalaryData
        },
        /* {
          label: 'Employee Age',
          backgroundColor: 'pink',
          borderColor: 'rgb(255, 99, 132)',
          data: employeeAgeData
      } */
      ]
    },
    options: {
      tooltips: {
        mode: 'index'
      }
    }
})}

dummyChart()


async function getDummyData() {
  const apiUrl = "http://dummy.restapiexample.com/api/v1/employees"

  const response = await fetch(apiUrl)
  const barChatData = await response.json()
  
  const salary = barChatData.data.map((x) => x.employee_salary)
  console.log(salary)
  const age = barChatData.data.map((x) => x.employee_age)
  const name = barChatData.data.map((x) => x.employee_name)

 employeeSalaryData = salary
 employeeAgeData = age
 employeeLabel = name
}