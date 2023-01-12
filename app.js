

//event listener for buttons
let add1 = document.getElementById("add");
add1.addEventListener("click", add);
let sub2 = document.getElementById("sub");
sub2.addEventListener("click", sub);
let mul2 = document.getElementById("mul");
mul2.addEventListener("click", mul);
let div2 = document.getElementById("div");
div2.addEventListener("click", div)
let clean3 = document.getElementById("clean");
clean3.addEventListener("click", clean);




// // functions of buttons

function add(event) {

    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let result = parseFloat(input1) + parseFloat(input2);

    document.getElementById("result").innerHTML = result;

}

    function sub(){
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let result = parseFloat(input1) - parseFloat(input2);

    document.getElementById("result").innerHTML = result;

    }

    function div() {
        let input1 = document.getElementById("input1").value;
        let input2 = document.getElementById("input2").value;
        if(input2 <= 0){
            document.getElementById("result").innerHTML = "Error: Cannot divide by 0"
        } else {
            let result = parseFloat(input1) / parseFloat(input2);

            document.getElementById("result").innerHTML = result;
        }
    }

    function mul(){
        let input1 = document.getElementById("input1").value;
        let input2 = document.getElementById("input2").value;

        let result = parseFloat(input1) * parseFloat(input2);

        document.getElementById("result").innerHTML = result;
    }

    function clean() {
        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
        document.getElementById("result").innerHTML = "";
    }