var Todo = Backbone.Model.extend({
    defaults: {
        //title: 'Fuck off',
        completed: false
    },
    initialize: function() {
        console.log('initialize');
        this.on('change:title', function(){
            console.log('Values have been change');
        });
        this.on('invalid', function(model, errors){
            console.log(errors);
        })
    },

    setTitle: function(value) {
        this.set({title: value});
    },

    validate: function(attrs) {
        if (attrs.title === undefined) {
            return 'I need title';
        }
    }
});

var todo1 = new Todo();
//todo1.set('title', '11111');
//todo1.setTitle('22222')
//todo1.set('completed', true);
//todo1.set('title', '222222', 'completed', false);

