const { body } = document;

function changebackground(number) {
    //if background is already showing
    let prevback;
    if(body.classList)
    {
        prevback=body.className
    }
    //Reset css class from the body
    body.className = '';
    switch (number) {
        case '1':
            return(prevback==='background-1'?false:body.classList.add('background-1'));
        case '2': return(prevback==='background-2'?false:body.classList.add('background-2'));

        case '3':  return(prevback==='background-3'?false:body.classList.add('background-3'));
        default: alert("404 Not Found");
            break;
    }
}
