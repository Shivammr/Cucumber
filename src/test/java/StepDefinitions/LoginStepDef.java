package StepDefinitions;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class LoginStepDef {
		
	WebDriver driver= new ChromeDriver();
	
	@Given("^User is on the login page$")
	public void user_on_login_page()
	{	
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\BrowserDrivers\\chromedriver.exe");
		driver.get("http://www.gmail.com/");	
	}
	
	@When("^User enters the username$")
	public void user_enters_username()
	{
		driver.findElement(By.id("identifierId")).sendKeys("shivammrastogi");
	}
	/*
	@And("^User clicks on Next button$")
	public void user_hits_Next_button()
	{
		driver.findElement(By.id("identifierNext")).click();
	}*/
}
