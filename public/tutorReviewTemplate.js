(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tutorReview'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"review-container\">\r\n  <h2>Reviews:</h2>\r\n  <div class=\"review\">\r\n      <i class=\"fas fa-user\"></i>\r\n      <h4>Reviewer Name: </h4><span class=\"review-name\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"reviewerName") || (depth0 != null ? lookupProperty(depth0,"reviewerName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reviewerName","hash":{},"data":data,"loc":{"start":{"line":5,"column":57},"end":{"line":5,"column":73}}}) : helper)))
    + "</span>\r\n      <h4>Quality Rating: <span class=\"rating\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"rating") || (depth0 != null ? lookupProperty(depth0,"rating") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rating","hash":{},"data":data,"loc":{"start":{"line":6,"column":47},"end":{"line":6,"column":57}}}) : helper)))
    + "</span></h4>\r\n      <hr></hr>\r\n      <h4>Review:</h4>\r\n      <span class=\"review-text\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"reviewText") || (depth0 != null ? lookupProperty(depth0,"reviewText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reviewText","hash":{},"data":data,"loc":{"start":{"line":9,"column":32},"end":{"line":9,"column":46}}}) : helper)))
    + "</span>\r\n    </div>\r\n</div>\r\n";
},"useData":true});
})();