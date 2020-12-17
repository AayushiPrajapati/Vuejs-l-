<template>
    <base-card>
    <base-button @click="setSelectedTab('add-resource')"
    :mode ="addResStyle">Add Resource</base-button>
    <base-button
     @click="setSelectedTab('stored-resource')"
     :mode ="storedResStyle">Stored Resources</base-button>
    </base-card>
    <keep-alive>
    <component :is ='selectedTab'></component>
    </keep-alive>
</template>

<script>
import AddResource from './AddResource.vue';
import StoredResource from './StoredResource.vue';

export default {
    components : {
        AddResource,
        StoredResource,
    },
    data (){
        return {
            selectedTab :"stored-resource",
             resources : [
                {
                    id : 'official',
                    name : 'Official',
                    description : 'Vue Official Resources',
                    link :'https://vue.org'
                },
                 {
                    id : 'google',
                    name : 'Google',
                    description : 'Learn Anything From Google',
                    link :'https://google.com'
                },
            ],
        };
    },
    provide (){
        return {
             resources :this.resources,
             addResources : this.AddResources,
             deleteResource : this.removeResource,
        };
    },
    computed :{
        storedResStyle (){
            return this.selectedTab === 'stored-resource' ? null : 'flat';
            },
        addResStyle (){
             return this.selectedTab === 'add-resource' ? null : 'flat';
        },
    },
    methods : {
        setSelectedTab(tab){
            this.selectedTab =tab;
        },
        AddResources(title , description , link){
            const newResource ={
                id : new Date().toISOString(),
                title : title,
                description : description,
                link : link,
            }
            this.resources.unshift(newResource);
            this.selectedTab = 'stored-resource';
        },
        removeResource(resId){
            const resIndex=this.resources.findIndex((res)=>res.id === resId);
            this.resources.splice(resIndex,1);
        },
    },
}
</script>