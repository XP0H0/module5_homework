let x = "1";
let result = typeof x;
switch (result) {
    case (result = "number"):
        console.log('х - число');
        break;
    case (result = "string"):
        console.log('х - строка');
        break;
    case (result = "boolean"):
        console.log('х - булевый литерал');
        break;
    default:
        console.log('Тип х не определен');
}