function setDate() {
  var date = new Date();
  var n = date.toDateString();
  var time = date.toLocaleTimeString();

  document.getElementById('time').innerHTML = n + ' ' + time
}

setInterval(setDate, 1000)

var output = $('.eve_output');
var input = $('textarea.input');
var toOutput;

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  });
}

async function init() {
  await sleep(300)
  Output(`
  <div class="eve_title">
    <h1 class="purple" style="margin-top: 5px; margin-bottom: 15px;">TempleOS V4.05</h1>   
    <span>Public Domain Operating System</span>    
  </div>`)
  await sleep(300)
  Output(`
  <pre contenteditable="false">
<span><a onclick="help()" href="#">Help & Index</a>, <a  href="#">Quick Start: Cmd line</a></span>
<span><a class="lightblue" href="#">Directory</a> of C:/Home</span>
<span>DATE_ TIME_ SIZE</span>
<span>06/07 10:39 0000 <a class="lightblue" onclick="home()" href="#">.</a></span>
<span>06/07 10:39 0000 <a class="lightblue" href="#">..</a></span>
<span>06/07 11:38 0000 <a class="lightblue" onclick="homePort()" href="#">portfolio</a></span>
<span>06/07 12:50 038E <a onclick="contacts()" href="#">contacts</a></span>
<span>06/07 14:36 01F9 <a onclick="templeos()" href="#">templeos</a></span>      
  </pre>`)
}

input.keypress(function(e) {
	if (e.which == 13) {
		var data = $.trim(input.val());

    switch(true) {
      case /^help$/.test(data):
        help()
        input.val('');
      break;
      default:
        input.val('');
      break;
    }
  }
});
function contacts() {
  Output(`
  <pre contenteditable="false">
<a href="https://github.com/voznyiarsen">github.com/voznyiarsen</a>
<a href="https://www.linkedin.com/in/voznyiarsen">linkedin.com/in/voznyiarsen</a>
  </pre>`);
}
function templeos() {
  Output(`  
  <pre contenteditable="false">
<a href="https://templeos.org/">templeos.org</a>
  </pre>`)
}
function home() {
  Output(`
  <pre contenteditable="false">
<span><a class="lightblue" href="#">Directory</a> of C:/Home</span>
<span>DATE_ TIME_ SIZE</span>
<span>06/07 10:39 0000 <a class="lightblue" onclick="home()" href="#">.</a></span>
<span>06/07 10:39 0000 <a class="lightblue" href="#">..</a></span>
<span>06/07 11:38 0000 <a class="lightblue" onclick="homePort()" href="#">portfolio</a></span>
<span>06/07 12:50 038E <a onclick="contacts()" href="#">contacts</a></span>
<span>06/07 14:36 01F9 <a onclick="templeos()" href="#">templeos</a></span>      
  </pre>`);
}
function homePort() {
  Output(`
  <pre contenteditable="false">
<span><a class="lightblue" href="#">Directory</a> of C:/Home/Portfolio</span>
<span>DATE_ TIME_ SIZE</span>
<span>06/07 11:39 0000 <a class="lightblue" onclick="homePort()" href="#">.</a></span>
<span>06/07 11:39 0000 <a class="lightblue" onclick="home()" href="#">..</a></span>
<span>09/07 14:30 01AE <a href="#">1</a></span>
<span>06/08 15:50 08E3 <a href="#">2</a></span>
<span>08/07 11:36 0F19 <a href="#">3</a></span>
  </pre>`);
}

async function Output(data) {
  $(`${data}`).appendTo(output);
}

init()