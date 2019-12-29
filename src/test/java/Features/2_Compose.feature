Feature: Compose mail

Scenario: Compose a new email
Given User is on the login page
When User enters username
| shivammrastogi |

And User clicks on Next button
And User enters the password
| rakshik$ |

And User hits Next button
Then User gets navigated to Inbox
When User clicks on the Compose button
Then User enters the recipient
| shivammrastogi@gmail.com |

Then User enters the subject
| Subject |

Then User enters the mail body
| Test email |
