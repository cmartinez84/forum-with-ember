import Ember from 'ember';

export default Ember.Service.extend({
    name:  "Unregistered Name",
    email: "Unregistered Email",
    password: "Unregistered password",
    screenName: "Unregistered avatar",
    avatar: "Unregistered avatar",
        signIn(foundMember){
            console.log(foundMember.get('name'));
            this.set("name", foundMember.get('name'));
            this.set("email", foundMember.get('email'));
            this.set("screenName", foundMember.get('screenName'));
            this.set("password", foundMember.get('password'));
            this.set("avatar", foundMember.get('avatar'));
            console.log("signed in");
        },
        signOut(params){
            this.set("name", "");
            this.set("email","");
            this.set("screenName","");
            this.set("password", "");
            this.set("avatar", "");
            console.log("signed outs");
        }

});
