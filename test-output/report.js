$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Gmail Login",
  "description": "",
  "id": "gmail-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Log in to Gmail",
  "description": "",
  "id": "gmail-login;log-in-to-gmail",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters the username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters the password",
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
formatter.match({
  "location": "LoginStepDef.user_on_login_page()"
});
formatter.result({
  "duration": 23837558500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_enters_username()"
});
formatter.result({
  "duration": 1067234100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_hits_Next_button()"
});
formatter.result({
  "duration": 7450926600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_enters_password()"
});
formatter.result({
  "duration": 955636400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_selects_Next_button()"
});
formatter.result({
  "duration": 142974000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_navigates_inbox()"
});
formatter.result({
  "duration": 8722700,
  "status": "passed"
});
});