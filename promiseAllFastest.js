const RADIO_OPTIONS = {
    STANDARD: 'standard',
    FASTEST: 'fastest'
};

main();

function main() {
    implementPromiseAllFastest();
    const body = document.getElementById('body');
    const promisesInput = document.createElement('div');
    const promisesOutput = document.createElement('div');
    const promisesOptions = document.createElement('div');
    promisesInput.classList.add('promisesInput');
    promisesOutput.classList.add('promisesOutput');
    promisesOptions.classList.add('promisesOptions');
    promisesInput.setAttribute('data-promisesInput', 'true');
    promisesOutput.setAttribute('data-promisesOutput', 'true');
    promisesOptions.setAttribute('data-promisesOptions', 'true');
    body.appendChild(promisesInput);
    body.appendChild(promisesOutput);
    body.appendChild(promisesOptions);

    addPromisesInput();
    addPromisesOutput();
    addPromisesOptions();
}


function addPromisesInput() {
    const promisesInputList = document.querySelector(`[data-promisesInput="true"]`);
    const title = document.createElement('div');
    const option1 = document.createElement('div');
    const option2 = document.createElement('div');
    const option3 = document.createElement('div');
    const option4 = document.createElement('div');
    const option5 = document.createElement('div');
    const option6 = document.createElement('div');
    title.textContent = "add Promises's time in ms f.g. 1000";
    option1.setAttribute('contentEditable', 'true');
    option2.setAttribute('contentEditable', 'true');
    option3.setAttribute('contentEditable', 'true');
    option4.setAttribute('contentEditable', 'true');
    option5.setAttribute('contentEditable', 'true');
    option6.setAttribute('contentEditable', 'true');

    option1.setAttribute('data-input', '1');
    option2.setAttribute('data-input', '2');
    option3.setAttribute('data-input', '3');
    option4.setAttribute('data-input', '4');
    option5.setAttribute('data-input', '5');
    option6.setAttribute('data-input', '6');

    option1.setAttribute('data-color', 'redLabel');
    option2.setAttribute('data-color', 'blueLabel');
    option3.setAttribute('data-color', 'greenLabel');
    option4.setAttribute('data-color', 'pinkLabel');
    option5.setAttribute('data-color', 'orangeLabel');
    option6.setAttribute('data-color', 'pinkLabel');

    title.classList.add('title');
    option1.classList.add('promiseLabel');
    option2.classList.add('promiseLabel');
    option3.classList.add('promiseLabel');
    option4.classList.add('promiseLabel');
    option5.classList.add('promiseLabel');
    option6.classList.add('promiseLabel');

    option1.classList.add(option1.attributes["data-color"].value);
    option2.classList.add(option2.attributes["data-color"].value);
    option3.classList.add(option3.attributes["data-color"].value);
    option4.classList.add(option4.attributes["data-color"].value);
    option5.classList.add(option5.attributes["data-color"].value);
    option6.classList.add(option6.attributes["data-color"].value);

    promisesInputList.appendChild(title);
    promisesInputList.appendChild(option1);
    promisesInputList.appendChild(option2);
    promisesInputList.appendChild(option3);
    promisesInputList.appendChild(option4);
}

function addPromisesOutput() {
    const promisesOutputList = document.querySelector(`[data-promisesOutput="true"]`);
    const title = document.createElement('div');
    const promiseOutput1 = document.createElement('div');
    const promiseOutput2 = document.createElement('div');
    const promiseOutput3 = document.createElement('div');
    const promiseOutput4 = document.createElement('div');
    const promiseOutput5 = document.createElement('div');
    const promiseOutput6 = document.createElement('div');
    title.textContent = "output";

    promiseOutput1.setAttribute('data-output', '1');
    promiseOutput2.setAttribute('data-output', '2');
    promiseOutput3.setAttribute('data-output', '3');
    promiseOutput4.setAttribute('data-output', '4');
    promiseOutput5.setAttribute('data-output', '5');
    promiseOutput6.setAttribute('data-output', '6');

    title.classList.add('title');
    promiseOutput1.classList.add('promiseLabel');
    promiseOutput2.classList.add('promiseLabel');
    promiseOutput3.classList.add('promiseLabel');
    promiseOutput4.classList.add('promiseLabel');
    promiseOutput5.classList.add('promiseLabel');
    promiseOutput6.classList.add('promiseLabel');


    promisesOutputList.appendChild(title);
    promisesOutputList.appendChild(promiseOutput1);
    promisesOutputList.appendChild(promiseOutput2);
    promisesOutputList.appendChild(promiseOutput3);
    promisesOutputList.appendChild(promiseOutput4);
}

