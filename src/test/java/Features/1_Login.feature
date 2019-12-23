Feature: Gmail Login

Scenario Outline: Log in to Gmail
Given User is on the login page
When User enters the "<username>"
And User clicks on Next button
And User enters "<password>"
And User hits Next button
Then User gets navigated to Inbox
And User closes the browser

Examples:
| username | password |
| shivammrastogi | rakshik$ |
| shivammrastogi05 | rakshik$$ |


