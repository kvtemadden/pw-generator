# password generator
This is a password generator created for a client. It allows a user to select preferences, including whether they want to inlude: Uppercase letters; lowercase letters; special characters; numbers and the length of the password (8-128 characters).

Based on their choices, the generator will then output a display which matches all of the user's choices.

Users can copy their password to clipboard and use wherever necessary.

## Contents
Section | Description
------------ | -------------
[Screenshot](#screenshot) | Screenshots of the password generator and links to the working site & repo.
[Functionality](#functionality) | Information on the functionality of the password generator.
[Licence](#licence) | Licence for the source code

## Screenshot
![Screenshot of working password generator](/Assets/Screenshot_of_working_password_generator.PNG)

You can access the site via [this link](https://kvtemadden.github.io/pw-generator/)

And you can access the GitHub Repo via [this link](https://github.com/kvtemadden/pw-generator)

## Functionality
This password generator begins with a message saying "Your secure password" in a display box.

When a user clicks on the "generate" button, it prompts the user to answer five questions.

>`1.` The length that they want their password to be, between 8-128 characters.<br>
> `1a.` If the user picks a number between 8-128 then it prompts questions 2-4. If the user picks anything else then it alerts them that their input wasn't valid and restarts the questions.<br>
>`2.` If the user wants to include lowercase characters.<br>
>`3.` If the user wants to include uppercase characters.<br>
>`4.` If the user wants to include numbers.<br>
>`5.` If the user wants to include special characters.<br>
>`2a, 3a, 4a, 5a.` Based on what the user chooses (confirms/cancels) then the password will/won't include those characters.<br>
>`6.` The password, to the user's conditions, will then show in the display box which used to say "Your secure password", at the length chosen to begin with.<br>
>`7.` The user can then copy the output of randomly generated characters by clicking the "Copy to Clipboard" button which I added to the site. This creates a better user experience, as if the password was at the maximum length (128 characters) then it could get difficult for a user to copy the whole password. It removes potential for missing any characters in the event of highlighting the password to copy it.

## Licence
> This site was created under the standard MIT licence.

![GitHub](https://img.shields.io/github/license/kvtemadden/portfolio?color=%23203333&label=LICENCED%20AS&style=for-the-badge)
