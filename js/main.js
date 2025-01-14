const buildBtn = document.querySelector(".build-btn");
const main = document.querySelector("main .container");

const createNewGraph = document.querySelector("main .container .create-new-graph");

const chartContainer = document.querySelector("main .container .chart-container");
const chartArea = document.querySelector("main .container .chart-container canvas").getContext("2d");
const printBtn = document.querySelector("main .container .chart-container #print-btn button");

buildBtn.addEventListener("click", () => {
    const newForm = document.createElement("div");
    newForm.classList.add("newForm");

    createForm(newForm)

    main.appendChild(newForm);
});

const createForm = (newForm) => {

    const closeBtn = document.createElement("span");
    closeBtn.classList.add("close-btn");
    closeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    closeBtn.addEventListener("click", () => {
        newForm.remove();
    });

    const heading = document.createElement("h4");
    heading.textContent = "Create a new chart";

    const newFormContainer = document.createElement("div");
    newFormContainer.classList.add("newForm-container");

    const inputTitle = document.createElement("input");
    inputTitle.placeholder = "chart title";

    const labelList = [];
    const dataList = [];

    const dataset = document.createElement("div");
    dataset.classList.add("dataSet");

    const newDataBtn = document.createElement("button");
    newDataBtn.textContent = "add new data";
    newDataBtn.addEventListener("click", () => {
        const inputLabels = document.createElement("input");
        inputLabels.placeholder = "data label";
        inputLabels.addEventListener("change", () => {
            labelList.push(inputLabels.value);
        })

        const inputData = document.createElement("input");
        inputData.placeholder = "data value";
        inputData.addEventListener("change", () => {
            dataList.push(inputData.value);
        })

        const data = document.createElement("div");
        data.appendChild(inputLabels);
        data.appendChild(inputData);
        dataset.appendChild(data);
    });

    
    const graphType = document.createElement("select");
    const options = [
        {value: "line", text: "Line Chart"},
        {value: "bar", text: "Bar Chart"},
        {value: "pie", text: "Pie Chart"},
        {value: "doughnut", text: "Doughnut Chart"}
    ];
    options.forEach(optionData => {
        const option = document.createElement("option");
        option.value = optionData.value;
        option.textContent = optionData.text;
        graphType.appendChild(option);
    });


    const formBtn = document.createElement("button");
    formBtn.textContent = "build";
    formBtn.addEventListener("click", () => {

        main.removeChild(newForm);
        createNewGraph.remove();
        
        chartContainer.style.display = "block";

        printBtn.addEventListener("click", () => {
            window.print();
        })

        const chartData = {
            labels: labelList,
            datasets: [{
            data: dataList,
            label: `${inputTitle.value}`,
            backgroundColor: 'rgba(8,33,66,0.2)',
            borderColor: 'rgba(36,103,32,1)',
            borderWidth: 1,
            tension: 0.4
        }]
        };

        const config = {
            type: `${graphType.options[graphType.selectedIndex].value}`,
            data: chartData,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: `${inputTitle.value}`
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: true
                        }
                    },
                    y: {
                        beginAtZero: true
                    }
                },
                
            }
        };

        const chart = new Chart(chartArea, config);
    });

    newForm.appendChild(closeBtn);
    newForm.appendChild(heading);
 
    newFormContainer.appendChild(inputTitle);
    newFormContainer.appendChild(dataset);
    newFormContainer.appendChild(newDataBtn);
    newFormContainer.appendChild(graphType);
    newFormContainer.appendChild(formBtn);
    newForm.appendChild(newFormContainer);
}