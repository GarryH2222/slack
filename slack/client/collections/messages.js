/**
 * Created by omgitsg on 10/8/15.
 */
Messages = new Mongo.Collection("messages");

Messages.insert({greeting: "hello"}, function() {});