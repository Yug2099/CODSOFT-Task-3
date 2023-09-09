var myBtn = document.querySelectorAll('.button').length;

for(var i=0; i<myBtn; i++)
{
    document.querySelectorAll('.button')[i].addEventListener('click', function (){
        var BtnValue = this.value;

        if(BtnValue == '=')
        {
            let x = document.querySelector('#result').value;
            let y = eval(x);
            document.querySelector('#result').value = y;
            return y;
        }
        else if(BtnValue == 'DEL')
        {
            var del = document.querySelector('#result').value.toString().slice(0,-1);
            document.querySelector('#result').value = del;
        }
        else if(BtnValue == 'AC')
        {
            document.querySelector('#result').value = '';
        }
        else if(BtnValue == '%')
        {
            document.querySelector('#result').value /= 100;   
        }
        else
        {
            document.querySelector('#result').value +=BtnValue;
        } 
    });
}
