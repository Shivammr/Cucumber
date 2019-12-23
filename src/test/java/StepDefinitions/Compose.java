package StepDefinitions;


import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Compose {
	
    WebDriver driver;

	@Given("^User is logged in$")
	public void user_has_logged_in()
	{
		String Compose = driver.findElement(By.xpath("//div[contains(text(), 'Compose')]")).getText();
		Assert.assertEquals("Compose", Compose);
	}
	
	@When("^User clicks on the Compose button$")
	public void user_hits_compose()
	{
		driver.findElement(By.xpath("//div[contains(text(), 'Compose')]")).click();
	}
	
	@Then("^User enters the recipient$")
	public void user_enters_recipient()
	{
		driver.findElement(By.xpath("//div[contains(text(), 'Recipients')]")).sendKeys("shivamm");
	}
	
	@Then("^User enters the subject$")
	public void user_enters_subject()
	{
		driver.findElement(By.name("subjectbox")).sendKeys("Subject");
	}
	
	@Then("^User enters the mail body$")
	public void user_enters_message()
	{
		driver.findElement(By.xpath("//div[@id=':no']")).sendKeys("message");
	}
}
















