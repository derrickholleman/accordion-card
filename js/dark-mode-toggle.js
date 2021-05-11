/* toggles .dark-mode on body on button click */
$(document).ready(function(){
  $('.dark-mode-button').click(function(){
      $('body').toggleClass('dark-mode')
      let darkThemeEnabled = $('body').hasClass('dark-mode');
      localStorage.setItem('dark-theme-enabled', darkThemeEnabled);
  })
})

/* keeps page in previously selected mode */
if (JSON.parse(localStorage.getItem('dark-theme-enabled'))) {
  $('body').addClass('dark-mode'); 
}