Feature: Compose mail

Scenario: Compose a new email
Given User is logged in
When User clicks on the Compose button
Then User enters the recipient

Then User enters the subject
Then User enters the mail body

