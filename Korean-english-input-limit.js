$.fn.extend({
    koreanInput: function (krLimit, engLimit,textCountLabelId) {
        krLimit = parseInt(krLimit, 10) || 10;
        engLimit = parseInt(engLimit, 10) || 20;
        $(this).on("input", function (e) {
            var x = e.target;
            var logo_text_count_limit = /[\u3131-\uCB4C]/.test(x.value) ? '/' + krLimit : '/' + engLimit;
            $(textCountLabelId).text(x.value.length + logo_text_count_limit);
            if (e.keyCode == 8) return;
            if (x.value.match(/[\u3131-\uCB4C]/) && x.value.length >= krLimit) {
                x.value = x.value.substring(0, krLimit);
                $(textCountLabelId).text(x.value.length + logo_text_count_limit);
            } else if (x.value.length >= engLimit) {
                x.value = x.value.substring(0, engLimit);
                $(textCountLabelId).text(x.value.length + logo_text_count_limit);
            }
        });
        return this;
    }
});
$(js_logo_text).koreanInput(10,20,"#logo_text_count");


$.fn.extend({
    koreanInputOnLoad: function (krLimit, engLimit,textCountLabelId, FieldId) {
        krLimit = parseInt(krLimit, 10) || 10;
        engLimit = parseInt(engLimit, 10) || 20;
        var x = document.getElementById(FieldId);
        var logo_text_count_limit = /[\u3131-\uCB4C]/.test(x.value) ? '/' + krLimit : '/' + engLimit;
        $(textCountLabelId).text(x.value.length + logo_text_count_limit);
    }
});
$("#logo_text").koreanInputOnLoad(10,20,"#logo_text_count","logo_text");
