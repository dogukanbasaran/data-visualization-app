const buildBtn = document.querySelector(".build-btn");
const main = document.querySelector("main .container");

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

    dataset.appendChild(inputLabels);
    dataset.appendChild(inputData);

    const graphType = document.createElement("select");
    const options = [
        {value: "bar", text: "bar chart"},
        {value: "histogram", text: "histogram"}
    ];
    options.forEach(optionData => {
        const option = document.createElement("option");
        option.value = optionData.value;
        option.textContent = optionData.text;
        graphType.appendChild(option);
    })

    const formBtn = document.createElement("button");
    formBtn.textContent = "create graph";

    newForm.appendChild(heading);
    newForm.appendChild(inputTitle);
    newForm.appendChild(dataset);
    newForm.appendChild(graphType);
    newForm.appendChild(formBtn);
}