/* Minimal JS for basic interactions */
document.getElementById('year').textContent = new Date().getFullYear();

function onContact(e){
  e.preventDefault();
  const name = (document.getElementById('name')||{}).value || '';
  const email = (document.getElementById('email')||{}).value || '';
  const message = (document.getElementById('message')||{}).value || '';
  if(!name || !email || !message){
    alert('Please complete all fields before sending.');
    return;
  }
  const mailto = 'mailto:quantumflow.autosystems@gmail.com'
    + '?subject=' + encodeURIComponent('Website contact from ' + name)
    + '&body=' + encodeURIComponent(message + '\\n\\nReply to: ' + email);
  // open mail client
  window.location.href = mailto;
  alert('Your mail app will open — send to complete.');
}
