import Ember from 'ember';
var store = Ember.store;
export default Ember.Service.extend({
    member: null,
    name:  "Unregistered Name",
    email: "Unregistered Email",
    password: "Unregistered password",
    screenName: "Unregistered avatar",
    avatar: "Unregistered avatar",
    id: "invalid ID",

        signIn(foundMember){
            this.set("name", foundMember.get('name'));
            this.set("email", foundMember.get('email'));
            this.set("screenName", foundMember.get('screenName'));
            this.set("password", foundMember.get('password'));
            this.set("avatar", foundMember.get('avatar'));
            this.set("id", foundMember.get('id'));
            this.set('member', foundMember);
            console.log(this.get('member').get('name'));
        },
        signOut(){
            this.set("name", "");
            this.set("email","");
            this.set("screenName","");
            this.set("password", "");
            this.set("avatar", "");
            this.set("id", "");
            console.log("signed out");
        },


});
