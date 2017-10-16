 $( document ).ready(function() {
    /* MENU TOGGLE */
    $( "#toggle_aside" ).click(function() {
        $("#navaside").toggleClass('mini');
        $("#logo_empresa").toggleClass('toleft');
    });

    /* FLUJO APROBACION/RECHAZO*/
    /* Limpia los datos*/
    $('#modal-aprob').on('hidden.bs.modal', function () {
        $("#modal-aprob").find('input, textarea').each(function(){
            $(this).val('');
        });
    })
    $('#modal-rechazo').on('hidden.bs.modal', function (e) {
        $("#modal-rechazo").find('input, textarea, select').each(function(){
            $(this).val('');
        });
    })

    /*aprobar*/
    $('.btn-ok').click(function() {
        var padre = $(this).closest('li');
        $("#modal-aprob").modal();
        $("#ok-go").click(function() {  
            $("#modal-aprob").modal("hide");
            $(padre).find('.action').addClass("des");
            $(padre).addClass("success-row");
            $(padre).children('div.estado').replaceWith('<div class="col-xs-1 estado"><span class="label label-sm label-success">Aprovado</span></div>');
            $(padre).clone().appendTo('ul.body-grid');
            $(padre).remove();
            padre = null;
        });
        $(".btn-default").click(function() { 
            padre = null;
        });
    });
    /*rechazar*/
    $('.btn-nope').click(function() {
        var padre = $(this).closest('li');
        $("#modal-rechazo").modal();
        $("#ok-kill").click(function() {  
            $("#modal-rechazo").modal("hide");
            $(padre).find('.action').addClass("des");
            $(padre).addClass("danger-row");
            $(padre).children('div.estado').replaceWith('<div class="col-xs-1 estado"><span class="label label-sm label-danger">Reprovado</span></div>');
            $(padre).clone().appendTo('ul.body-grid');
            $(padre).remove();
            padre = null;
        });
        $(".btn-default").click(function() { 
            padre = null;
        });
    });
    /*highlight row selected*/
    $(".close").click(function() {
        $(".body-grid li").removeClass("current-row");
    });
    $(".mod-vid").click(function() {
        $(".body-grid li").removeClass("current-row");
    });
    $('.info-btn').click(function() {
        var padre = $(this).closest('li');
        $(padre).addClass("current-row");
    });
    /*video autoplay add title and pause at close modal*/
    $(".info-btn > a").click(function(){
        var players = $(this).attr("data-target");
        var playTitle = $(this).attr("title");
        $("div" + players).find("video")[0].play();
        $("div" + players).find( "h4.modal-title ").html(playTitle);
    });
    $(".close").click(function() {
        var papa = $(this).closest('div.modal');
        $(papa).find("video")[0].pause();
        $("li.current-row").removeClass("current-row");
        $(".collapse.in").removeClass("in");
    });
    $(".mod-vid").click(function() {
        var papa = $(this).closest('div.modal');
        $(papa).find("video")[0].pause();
        $("li.current-row").removeClass("current-row");
        $(".collap-modal").find('input, textarea, select').each(function(){
            $(this).val('');
        });
        $(".collapse.in").removeClass("in");
    });
   

    /* TOOLTIPS */
    /*metadata*/
    Tippy('#meta1', {
        html: '#metadata-1',
        arrow: true,
        animation: 'fade',
        theme: 'claro'
    });
    Tippy('#meta2', {
        html: '#metadata-2',
        arrow: true,
        animation: 'fade',
        theme: 'claro'
    });
    Tippy('#meta3', {
        html: '#metadata-3',
        arrow: true,
        animation: 'fade',
        theme: 'claro'
    });
    Tippy('#meta4', {
        html: '#metadata-4',
        arrow: true,
        animation: 'fade',
        theme: 'claro'
    });
    Tippy('#meta5', {
        html: '#metadata-5',
        arrow: true,
        animation: 'fade',
        theme: 'claro'
    });
    Tippy('#meta6', {
        html: '#metadata-6',
        arrow: true,
        animation: 'fade',
        theme: 'claro'
    });
    /*emisoras*/
    Tippy('#emi1', {
        html: '#emi-1',
        arrow: true,
        animation: 'fade',
        theme: 'claro'
    });
    Tippy('#emi2', {
        html: '#emi-2',
        arrow: true,
        animation: 'fade',
        theme: 'claro'
    });
    Tippy('#emi3', {
        html: '#emi-3',
        arrow: true,
        animation: 'fade',
        theme: 'claro'
    });
    Tippy('#emi4', {
        html: '#emi-4',
        arrow: true,
        animation: 'fade',
        theme: 'claro'
    });
    Tippy('#emi5', {
        html: '#emi-5',
        arrow: true,
        animation: 'fade',
        theme: 'claro'
    });
    Tippy('#emi6', {
        html: '#emi-6',
        arrow: true,
        animation: 'fade',
        theme: 'claro'
    });
    /*fecha aprobacion comercial*/
    Tippy('#ac1', {
        html: '#ac-1',
        arrow: true,
        animation: 'fade',
        theme: 'claro'
    });
    Tippy('#ac2', {
        html: '#ac-2',
        arrow: true,
        animation: 'fade',
        theme: 'claro'
    });
    Tippy('#ac3', {
        html: '#ac-3',
        arrow: true,
        animation: 'fade',
        theme: 'claro'
    });
    Tippy('#ac4', {
        html: '#ac-4',
        arrow: true,
        animation: 'fade',
        theme: 'claro'
    });
    Tippy('#ac5', {
        html: '#ac-5',
        arrow: true,
        animation: 'fade',
        theme: 'claro'
    });
    Tippy('#ac6', {
        html: '#ac-6',
        arrow: true,
        animation: 'fade',
        theme: 'claro'
    });
    /*fecha aprob tecnica*/  
    Tippy('#at1', {
        html: '#at-1',
        arrow: true,
        animation: 'fade',
        theme: 'claro'
    });
    /*fecha rececpcion - parceiro*/
    Tippy('#fr1', {
        html: '#fr-1',
        arrow: true,
        animation: 'fade',
        theme: 'claro'
    });
    Tippy('#fr2', {
        html: '#fr-2',
        arrow: true,
        animation: 'fade',
        theme: 'claro'
    });
    Tippy('#fr3', {
        html: '#fr-3',
        arrow: true,
        animation: 'fade',
        theme: 'claro'
    });
    Tippy('#fr4', {
        html: '#fr-4',
        arrow: true,
        animation: 'fade',
        theme: 'claro'
    });
    Tippy('#fr5', {
        html: '#fr-5',
        arrow: true,
        animation: 'fade',
        theme: 'claro'
    });
    Tippy('#fr6', {
        html: '#fr-6',
        arrow: true,
        animation: 'fade',
        theme: 'claro'
    });

}); 

