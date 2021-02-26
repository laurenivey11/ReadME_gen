
module.exports = templateData => {
    const { project, tests, description, install, user, contributing, username, email, license } = templateData;
        return `
        # Project Title

    ${project}

    ## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)

    ## Description

    ${description}

    ## Getting Started

    ### Dependencies

    * ${install}

    ### Tests

    * ${tests}

    ### Using the Repo

    * ${user}


    ## Contributing 

    * ${contributing}

    ## Author

    Contributors names and contact info

    ${username}
    ${email}

    ## License

    This project is licensed under the ${license} License - see the LICENSE.md file for details
    `;
};




