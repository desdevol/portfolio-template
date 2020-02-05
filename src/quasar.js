import Vue from 'vue'

import 'quasar/dist/quasar.css'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import { Quasar } from 'quasar'

Vue.use(Quasar, {
    config: {
        brand: {
            primary: "#232931",
            secondary: "#86003c",
            accent: "#c72c41",

            dark: "#1d1d1d",

            positive: "#21BA45",
            negative: "#C10015",
            info: "#31CCEC",
            warning: "#F2C037"
        }
    },
    components: {
        /* not needed if importStrategy is not 'manual' */
    },
    directives: {
        /* not needed if importStrategy is not 'manual' */
    },
    plugins: {}
});
