const fs = require('fs')
const fileNames = [
  'Add',
  'Analytics',
  'Arrests',
  'Asset104',
  'Asset114',
  'Asset93',
  'AuditLogs',
  'Blocked',
  'Charts',
  'Defean',
  'Departments',
  'DossierProfile',
  'Fines',
  'History',
  'ImportantNotification',
  'MaxSound',
  'MedicalInsurance',
  'MedicalRecords',
  'MessagesChat',
  'MuteNotifications',
  'Notification',
  'NotProtected',
  'PayAttention',
  'Protected',
  'RadioAlarm',
  'Randomizer',
  'LowSound',
  'Security',
  'Time',
  'User',
  'Vehicles',
  'Warrants',
  'Weapon',
  'Work',
  'WrittenWarrants'
]

const tmpl = `<template>
  <g> </g>
</template>
`

for (let i = 0; i <= fileNames.length; i++) {
  fs.writeFile(`Icon${fileNames[i]}.vue`, tmpl, (err) => err)
}

// FILENAMES FOR 24PX
// [
//   "Alarm",
//   "Alert",
//   "Civilians",
//   "Copy",
//   "Dead",
//   "Delete",
//   "Edit",
//   "EMSUnit",
//   "ExtraFeatures",
//   "Assign",
//   "UnAssign",
//   "Info",
//   "StatusIssue",
//   "Menu",
//   "ClipboardAdd",
//   "Analytics",
//   "StatusOK",
//   "Pin",
//   "PlayOn",
//   "PlayOff",
//   "Send",
//   "Supervisor",
//   "User",
//   "StatusWarning",
// ];