function addPromisesOptions() {
    const promisesOptionsList = document.querySelector(`[data-promisesOptions="true"]`);
    const title = document.createElement('div');
    const option1 = document.createElement('div');
    const startButton = document.createElement('button');

    const promiseTypes = [RADIO_OPTIONS.STANDARD, RADIO_OPTIONS.FASTEST];
    promiseTypes.forEach((type, i) => {
        const labelValue = document.createElement('label');
        labelValue.innerHTML = type;
        const inputValue = document.createElement('input');
        inputValue.type = "radio";
        inputValue.name = 'promise';
        inputValue.value = type;
        inputValue.setAttribute('data-radio-value', 'true');
        if (i === 0) inputValue.checked = true;
        option1.appendChild(labelValue);
        option1.appendChild(inputValue);
    });


    title.textContent = "options";

    option1.setAttribute('data-radio', '1');
    startButton.setAttribute('data-button-start', 'true');

    startButton.innerHTML = "start!";
    startButton.onclick = function () {
        process();
    };

    title.classList.add('title');
    option1.classList.add('promiseLabel');
    startButton.classList.add('promiseLabel');


    promisesOptionsList.appendChild(title);
    promisesOptionsList.appendChild(option1);
    promisesOptionsList.appendChild(startButton);
}

function process() {
    const clearLabels = () => {
        const promisesOutputList = document.querySelector(`[data-promisesOutput="true"]`);
        const labels = promisesOutputList.querySelectorAll('[data-output]');
        [...labels].forEach(label => {
            label.textContent = '';
            label.classList = label.classList[0];
        });
    }
    const getChosenOption = () => {
        const radioOptions = document.querySelectorAll('[data-radio-value]');
        return [...radioOptions].find(option => option.checked).value
    }

    const createPromisesToTest = () => {
        const jobsOptions = {
            [document.querySelector(`[data-input="1"]`).dataset.color]: document.querySelector(`[data-input="1"]`).textContent,
            [document.querySelector(`[data-input="2"]`).dataset.color]: document.querySelector(`[data-input="2"]`).textContent,
            [document.querySelector(`[data-input="3"]`).dataset.color]: document.querySelector(`[data-input="3"]`).textContent,
            [document.querySelector(`[data-input="4"]`).dataset.color]: document.querySelector(`[data-input="4"]`).textContent
        };
        return Object.entries(jobsOptions).map(([key, value]) => {
            return (
                new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({color: key, text: value});
                    }, Number(value))
                })
            )
        });
    }

    clearLabels();
    const chosenOption = getChosenOption();
    const promises = createPromisesToTest();

    if (chosenOption === RADIO_OPTIONS.STANDARD) {
        Promise.all(promises).then(val => setLabelsOutputValues(val));
    } else {
        Promise.allFastest(promises).then(val => setLabelsOutputValues(val));
    }
}

function setLabelsOutputValues(val) {
    val.forEach(({color, text}) => {
        const outputLabelsList = document.querySelector(`[data-promisesOutput="true"]`);
        const labels = outputLabelsList.querySelectorAll('[data-output]');
        const nextEmptyLabel = [...labels].find(label => label.textContent === '');
        nextEmptyLabel.classList.add(color);
        nextEmptyLabel.textContent = text;
    })
}

function implementPromiseAllFastest() {
    Promise.allFastest = function(promisesArr) {
        const promisesResolvedValues = [];
        return new Promise((resolve, reject) => {
            promisesArr.forEach((promise) => {
                promise.then(val => {
                    promisesResolvedValues.push(val);
                    if (promisesResolvedValues.length === promisesArr.length) {
                        resolve(promisesResolvedValues);
                    }
                })
            })
        });
    };
}
