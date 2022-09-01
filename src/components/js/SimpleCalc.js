export function display(num) {
    document.getElementById("result").value += num;

    return num;
}

export function solve() {
    let display = document.getElementById("result").value;
    let result = eval(display);
    document.getElementById("result").value = result;

    return result;
}

export function clearScreen() {
    document.getElementById("result").value = "";
}