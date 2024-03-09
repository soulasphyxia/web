// 2.	Напишите программу, чтобы получить все уникальные значения массива на основе предоставленной функции сравнения.
const array_input = document.querySelector("#array-input")
const function_input = document.querySelector("#function-input")
const btn = document.querySelector("#input-btn")
const output_field = document.querySelector("#output-field")
const INPUT_ERROR = "Ошибка ввода. Повторите еще раз!"

function distinct(arr, func){
    if(arr.length === 0) return null;
    const new_array = [arr[0]]     
    for(el of arr){
        new_array.forEach(x => {
            if(func(el,x) != 0) new_array.push(el)
        })
    }

    return new_array.map(x => JSON.stringify(x));
}

btn.addEventListener("click",e => {
    output_field.innerHTML = ""
    try{
        const parsed = JSON.parse(array_input.value)
        if(!(Object.prototype.toString.call(parsed) === '[object Array]')){
            throw new Error()
        }

        const function_string = function_input.value
        const formatted_function = function_string.split("=>").map(el => el.trim());
        const func = new Function(formatted_function[0],formatted_function[1])

        const result = distinct(parsed, func)
        output_field.innerHTML = result === INPUT_ERROR
        ? INPUT_ERROR
        : `Ответ: [${result}]` 
    }catch{
        array_input.value = ""
        function_input.value = ""
        output_field.innerHTML = INPUT_ERROR
    }
})

