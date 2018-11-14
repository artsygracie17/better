// ts -> date string: 

const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const ts = 1337774582
const date = new Date(ts)
const year = date.getFullYear()
const day = date.getDate()
const month = months[date.getMonth()]

const activeDate = `active since ${month} ${day}, ${year}`