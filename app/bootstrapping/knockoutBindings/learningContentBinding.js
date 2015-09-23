define(['durandal/composition'], function (composition) {
    ko.bindingHandlers.learningContent = {
        init: function (element, valueAccessor) {
            var $element = $(element),
                html = valueAccessor();
            
            var dataType = getLearningContentType(html);
            
            switch(dataType){
                case 'hotspot': 
                    var hotspotOnImage = new HotspotOnImage($(html)[0]);
                    $element.addClass('hotspot-on-image-container');
                    $element.html(hotspotOnImage.element);
                    break;
                default:
                    $element.html(html);
                    return ko.bindingHandlers.elementsWrap.init(element, valueAccessor);
            }
        }
    };
    
    composition.addBindingHandler('learningContent');
    
    function getLearningContentType(data){
        var $output = $('<output>').html(data),
            dataType = $('[data-type]', $output).attr('data-type');
        
        return dataType;
    }
});