const fs = require("fs");
const fileNames = [
  "Add",
  "ArrowDown",
  "ArrowUp",
  "Calendar",
  "Pin",
  "Location",
  "Dead",
  "Logout",
  "Settings",
  "OpenEye",
  "ClosedEye",
  "User",
  "Civilians",
  "Police",
  "Dispatch",
  "Fire",
  "Home",
];

const tmpl = `<template>
  <g> </g>
</template>
`;

for (let i = 0; i <= fileNames.length; i++) {
  fs.writeFile(`Icon${fileNames[i]}.vue`, tmpl, (err) => err);
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
