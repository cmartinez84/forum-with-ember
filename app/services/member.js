import Ember from 'ember';

export default Ember.Service.extend({
    name:  "Unregistered Name",
    email: "Unregistered Email",
    password: "Unregistered password",
    screenName: "Unregistered avatar",
    avatar: "Unregistered avatar",
        signIn(params){
            this.set("name", params.name);
            this.set("email", params.email);
            this.set("screenName", params.screenName);
            this.set("password", params.password);
            this.set("avatar", params.avatar);
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
