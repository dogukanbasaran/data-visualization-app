const buildBtn = document.querySelector(".build-btn");
const main = document.querySelector("main .container");

const chartArea = document.querySelector("main .container canvas").getContext("2d");

const chartData = {
    labels: ['Dogukan', 'Ekinsu', 'Yavuzhan', 'Ece Dilara', 'Atakan', 'Hazal Asu'],
    datasets: [{
    data: [170, 161, 178, 160, 172, 140],
}]
};

buildBtn.addEventListener("click", () => {
    const newForm = document.createElement("div");
    newForm.classList.add("newForm");

    createForm(newForm)
    
    main.appendChild(newForm);
});

const createForm = (newForm) => {
    const heading = document.createElement("span");
    heading.textContent = "Building your graph";

    const inputTitle = document.createElement("input");
    inputTitle.placeholder = "graph title";

    const dataset = document.createElement("div");
    dataset.classList.add("dataSet");

    const inputLabels = document.createElement("input");
    inputLabels.placeholder = "data label";

    const inputData = document.createElement("input");
    inputData.placeholder = "data value";

    const data = document.createElement("div");
    data.appendChild(inputLabels);
    data.appendChild(inputData);

    dataset.appendChild(data);

    const newDataBtn = document.createElement("button");
    newDataBtn.textContent = "add data";
    newDataBtn.addEventListener("click", () => {
        const inputLabels = document.createElement("input");
        inputLabels.placeholder = "data label";
    
        const inputData = document.createElement("input");
        inputData.placeholder = "data value";
    
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
    ];
    options.forEach(optionData => {
        const option = document.createElement("option");
        option.value = optionData.value;
        option.textContent = optionData.text;
        graphType.appendChild(option);
    });


    const formBtn = document.createElement("button");
    formBtn.textContent = "create graph";
    formBtn.addEventListener("click", () => {
        const config = {
            type: `${graphType.options[graphType.selectedIndex].value}`,
            data: chartData
        };

        const chart = new Chart(chartArea, config);
        main.removeChild(newForm);

        console.log()

    });

    newForm.appendChild(heading);
    newForm.appendChild(inputTitle);
    newForm.appendChild(dataset);
    newForm.appendChild(newDataBtn);
    newForm.appendChild(graphType);
    newForm.appendChild(formBtn);
}