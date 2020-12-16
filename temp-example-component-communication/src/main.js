import { createApp } from 'vue';
import App from './App.vue';
import ActiveElement from './components/ActiveElement.vue';
import KnowledgeElement from './components/KnowledgeElement.vue';


const app =createApp(App);

app.component('active-element',ActiveElement);
app.component('knowledge-element',KnowledgeElement);
app.mount('#app');
