$(function() {
    $(".btn-toggle").on("click", function(e) {
        event.stopPropagation(e);
        $(".mobile-menu").toggleClass("show");
    });
    $(".close-btn-side").on("click", function(e) {
        event.stopPropagation(e);
        $(".mobile-menu").removeClass("show");
    });

});

var links = document.querySelectorAll('[id^=tituloMenu]');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', toggle_visibility);
}

function toggle_visibility(e) {
    e.preventDefault(); //por precaução
    var idDestino = this.id.split('tituloMenu')[1];
    var el = document.getElementById('menu' + idDestino);
    var visivel = el.style.display == 'block';
    var menus = document.querySelectorAll('[id^=menu]');
    for (var i = 0; i < menus.length; i++) {
        menus[i].style.display = 'none';
    }
    if (visivel) el.style.display = 'none';
    else el.style.display = 'block';
}

$(document).ready(function() {
    $(".search").keyup(function () {
        var searchTerm = $(".search").val();
        var listItem = $('.results tbody').children('tr');
        var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

        $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
                return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
            }
        });

        $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function(e){
            $(this).attr('visible','false');
        });

        $(".results tbody tr:containsi('" + searchSplit + "')").each(function(e){
            $(this).attr('visible','true');
        });

        var jobCount = $('.results tbody tr[visible="true"]').length;
        $('.counter').text(jobCount + ' item');

        if(jobCount == '0') {$('.no-result').show();}
        else {$('.no-result').hide();}
    });
});

$('.tabs-stage div').hide();
$('.tabs-stage div:first').show();
$('.tabs-nav li:first').addClass('tab-active');

// Change tab class and display content
$('.tabs-nav a').on('click', function(event){
    event.preventDefault();
    $('.tabs-nav li').removeClass('tab-active');
    $(this).parent().addClass('tab-active');
    $('.tabs-stage div').hide();
    $($(this).attr('href')).show();
});


$(document).ready(function(){
    $('#upload-file').change(function() {
        var filename = $(this).val();
        $('#file-upload-name').html(filename);
        if(filename!=""){
            setTimeout(function(){
                $('.upload-wrapper').addClass("uploaded");
            }, 600);
            setTimeout(function(){
                $('.upload-wrapper').removeClass("uploaded");
                $('.upload-wrapper').addClass("success");
            }, 1600);
        }
    });
});

function myFunction() {
    var element = document.getElementById("dashboard-main");
    element.classList.toggle("show");
}

if (document.documentElement.clientWidth < 767) {

    const element = document.getElementById("file-upload-text");
    element.innerHTML = "Upload file";
}

$(document).ready(function() {
    $(".search").keyup(function () {
        var searchTerm = $(".search").val();
        var listItem = $('.results tbody').children('tr');
        var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

        $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
                return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
            }
        });

        $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function(e){
            $(this).attr('visible','false');
        });

        $(".results tbody tr:containsi('" + searchSplit + "')").each(function(e){
            $(this).attr('visible','true');
        });

        var jobCount = $('.results tbody tr[visible="true"]').length;
        $('.counter').text(jobCount + ' item');

        if(jobCount == '0') {$('.no-result').show();}
        else {$('.no-result').hide();}
    });
});

$('.tabs-stage div').hide();
$('.tabs-stage div:first').show();
$('.tabs-nav li:first').addClass('tab-active');

// Change tab class and display content
$('.tabs-nav a').on('click', function(event){
    event.preventDefault();
    $('.tabs-nav li').removeClass('tab-active');
    $(this).parent().addClass('tab-active');
    $('.tabs-stage div').hide();
    $($(this).attr('href')).show();
});


$(document).ready(function(){
    $('#upload-file').change(function() {
        var filename = $(this).val();
        $('#file-upload-name').html(filename);
        if(filename!=""){
            setTimeout(function(){
                $('.upload-wrapper').addClass("uploaded");
            }, 600);
            setTimeout(function(){
                $('.upload-wrapper').removeClass("uploaded");
                $('.upload-wrapper').addClass("success");
            }, 1600);
        }
    });
});
function myFunction() {
    var element = document.getElementById("dashboard-main");
    element.classList.toggle("show");
}

if (document.documentElement.clientWidth < 767) {

    const element = document.getElementById("file-upload-text");
    element.innerHTML = "Upload file";
}


