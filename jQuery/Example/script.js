$(()=>{
    let item = $('#input')
    $('#prepend').click(()=>{
        $("#list").prepend($('<li>').text(item.val()))
    })
    $('#append').click(()=>{
        $("#list").append($('<li>').html('<b>'+item.val()+'</b>'))
    })
})