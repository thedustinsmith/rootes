(function() {
  Backbone.SimpleModelView = Backbone.View.extend({

    events: {
      'click .smv-edit': 'editClick',
      'click .smv-add': 'newItem',
      'click .smv-delete': 'deleteItem',
      'submit form': 'formSubmit'
    },

    getModelFromTarget: function(target) {
      var el = $(target).closest('.smv-item');
      var i = this.collection.get(el.data('id'));
      return i;
    },

    deleteItem: function (ev) {
      var item = this.getModelFromTarget(ev.currentTarget);
      var self = this;
      item.destroy().done(function() {
        self.collection.remove(item);
        self.renderList()
        self.trigger('view');
      })
    },

    newItem: function () {
      this.bindForm(new this.collection.model());
      this.trigger('edit');
    },

    formSubmit: function (ev) {
      ev.preventDefault();
      var self = this;
      var data = {};

      this.$('input:text, select, textarea').each(function() {
        data[$(this).attr('name')] = $(this).val();
      });
      this.model.set(data);
      if (this.model.isNew) {
        this.collection.add(this.model);
      }

      this.model.save().done(function () { 
        self.collection.get(self.model.id).set(self.model.toJSON());
        self.renderList();
        self.trigger('view');
      });

      this.trigger('saved', this.model);
    },

    editClick: function (ev) {
      ev.preventDefault();
      var i = this.getModelFromTarget(ev.currentTarget);
      this.bindForm(i);
    },

    bindForm: function (m) {
      this.model = m;
      this.$('input:text, select, textarea').each(function() {
        $(this).val(m.get($(this).attr('name')));
      });
      this.trigger('edit');
    },

    showEdit: function () {
      this.$listWrap.hide();
      this.$formWrap.show();
    },

    showView: function () {
      this.$formWrap.hide();
      this.$listWrap.show();
    },

    renderList: function () {
      this.$listWrap.html(this.listTemplate(this.collection.toJSON()));
    },

    render: function () {
      this.renderList();
      this.$formWrap.html(this.formTemplate());
    },

    initialize: function (opts) {
      var self = this;
      self.collection = opts.collection;
      self.formTemplate= opts.formTemplate;
      self.listTemplate = opts.listTemplate;

      self.$listWrap = $("<div class='smv-list' />").appendTo(this.$el);
      self.$formWrap = $("<div class='smv-form' />").appendTo(this.$el).hide();

      self.on('edit', self.showEdit);
      self.on('view', self.showView);

      self.render();
    }

  });

})();