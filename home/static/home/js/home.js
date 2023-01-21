$( document ).ready(function() {

    var app = new Vue({
        delimiters: ['[[', ']]'],
        el: '#home',
        data: {
            characters: null,
            character_details: null,
            isActive: false,
        },
        methods: {
            async get_character(id) {
                console.log(id)
                const response = await fetch(`/get_character/${id}`);
                if (!response.ok) {
                    const message = `An error has occured: ${response.status}`;
                    throw new Error(message);
                }
                const data = await response.json();
                this.character_details = data;
                this.isActive = id;
            },
        },
        async mounted () {
            const response = await fetch(`/all_characters`);
                if (!response.ok) {
                    const message = `An error has occured: ${response.status}`;
                    throw new Error(message);
                }
                const data = await response.json();
                data.forEach(element => {
                    element.active = false;
                });
    
                this.characters = data;
          }
    });

    console.log('zazazaewrw')
});