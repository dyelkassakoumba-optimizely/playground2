function(activate, options) { 
      $(document).ajaxComplete(function(event, xhr, settings) { 
         if (xhr.responseJSON.hasRecommendation && !options.isActive) { 
            console.log("Activating the experiment");
            activate(); 
         }else{console.log("Not in the experiment");} 
      }); 
}