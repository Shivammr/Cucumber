package StepDefinitions;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Compose {
	
    WebDriver driver;
    
    @When("^User enters username$")
    public void user_inserts_username(DataTable username)
    {
    	List<List<String>> data = username.raw();
    	driver.findElement(By.id("identifierId")).sendKeys(data.get(0).get(0));
    }
    
    @And("^User enters the password$")
    public void user_inserts_password(DataTable password)
    {
    	List<List<String>> data = password.raw();
    	driver.findElement(By.name("password")).sendKeys(data.get(0).get(0));
    }
    
	@When("^User clicks on the Compose button$")
	public void user_hits_compose()
	{
		driver.findElement(By.xpath("//div[contains(text(), 'Compose')]")).click();
	}
	
	@Then("^User enters the recipient$")
	public void user_enters_recipient(DataTable recipient)
	{
		List<List<String>> data = recipient.raw();
		driver.findElement(By.xpath("//div[contains(text(), 'Recipients')]")).sendKeys(data.get(0).get(0));
	}
	
	@Then("^User enters the subject$")
	public void user_enters_subject(DataTable subject)
	{
		List<List<String>> data = subject.raw();
		driver.findElement(By.name("subjectbox")).sendKeys(data.get(0).get(0));
	}
	
	@Then("^User enters the mail body$")
	public void user_enters_message(DataTable message)
	{
		List<List<String>> data = message.raw();
		driver.findElement(By.xpath("//div[@id=':no']")).sendKeys(data.get(0).get(0));
	}
}
















