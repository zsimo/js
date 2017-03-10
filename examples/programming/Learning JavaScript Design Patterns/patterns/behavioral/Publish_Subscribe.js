/**
 * Created by Simone.Sacchi on 10/03/2017.
 */

"use strict";

// main methods:
// 1. publish()
// 2. subscribe()
// 3. unsubscribe()

// A very simple new mail handler

// A count of the number of messages received
var mailCounter = 0;

// Initialize subscribers that will listen out for a topic
// with the name "inbox/newMessage".

// Render a preview of new messages
var subscriber1 = subscribe( "inbox/newMessage", function( topic, data ) {

    // Log the topic for debugging purposes
    console.log( "A new message was received: ", topic );

    // Use the data that was passed from our subject
    // to display a message preview to the user
    $( ".messageSender" ).html( data.sender );
    $( ".messagePreview" ).html( data.body );

});

// Here's another subscriber using the same data to perform
// a different task.

// Update the counter displaying the number of new
// messages received via the publisher

var subscriber2 = subscribe( "inbox/newMessage", function( topic, data ) {

    $('.newMessageCounter').html( ++mailCounter );

});

publish( "inbox/newMessage", [{
    sender: "hello@google.com",
    body: "Hey there! How are you doing today?"
}]);

// We could then at a later point unsubscribe our subscribers
// from receiving any new topic notifications as follows:
// unsubscribe( subscriber1 );
// unsubscribe( subscriber2 );