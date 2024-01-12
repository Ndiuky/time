let mode;
const output = document.getElementById("output");
const fullBtn = document.getElementById("full");
const dateBtn = document.getElementById("date");
const timeBtn = document.getElementById("time");

function format(formatMode) {
  const now = new Date();

  switch (formatMode) {
    case "time":
      return now.toLocaleTimeString();
    case "date":
      return now.toLocaleDateString();
    case "full":
      return now.toLocaleTimeString() + " " + now.toLocaleDateString();
    default:
      return now.toLocaleTimeString();
  }
}

function update() {
  setInterval(() => {
    output.textContent = format(mode);
  }, 1000);
}

function bindMode(name) {
  return () => {
    mode = name;
    update();
  };
}

fullBtn.onclick = bindMode("full");

dateBtn.onclick = bindMode("date");

timeBtn.onclick = bindMode("time");

update();
