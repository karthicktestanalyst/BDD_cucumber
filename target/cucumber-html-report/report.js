$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Prathap/Desktop/cucumber/features/excelwrite.feature");
formatter.feature({
  "name": "Write product details in excel sheet",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "write data into excel sheet",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on Myntra home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Excelwrite_StepDef.user_is_on_Myntra_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to product details info page",
  "keyword": "When "
});
formatter.match({
  "location": "Excelwrite_StepDef.user_navigates_to_product_details_info_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Writing details into excel sheet",
  "keyword": "Then "
});
formatter.match({
  "location": "Excelwrite_StepDef.writing_details_into_excel_sheet()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\n  (Driver info: chromedriver\u003d2.46.628402 (536cd7adbad73a3783fdc2cab92ab2ba7ec361e1),platform\u003dWindows NT 6.1.7600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027USER\u0027, ip: \u0027192.168.43.169\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.46.628402 (536cd7adbad73a..., userDataDir: C:\\Users\\Prathap\\AppData\\Lo...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:57232}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 75.0.3770.100, webStorageEnabled: true}\nSession ID: 3406870a7c8afeb939e3b12ec741e133\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.window(RemoteWebDriver.java:902)\r\n\tat StepDefinition.Excelwrite_StepDef.writing_details_into_excel_sheet(Excelwrite_StepDef.java:86)\r\n\tat ✽.Writing details into excel sheet(C:/Users/Prathap/Desktop/cucumber/features/excelwrite.feature:7)\r\n",
  "status": "failed"
});
formatter.uri("C:/Users/Prathap/Desktop/cucumber/features/login.feature");
formatter.feature({
  "name": "Login Myntra",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Myntra Home Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User Navigate to Login Page",
  "keyword": "When "
});
formatter.step({
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User successfully Logged in",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "Password"
      ]
    },
    {
      "cells": [
        "ramkmrshiv@gmail.com",
        "9988776655"
      ]
    },
    {
      "cells": [
        "baladharini@gmail.com",
        "9941898416"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Myntra Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDef.user_is_on_Myntra_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigate to Login Page",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDef.user_Navigate_to_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"ramkmrshiv@gmail.com\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDef.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User successfully Logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDef.user_successfully_Logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Myntra Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDef.user_is_on_Myntra_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigate to Login Page",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDef.user_Navigate_to_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"baladharini@gmail.com\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDef.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User successfully Logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDef.user_successfully_Logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("C:/Users/Prathap/Desktop/cucumber/features/payment.feature");
formatter.feature({
  "name": "Checkout the Product",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Product Payment with Valid Credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Payment_StepDef.user_is_on_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects a particular product",
  "keyword": "When "
});
formatter.match({
  "location": "Payment_StepDef.user_selects_a_particular_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user bags the selected product",
  "keyword": "Then "
});
formatter.match({
  "location": "Payment_StepDef.user_bags_the_selected_product()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("C:/Users/Prathap/Desktop/cucumber/features/signup.feature");
formatter.feature({
  "name": "Sign up the Myntra application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "New User Registration in Myntra",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is on the Myntra",
  "keyword": "Given "
});
formatter.match({
  "location": "Signup_StepDef.user_is_on_the_Myntra()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Opens the Signup Link",
  "keyword": "When "
});
formatter.match({
  "location": "Signup_StepDef.user_Opens_the_Signup_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enters Email, Name, Mobile Number, and Gender",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup_StepDef.user_Enters_Email_Name_Mobile_Number_and_Gender()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks the \"REGISTER\" Button",
  "keyword": "And "
});
formatter.match({
  "location": "Signup_StepDef.clicks_the_Button(String)"
});
formatter.result({
  "status": "passed"
});
});