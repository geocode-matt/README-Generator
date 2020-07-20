// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  
  ## Table of Contents
  * [Description](#description)
  * [Installation Instructions](#installation-instructions)
  * [Usage](#usage)
  * [Licensing](#licensing)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Tests](#tests)
  
  ## Description
  ${data.description} 

  ## Installation Instructions
  ${data.installation} 

  ## Usage
  ${data.usage} 

  ## Licensing
  This project is covered under ${data.license}.

  ## Contribution Guidelines
  ${data.contribution} 

  ## Tests  
  ${data.test}

  ## Questions
  Please send any questions/concerns/comments to: ${data.emailName}

`;
}

module.exports = generateMarkdown;
