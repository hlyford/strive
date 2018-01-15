$( document ).ready(function() {

  // On 'submit' click, validate the form
  $('.submit').click(function() {
    validateForm();
  });

  function validateForm() {    
    // Check if the form is complete
    if ( $('form input#first').val() === '' ||
     $('form input#last').val() === '' ||
     $('form input#email').val() === ''  || 
     $('.checkbox input:checked').length === 0 ) {      
      alert('You must enter all the fields and accept the terms.')
    } else {
      // If form is complete, open evaluation
      window.open('./eval.html', '_blank',);
    }
  }

  // ----- Logic for eval form -----
  var currentQuestion = 1;
  var countElement = $('.count');
  var promptElement = $('.prompt');
  var responseElement = $('.response');
  
  // Listen for submit button click
  $('.submitAnswer').click(function() {

    // if the field is filled out, go on, if not, alert user    
    var responseText = $(responseElement).val();    
    if (responseText === '') {
      alert('Please answer in the space below.');
    } else {
      // Store the response
      questions[currentQuestion - 1].response = responseText; 
      // Move to next question     
      currentQuestion++;
      // Assign the new values in the template
      var newPrompt = questions[currentQuestion].prompt;
      var timerValue = questions[currentQuestion].time_allowed;
      // Append to the DOM
      $(countElement).html(currentQuestion);
      $(promptElement).html(newPrompt);
      // Clear the text area
      $(responseElement.val(''));
      // Start the timer

    }    
  });


  // Object with question information
  var questions = [
    {
      number: 1,
      prompt: 'What is your favorite job and least favorite job and why?',
      time_allowed: 3,
      response: ''
    },
    {
      number: 2,
      prompt: 'What do you hope to be doing professionally five years from now?',
      time_allowed: 3,
      response: ''
    },
    {
      number: 3,
      prompt: 'Imagine that you are hired to work at a home repair company. Please describe how you would go about generating customers for your new company.',
      time_allowed: 3,
      response: ''
    },
    {
      number: 4,
      prompt: 'Imagine that you work at a home repair company. You recently visited a homeowner and gave them a proposal for $5,000 in repairs to fix a broken outdoor staircase ($1,000), fix a storm drain ($500) and install storm windows for the living room ($3,500).' +
      '<br />You receive the below email from the client later. Please write your reply below:' + 
      '<br /><i>Hey! Thanks for coming by earlier. I\'m interested in having your home repair company give my house some touch-ups, but I just can\'t afford the $5,000 right now. I\'ll be back in touch in six months when I\'m done with car payments and can discuss it then. Have a great day! - Doris</i>',
      time_allowed: 5,
      response: ''
    },
    {
      number: 5,
      prompt: 'What is a CRM? <br /> What are the greatest benefits of using a CRM?',
      time_allowed: 2,
      response: ''
    },
  ];


  // Helper functions for eval
  function timer(questionNumber) {

  }

});