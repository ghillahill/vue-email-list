var app = new Vue({
    el: '#root',
    data: {
        emails: []
    },
    methods: {

    },
    mounted() {
        if (this.emails.length < 10) {
            for (var i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        this.emails.push(response.data.response);
                    });
            }
        }
    }
});
