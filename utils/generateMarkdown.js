// badges
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license === "MIT") {
    badge =
      "![Static Badge](https://img.shields.io/badge/MIT-license-blue?labelColor=red)";
  } else if (license === "Apache 2.0") {
    badge =
      "![Static Badge](https://img.shields.io/badge/Apache%202.0-license-blue?labelColor=green&color=purple)";
  } else if (license === "Boost") {
    badge =
      "![Static Badge](https://img.shields.io/badge/Boost-license-yellow?labelColor=grey)";
  } else if (license === "GNU") {
    badge =
      "![Static Badge](https://img.shields.io/badge/GNU-license-violet?labelColor=pink)";
  } else {
    badge = "";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "none") {
    licenseLink = "";
  } else if (license === "MIT") {
    licenseLink = "https://opensource.org/license/mit/";
  } else if (license === "Apache 2.0") {
    licenseLink = "https://www.apache.org/licenses/LICENSE-2.0";
  } else if (license === "Boost") {
    licenseLink = "https://www.boost.org/doc/libs/1_31_0/LICENSE_1_0.txt";
  } else if (license === "GNU") {
    licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   let licenseSec = "";
//   if (license === "none") {
//     licenseSec = "";
//   } else {
//     licenseSec = `## License: ${license}`;
//   }
//   return licenseSec;
// }

// 'MIT', 'Apache 2.0', 'Boost', 'GNU'

// TODO: Create a function to generate markdown for README
function generateMarkdown(name) {
  console.log(name);
  return `
# ${name.title}
${renderLicenseBadge(name.license)}

## Description
${name.description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Usage
${name.usage}

## Credits

## License

${renderLicenseLink(name.license)}

## Features

## How to Contribute
${name.contribution}

## Tests
${name.tests}


`;
}

module.exports = generateMarkdown;

// can make badges clickable utilizing [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) brackets and parentheses notation!! REFACTOR