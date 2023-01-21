$( document ).ready(function() {

    var app = new Vue({
        delimiters: ['[[', ']]'],
        el: '#home',
        data: {
            characters: null,
        },
        methods: {
            get_characters() {
                fetch(`/all_characters`).then(res =>
                    res.json()).then(data => {
                        console.log(data)
                        this.characters = data;
                })
            },
            get_character(id) {
                console.log(id)
            }
        }
    });

    console.log('zazazaewrw')

});