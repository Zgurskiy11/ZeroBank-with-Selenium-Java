$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/PurchaseForeignCurrency.feature");
formatter.feature({
  "name": "Purchase Foreign Currency",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Error message for not entering value",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@a"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Purchase foreign currency cash tab",
  "keyword": "Given "
});
formatter.match({
  "location": "PurchaseForeignCurrencyStepDefinition.the_user_accesses_the_Purchase_foreign_currency_cash_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tries to calculate cost without entering a value",
  "keyword": "When "
});
formatter.match({
  "location": "PurchaseForeignCurrencyStepDefinition.userTriesToCalculateCostWithoutEnteringAValue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PurchaseForeignCurrencyStepDefinition.errorMessageShouldBeDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});