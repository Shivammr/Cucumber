$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Shivamm/eclipse-workspace/Cucumber/src/test/java/Features/2_Compose.feature");
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
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters username",
  "rows": [
    {
      "cells": [
        "shivammrastogi"
      ],
      "line": 6
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters the password",
  "rows": [
    {
      "cells": [
        "rakshik$"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User hits Next button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User gets navigated to Inbox",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User clicks on the Compose button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters the recipient",
  "rows": [
    {
      "cells": [
        "shivammrastogi@gmail.com"
      ],
      "line": 16
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User enters the subject",
  "rows": [
    {
      "cells": [
        "Subject"
      ],
      "line": 19
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User enters the mail body",
  "rows": [
    {
      "cells": [
        "Test email"
      ],
      "line": 22
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_on_login_page()"
});
formatter.result({
  "duration": 21689666100,
  "status": "passed"
});
formatter.match({
  "location": "Compose.user_inserts_username(DataTable)"
});
formatter.result({
  "duration": 9339400,
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Compose.user_inserts_username(Compose.java:21)\r\n\tat ✽.When User enters username(C:/Users/Shivamm/eclipse-workspace/Cucumber/src/test/java/Features/2_Compose.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login.user_hits_Next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Compose.user_inserts_password(DataTable)"
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
  "location": "Compose.user_hits_compose()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Compose.user_enters_recipient(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Compose.user_enters_subject(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Compose.user_enters_message(DataTable)"
});
formatter.result({
  "status": "skipped"
});
});