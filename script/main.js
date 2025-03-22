document.getElementById("log-inn").addEventListener('click', function () {
    window.location.href = "second.html";
})


document.getElementById("completed-btn").addEventListener('click', function (event) {
    event.preventDefault();

    const taskNumbers = getInputTextId("task-number");
    const navNumber = getInputTextId("nav-number");

    
})

function showNowDate() {
  const now = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = days[now.getDay()];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthName = months[now.getMonth()];

  const dayNumber = now.getDate();
  const year = now.getFullYear();

  const formattedDate = `${dayName},<br>${monthName} ${dayNumber} ${year}`;

  document.getElementById("now-date").innerHTML = formattedDate;
}

showNowDate();

document
  .getElementById("color-mode")
  .addEventListener("click", function () {
    let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
  });

  // box--> 1
document
  .getElementById("completed-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const button = document.getElementById("completed-btn");
    const mainNumber = getInnerTextId("main-number");
    const navNumber = getInnerTextId("nav-number");
    const mobile = document.getElementById("mobile");
    const convertedMobile = mobile.textContent;
    let now = new Date();
    let n = now.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    if (mainNumber > 0) {
      const sum = mainNumber - 1;
      setInnerTextByIdandValue("main-number", sum);
      const puls = navNumber + 1;
      setInnerTextByIdandValue("nav-number", puls);

      const container = document.getElementById("activity-log");
      const p = document.createElement("p");
      p.innerHTML = `
      You have completed the task ${convertedMobile} at ${n}
      `;
      container.appendChild(p);

      button.disabled = true;
      button.style.backgroundColor = "#e0e0e0";
      button.style.color = "#a0a0a0";
      button.style.cursor = "default";

      alert("Board updated Successfull");
    }
  });

// box --> 2
document
  .getElementById("completed-btn-2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const button = document.getElementById("completed-btn-2");
    const mainNumber = getInnerTextId("main-number");
    const navNumber = getInnerTextId("nav-number");
    const dark = document.getElementById("dark");
    const convertedDark = dark.textContent;
    let now = new Date();
    let n = now.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    if (mainNumber > 0) {
      const sum = mainNumber - 1;
      setInnerTextByIdandValue("main-number", sum);
      const puls = navNumber + 1;
      setInnerTextByIdandValue("nav-number", puls);

      const container = document.getElementById("activity-log");
      const p = document.createElement("p");
      p.innerHTML = `
      You have completed the task ${convertedDark} at ${n}
      `;
      container.appendChild(p);

      button.disabled = true;
      button.style.backgroundColor = "#e0e0e0";
      button.style.color = "#a0a0a0";
      button.style.cursor = "default";

      alert("Board updated Successfull");
    }
  });

//   box--> 3
document
  .getElementById("completed-btn-3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const button = document.getElementById("completed-btn-3");
    const mainNumber = getInnerTextId("main-number");
    const navNumber = getInnerTextId("nav-number");
    const optimize = document.getElementById("optimize");
    const convertedOptimize = optimize.textContent;
    let now = new Date();
    let n = now.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    if (mainNumber > 0) {
      const sum = mainNumber - 1;
      setInnerTextByIdandValue("main-number", sum);
      const puls = navNumber + 1;
      setInnerTextByIdandValue("nav-number", puls);

      const container = document.getElementById("activity-log");
      const p = document.createElement("p");
      p.innerHTML = `
      You have completed the task ${convertedOptimize} at ${n}
      `;
      container.appendChild(p);

      button.disabled = true;
      button.style.backgroundColor = "#e0e0e0";
      button.style.color = "#a0a0a0";
      button.style.cursor = "default";

      alert("Board updated Successfull");
    }
  });

//box--> 4
document
  .getElementById("completed-btn-4")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const button = document.getElementById("completed-btn-4");
    const mainNumber = getInnerTextId("main-number");
    const navNumber = getInnerTextId("nav-number");
    const add = document.getElementById("add");
    const convertedAdd= add.textContent;
    let now = new Date();
    let n = now.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    if (mainNumber > 0) {
      const sum = mainNumber - 1;
      setInnerTextByIdandValue("main-number", sum);
      const puls = navNumber + 1;
      setInnerTextByIdandValue("nav-number", puls);

      const container = document.getElementById("activity-log");
      const p = document.createElement("p");
      p.innerHTML = `
      You have completed the task ${convertedAdd} at ${n}
      `;
      container.appendChild(p);

      button.disabled = true;
      button.style.backgroundColor = "#e0e0e0";
      button.style.color = "#a0a0a0";
      button.style.cursor = "default";

      alert("Board updated Successfull");
    }
  });

// box--> 5
  document
    .getElementById("completed-btn-5")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const button = document.getElementById("completed-btn-5");
      const mainNumber = getInnerTextId("main-number");
      const navNumber = getInnerTextId("nav-number");
      const api = document.getElementById("api");
      const convertedApi = api.textContent;
      let now = new Date();
      let n = now.toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      if (mainNumber > 0) {
        const sum = mainNumber - 1;
        setInnerTextByIdandValue("main-number", sum);
        const puls = navNumber + 1;
        setInnerTextByIdandValue("nav-number", puls);

        const container = document.getElementById("activity-log");
        const p = document.createElement("p");
        p.innerHTML = `
      You have completed the task ${convertedApi} at ${n}
      `;
        container.appendChild(p);

        button.disabled = true;
        button.style.backgroundColor = "#e0e0e0";
        button.style.color = "#a0a0a0";
        button.style.cursor = "default";

        alert("Board updated Successfull");
      }
    });

// box--> 6
    document
      .getElementById("completed-btn-6")
      .addEventListener("click", function (event) {
        event.preventDefault();
        const button = document.getElementById("completed-btn-6");
        const mainNumber = getInnerTextId("main-number");
        const navNumber = getInnerTextId("nav-number");
        const jobs = document.getElementById("job");
        const convertedJob = jobs.textContent;
        let now = new Date();
        let n = now.toLocaleString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        if (mainNumber > 0) {
          const sum = mainNumber - 1;
          setInnerTextByIdandValue("main-number", sum);
          const puls = navNumber + 1;
          setInnerTextByIdandValue("nav-number", puls);

          const container = document.getElementById("activity-log");
          const p = document.createElement("p");
          p.innerHTML = `
      You have completed the task ${convertedJob} at ${n}
      `;
          container.appendChild(p);

          button.disabled = true;
          button.style.backgroundColor = "#e0e0e0";
          button.style.color = "#a0a0a0";
          button.style.cursor = "default";

          alert("Board updated Successfull");
          }
          alert("congregation! you are all completed");
      });


// clear history
  document
    .getElementById("clear-history")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const activityLog = document.getElementById("activity-log");
      while (activityLog.firstChild) {
        activityLog.removeChild(activityLog.firstChild);
      }
    });