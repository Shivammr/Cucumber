$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("1_Login.feature");
formatter.feature({
  "line": 1,
  "name": "Gmail Login",
  "description": "",
  "id": "gmail-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Log in to Gmail",
  "description": "",
  "id": "gmail-login;log-in-to-gmail",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters the \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User hits Next button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User gets navigated to Inbox",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User closes the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "gmail-login;log-in-to-gmail;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "gmail-login;log-in-to-gmail;;1"
    },
    {
      "cells": [
        "shivammrastogi",
        "rakshik$"
      ],
      "line": 14,
      "id": "gmail-login;log-in-to-gmail;;2"
    },
    {
      "cells": [
        "shivammrastogi05",
        "rakshik$$"
      ],
      "line": 15,
      "id": "gmail-login;log-in-to-gmail;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Log in to Gmail",
  "description": "",
  "id": "gmail-login;log-in-to-gmail;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters the \"shivammrastogi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters \"rakshik$\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User hits Next button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User gets navigated to Inbox",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "shivammrastogi",
      "offset": 17
    }
  ],
  "location": "Login.user_enters_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_hits_Next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "rakshik$",
      "offset": 13
    }
  ],
  "location": "Login.user_enters_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_selects_Next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_navigates_inbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_closes_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Log in to Gmail",
  "description": "",
  "id": "gmail-login;log-in-to-gmail;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters the \"shivammrastogi05\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters \"rakshik$$\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User hits Next button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User gets navigated to Inbox",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "shivammrastogi05",
      "offset": 17
    }
  ],
  "location": "Login.user_enters_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_hits_Next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "rakshik$$",
      "offset": 13
    }
  ],
  "location": "Login.user_enters_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_selects_Next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_navigates_inbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_closes_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("2_Compose.feature");
formatter.feature({
  "line": 1,
  "name": "Compose mail",
  "description": "",
  "id": "compose-mail",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Compose a new email",
  "description": "",
  "id": "compose-mail;compose-a-new-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on the Compose button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters the recipient",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enters the subject",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters the mail body",
  "keyword": "Then "
});
formatter.match({
  "location": "Compose.user_has_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Compose.user_hits_compose()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Compose.user_enters_recipient()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Compose.user_enters_subject()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Compose.user_enters_message()"
});
formatter.result({
  "status": "skipped"
});
});