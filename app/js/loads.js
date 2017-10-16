//metadata tooltip e info
$.ajax({
    url: 'mercedez.html',
    type: 'GET',
    dataType: 'html',
    success: function(data){
        $('#info-1 .modal-body').html(data);
        $('#metadata-1').html(data);
    }
});
$.ajax({
    url: 'itau.html',
    type: 'GET',
    dataType: 'html',
    success: function(data){
        $('#info-2 .modal-body').html(data);
        $('#metadata-2').html(data);
    }
});
$.ajax({
    url: 'bmw.html',
    type: 'GET',
    dataType: 'html',
    success: function(data){
        $('#info-3 .modal-body').html(data);
        $('#metadata-3').html(data);
    }
});
$.ajax({
    url: 'nivea.html',
    type: 'GET',
    dataType: 'html',
    success: function(data){
        $('#info-4 .modal-body').html(data);
        $('#metadata-4').html(data);
    }
});
$.ajax({
    url: 'citi.html',
    type: 'GET',
    dataType: 'html',
    success: function(data){
        $('#info-5 .modal-body').html(data);
        $('#metadata-5').html(data);
    }
});
$.ajax({
    url: 'lays.html',
    type: 'GET',
    dataType: 'html',
    success: function(data){
        $('#info-6 .modal-body').html(data);
        $('#metadata-6').html(data);
    }
});
//tooltip y modal emisoras
$.ajax({
    url: 'record-1.html',
    type: 'GET',
    dataType: 'html',
    success: function(data){
        $('#emi-1').html(data);
        $('#modal-emi-1 .modal-body').html(data);
    }
});
$.ajax({
    url: 'record-2.html',
    type: 'GET',
    dataType: 'html',
    success: function(data){
        $('#emi-2').html(data);
        $('#modal-emi-2 .modal-body').html(data);
    }
});
$.ajax({
    url: 'record-3.html',
    type: 'GET',
    dataType: 'html',
    success: function(data){
        $('#emi-3').html(data);
        $('#modal-emi-3 .modal-body').html(data);
    }
});
$.ajax({
    url: 'record-4.html',
    type: 'GET',
    dataType: 'html',
    success: function(data){
        $('#emi-4').html(data);
        $('#modal-emi-4 .modal-body').html(data);
    }
});
$.ajax({
    url: 'record-5.html',
    type: 'GET',
    dataType: 'html',
    success: function(data){
        $('#emi-5').html(data);
        $('#modal-emi-5 .modal-body').html(data);
    }
});
$.ajax({
    url: 'record-6.html',
    type: 'GET',
    dataType: 'html',
    success: function(data){
        $('#emi-6').html(data);
        $('#modal-emi-6 .modal-body').html(data);
    }
});
//emisoras-historico
$.ajax({
    url: 'record-1-historico.html',
    type: 'GET',
    dataType: 'html',
    success: function(data){
        $('#emi-1h').html(data);
        $('#modal-emi-1h .modal-body').html(data);
    }
});
//tooltip y modal fecha recepcion
$.ajax({
    url: 'parceiro-1.html',
    type: 'GET',
    dataType: 'html',
    success: function(data){
        $('#fr-1').html(data);
        $('#modal-fr-1 .modal-body').html(data);
    }
});
$.ajax({
    url: 'parceiro-2.html',
    type: 'GET',
    dataType: 'html',
    success: function(data){
        $('#fr-2').html(data);
        $('#modal-fr-2 .modal-body').html(data);
    }
});
$.ajax({
    url: 'parceiro-3.html',
    type: 'GET',
    dataType: 'html',
    success: function(data){
        $('#fr-3').html(data);
        $('#modal-fr-3 .modal-body').html(data);
    }
});
$.ajax({
    url: 'parceiro-4.html',
    type: 'GET',
    dataType: 'html',
    success: function(data){
        $('#fr-4').html(data);
        $('#modal-fr-4 .modal-body').html(data);
    }
});
$.ajax({
    url: 'parceiro-5.html',
    type: 'GET',
    dataType: 'html',
    success: function(data){
        $('#fr-5').html(data);
        $('#modal-fr-5 .modal-body').html(data);
    }
});
$.ajax({
    url: 'parceiro-6.html',
    type: 'GET',
    dataType: 'html',
    success: function(data){
        $('#fr-6').html(data);
        $('#modal-fr-6 .modal-body').html(data);
    }
});
/*time-line historico*/
$.ajax({
    url: 'time-line.html',
    type: 'GET',
    dataType: 'html',
    success: function(data){
        $('#modal-tl .modal-body').html(data);
    }
});