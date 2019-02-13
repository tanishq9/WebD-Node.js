$(()=>{
   let list = $('#list');
   let page = 1;
   $('#fetch').click(()=>{
       // used backticks for using ${} functionality
        $.get(`https://reqres.in/api/users?page=${page}`,(response)=>{
            page++;
            console.log(response);
            // response.data is an JSON object array
            for (let p of response.data){
                list.append(`
                <li><img width="100" src="${p.avatar}">
                ${p.first_name} ${p.last_name}
                </li>
                `) 
            }        
        });
   });
});