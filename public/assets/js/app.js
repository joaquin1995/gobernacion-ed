
// add row
$("#addRow").click(function () {
    var html = '';
    html += '<div id="inputFormRow">';
    html += '<div class="input-group mb-3">';
    html +=
        '<input type="text" name="title[]" class="form-control m-input" placeholder="Profesion" autoComplete="off">';
    html += '<div class="input-group-append">';
    html += '<button id="removeRow" type="button" class="btn btn-danger">-</button>';
    html += '</div>';
    html += '</div>';

    $('#newRow').append(html);
});

// remove row
$(document).on('click', '#removeRow', function () {
    $(this).closest('#inputFormRow').remove();
});





document.addEventListener("DOMContentLoaded", function(event) {

    $('.selectpicker').selectpicker();
});

