$( document ).ready(function() {

    var app = new Vue({
        delimiters: ['[[', ']]'],
        el: '#home',
        data: {
            characters: null,
        },
        methods: {
            async get_characters() {
                const response = await fetch(`/all_characters`);
                if (!response.ok) {
                    const message = `An error has occured: ${response.status}`;
                    throw new Error(message);
                }
                const data = await response.json();
                this.characters = data;
            },
            get_character(id) {
                console.log(id)
            }
        }
    });

    console.log('zazazaewrw')

});