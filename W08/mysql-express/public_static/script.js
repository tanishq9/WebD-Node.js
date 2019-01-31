$(function(){

    let inp_name = $('#name');
    let inp_age = $('#age');
    let inp_city = $('#city');
    let btn_submit = $('#submit');
    let tbl_persons = $('#persons');

    // By default when this page is loaded then GET request is send to this link
    // and in response we get the list of all persons 
    $.get('/api/persons', function (data) {
        // this is the callback function which returns data from get request
         refreshPersonTable(data)
    })

    // from the list received in response whether from GET or POST request
    // we update the table 
    function refreshPersonTable (persons) {
        tbl_persons.empty()
        tbl_persons.append(
            `<tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            </tr>`
        )
        for (person of persons) {
            tbl_persons.append(
                `<tr>
                    <td>${person.name}</td>
                    <td>${person.age}</td>
                    <td>${person.city}</td>
                </tr>`
            )
        }
    }

    // when we click on post button , we post the data to the given link 
    // in route we have mentioned that we redirect to /api/persons and redirect is 
    // always a GET request and in GET we send back(response) as a list
    // and that is used to refresh the table
    btn_submit.click(function(){
        console.log('Button was clicked.');
        $.post(
            '/api/persons',
            {name:inp_name.val(),age:inp_age.val(),city:inp_city.val()},
            function(data){
                refreshPersonTable(data);
            }
        )
    })

})
