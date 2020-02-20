const a = +prompt('add number');
const b = +prompt('add number');
const c = prompt('add sign');


switch ( c ){
    case "-" :
        alert(Number(a) - Number(b));
        break;
        case "+":
            alert(Number(a) + Number(b));
            break;
            case "*":
            alert(Number(a) * Number(b));
            break;
            case "/":
                alert(Number(a) / Number(b));
                break;
}
