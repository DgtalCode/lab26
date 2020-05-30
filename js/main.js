$(document).ready(function() {
    const links_names = ['#sedan', '#hatchback', '#pickup', '#offroad'];
    links_names.forEach(name => {
        $(name).css({'background-image':'url("./img/' + name.slice(1) + '.png")'})
        $(name).hover(()=>{
            $(name).css({'background-position-y':'center'})
            $(name + ' h1').css({'transform':'translate(25vw, 0)'})
        }, ()=>{
            $(name).css({'background-position-y':'-200px'})
            $(name + ' h1').css({'transform':'translate(0, 0)'})
        })
    });
});