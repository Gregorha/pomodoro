const { DateTime } = require("luxon");
const importantEvents = [
  {
    date: DateTime.local().set({hours: 16, minutes: 30 , seconds: 0 , milliseconds: 0}), label: "Aula"
  },
  {
    date: DateTime.local().set({hours: 19, minutes: 30 , seconds: 0 , milliseconds: 0}), label: "Forms"
  },
  {
    date: DateTime.local().set({hours: 19, minutes: 40 , seconds: 0 , milliseconds: 0}), label: "Fechamento"
  },
  {
    date: DateTime.local().set({hours: 20, minutes: 0 , seconds: 0 , milliseconds: 0}), label: "Fechamento2"
  }
]

export default importantEvents;