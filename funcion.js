let employeeLabel = [], employeeSalaryData = [], employeeAgeData = []

async function dummyChart() {
  await getDummyData()

const ctx = document.getElementById('myChart').getContext('2d');

const mychart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: employeeLabel,
        datasets: [{
            label: 'Employee Salary',
            backgroundColor: '#86895d',
            borderColor: 'white',
            data: employeeSalaryData
            
        },
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

export {dummyChart};