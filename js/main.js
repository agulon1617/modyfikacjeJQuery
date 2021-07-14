$(document).ready(function () {
    $('#count-sum').click(function () {
            let sum = 0;
        
            let salaries = $('.salary').get();
            for (let salary of salaries) {
                console.log(salary.innerText);
                //sum = sum + parseFloat(salary.innerText);
            
                sum = sum + +salary.innerText;
            }

            $('#sum').text(sum);
            console.log(sum)

        }
    )

})