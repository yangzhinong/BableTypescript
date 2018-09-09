$(document).ready(function(){
    $.post('',{method:'load'},function(res:IRet){
        if (res.code==200){
           var tpl= $.templates(/*html*/`
                <div data-id="{{:id}}">
                    {{>Name}}
                </div>
            `);
           $('body').append( tpl.render(res.data));

           

        }
    })
})