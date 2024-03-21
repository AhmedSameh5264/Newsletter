const entermail = () => {
    var check = document.getElementById('maill').value;
    var myspan = document.getElementById('error')
    var myinput = document.getElementById('maill')
    if (check.indexOf('@') === -1) {
        myspan.innerHTML = 'Vaild email required'
        myinput.classList.add('inputerror')
    } else {
        document.getElementById('mainsec').classList.add('accept')
        document.getElementById('aftersec').classList.add('go')


    }
}