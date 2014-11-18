var Grower = {
  viewstate: new Backbone.Model(),

  growerModel: Backbone.Model.extend({
    idAttribute: 'growerID',
    urlRoot: '/api/growers'
  }),

  initView: function () {
    var smv = new Backbone.SimpleModelView({
      el: "#grower-list",
      listTemplate: _.template($('#grower-list-template').html()),
      formTemplate: _.template($("#grower-form-template").html()),
      collection: Grower.collection
    });

    smv.$el.on('click', '#cancel', function () { smv.trigger('view'); });
  },

  init: function () { 
    Grower.collection = gCollection = new Backbone.Collection([], {
      model: this.growerModel
    });

    gCollection.url = '/api/growers';
    gCollection.fetch().done(_.bind(this.initView, this));

    Grower.viewstate.set('Growers', gCollection);    
  }
};

var Product = {
  viewstate: new Backbone.Model(),

  productModel: Backbone.Model.extend({
    idAttribute: 'productID',
    urlRoot: '/api/products'
  }),

  initView: function () {
    var smv = new Backbone.SimpleModelView({
      el: "#product-list",
      listTemplate: _.template($('#product-list-template').html()),
      formTemplate: _.template($("#product-form-template").html()),
      collection: Product.collection
    });

    smv.$el.on('click', '#cancel', function () { smv.trigger('view'); });
  },

  init: function () { 
    Product.collection = gCollection = new Backbone.Collection([], {
      model: this.productModel
    });

    gCollection.url = '/api/products';
    gCollection.fetch().done(_.bind(this.initView, this));
  }
};